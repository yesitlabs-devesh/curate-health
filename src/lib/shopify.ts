// const domain = process.env.SHOPIFY_STORE_DOMAIN as string;
const domain = 'www.curatewellness.com';
// const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN as string;
const storefrontAccessToken = 'dca614397adea1e7971d301e0861cbff';

interface Image {
  id: string;
  src: string;
  originalSrc: string;
  url: string;
  height: string;
  altText: string;
}

interface Variant {
  id: string;
  title: string;
  quantityAvailable: number;
  image: Image;
  priceV2: {
    amount: string;
    currencyCode: string;
  };
}

export interface Product {
  id: string;
  handle: string;
  description: string;
  title: string;
  totalInventory: number;
  variants: {
    edges: { node: Variant }[];
  };
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: { node: { src: string; altText: string } }[];
  };
}

interface ProductEdge {
  node: Product;
}

interface Collection {
  title: string;
  products: {
    edges: ProductEdge[];
  };
}

interface ProductsResponse {
  products: {
    edges: ProductEdge[];
  };
}

interface CollectionResponse {
  collection: Collection;
}

type ShopifyResponse = CollectionResponse | ProductsResponse;

interface ShopifyDataResponse<T> {
  data: T;
}

const productGraphqlNode = `
{
  id
  handle
  description
  title
  totalInventory
  variants(first: 25) {
    edges {
      node {
        id
        title
        quantityAvailable
        image {
            id
            src
            originalSrc
            url
            height
            altText
        }
        priceV2 {
          amount
          currencyCode
        }
      }
    }
  }
  priceRange {
    maxVariantPrice {
      amount
      currencyCode
    }
    minVariantPrice {
      amount
      currencyCode
    }
  }
  images(first: 1) {
    edges {
      node {
        src
        altText
      }
    }
  }
}`;

async function ShopifyData<T>(query: string): Promise<ShopifyDataResponse<T>> {
  const URL = `https://${domain}/api/2022-10/graphql.json`;
  const options = {
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 0 }, // Refetch data on every request
  };

  try {
    const response = await fetch(URL, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('ererrr', error);
    throw new Error('Products not fetched');
  }
}
export async function getCollections(number: number): Promise<Collection[]> {
  const query = `
    {
      collections(first: ${number}) {
        edges {
          node {
            id
            title
            handle
            updatedAt
          }
        }
      }
    }`;

  const response = await ShopifyData<{
    collections: { edges: { node: Collection }[] };
  }>(query);
  const allCollections = response.data.collections.edges.map(
    (edge) => edge.node
  );
  return allCollections;
}

export async function getProductsInCollection(
  collectionName: string,
  sortBy: string
): Promise<Product[]> {
  let sortKey = 'ID'; // Default sort key
  let reverse = false;

  switch (sortBy) {
    case 'Featured':
      sortKey = 'MANUAL'; // Assuming 'MANUAL' is used for featured items
      break;
    case 'Newest':
      sortKey = 'CREATED_AT';
      reverse = true;
      break;
    case 'Price: High to Low':
      sortKey = 'PRICE';
      reverse = true;
      break;
    case 'Price: Low to High':
      sortKey = 'PRICE';
      break;
  }

  const query =
    collectionName != '' && collectionName != null
      ? `
    {
      collection(handle: "${collectionName}") {
        title
        products(first: 10) {
          edges {
            node ${productGraphqlNode}
          }
        }
      }
    }`
      : `{
      products(sortKey: PRICE, first: 100, reverse: true) {
          edges {
            node {
              id
              handle
              description
              title
              totalInventory
              variants(first: 25) {
                edges {
                  node {
                    id
                    title
                    quantityAvailable
                    image {
                        id
                        src
                        originalSrc
                        url
                        height
                        altText
                    }
                    priceV2 {
                      amount
                      currencyCode
                    }
                  }
                }
              }
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    src
                    altText
                  }
                }
              }
            }
          }
        }
    }
  `;

  const response = await ShopifyData<ShopifyResponse>(query);

  const allProducts =
    'collection' in response.data
      ? response.data.collection.products.edges.map((edge) => edge.node)
      : response.data.products.edges.map((edge) => edge.node) || [];

  return allProducts.length ? allProducts : [];
}

export async function getProduct(handle: string): Promise<Product> {
  const query = `
    {
      product(handle: "${handle}") {
        collections(first: 1) {
          edges {
            node {
              products(first: 5) {
                edges {
                  node {
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                    handle
                    title
                    id
                    images(first: 5) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        id
        handle
        description
        title
        totalInventory
        variants(first: 25) {
            edges {
                node {
                id
                title
                quantityAvailable
                image {
                    id
                    src
                    originalSrc
                    url
                    height
                    altText
                }
                priceV2 {
                    amount
                    currencyCode
                }
                }
            }
        }
        priceRange {
            maxVariantPrice {
                amount
                currencyCode
            }
            minVariantPrice {
                amount
                currencyCode
            }
        }
        images(first: 10) {
            edges {
                node {
                    src
                    altText
                }
            }
        }
      }
    }`;

  const response = await ShopifyData<{ product: Product }>(query);
  const product = response.data.product;
  return product;
}

interface Checkout {
  id: string;
  webUrl: string;
}

export async function createCheckout(
  id: string,
  quantity: number
): Promise<Checkout> {
  const query = `
    mutation {
      checkoutCreate(input: {
        lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
      }) {
        checkout {
          id
          webUrl
        }
      }
    }`;

  const response = await ShopifyData<{
    checkoutCreate: { checkout: Checkout };
  }>(query);
  const checkout = response.data.checkoutCreate.checkout;
  return checkout;
}

interface LineItem {
  id: string;
  variantQuantity: number;
}

interface CheckoutLineItemsReplace {
  id: string;
  webUrl: string;
  lineItems: {
    edges: {
      node: {
        id: string;
        title: string;
        quantity: number;
      };
    }[];
  };
}

export async function updateCheckout(
  id: string,
  lineItems: LineItem[]
): Promise<CheckoutLineItemsReplace> {
  const lineItemsObject = lineItems
    .map((item) => {
      return `{
      variantId: "${item.id}",
      quantity:  ${item.variantQuantity}
    }`;
    })
    .join(',');

  const query = `
    mutation {
      checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
      }
    }`;

  const response = await ShopifyData<{
    checkoutLineItemsReplace: CheckoutLineItemsReplace;
  }>(query);
  console.log('response', response);
  return response.data.checkoutLineItemsReplace;
}

interface RecursiveProductNode {
  id: string;
  handle: string;
}

interface RecursiveCatalogResponse {
  products: {
    edges: {
      cursor: string;
      node: RecursiveProductNode;
    }[];
    pageInfo: {
      hasNextPage: boolean;
    };
  };
}

export async function recursiveCatalog(
  cursor: string = '',
  initialRequest: boolean = true
): Promise<RecursiveProductNode[]> {
  let data: RecursiveProductNode[];

  if (cursor !== '') {
    const query = `
      {
        products(after: "${cursor}", first: 250) {
          edges {
            cursor
            node {
              id
              handle
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }`;

    const response = await ShopifyData<RecursiveCatalogResponse>(query);
    data = response.data.products.edges.map((edge) => edge.node);

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const newCursor = response.data.products.edges[num - 1].cursor;
      return data.concat(await recursiveCatalog(newCursor, false));
    } else {
      return data;
    }
  } else {
    const query = `
      {
        products(first: 250) {
          edges {
            cursor
            node {
              id
              handle
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }`;

    const response = await ShopifyData<RecursiveCatalogResponse>(query);
    data = response.data.products.edges.map((edge) => edge.node);

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const newCursor = response.data.products.edges[num - 1].cursor;
      return data.concat(await recursiveCatalog(newCursor, false));
    } else {
      return data;
    }
  }
}
