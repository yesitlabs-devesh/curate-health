import * as React from 'react';

import ProductOptions from '@/components/layouts/component/productOptions';
import { getProduct } from '@/lib/shopify';
import parse from 'html-react-parser';

import ProductSellingSection from '@/sections/product-selling-section';
import ProductReviewSection from '@/sections/product-reviews-section';
import StartJourneySection from '@/sections/start-journey-section';
import FAQSection from '@/sections/faq-section';

interface ProductDetailsPageProps {
  params: {
    id: string;
  };
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const slug = params.id;
  const product = await getProduct(slug);
  if (!product) {
    // Handle error or redirect to a 404 page
    return <div>Product not found</div>;
  }
  const { title, description, images, priceRange, variants } = product;
  const imageUrl =
    images.edges[0]?.node.src ||
    'https://thumbs.dreamstime.com/b/image-unavailable-icon-simple-illustration-vector-stock-174841957.jpg';
  const originalPrice = priceRange.minVariantPrice.amount;
  const selectedVariant = variants.edges[0].node;
  console.log('selectedVariant', selectedVariant);
  return (
    <div>
      <div className="px-20 pt-8 max-md:px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col justify-center max-md:max-w-full">
                <div className="flex flex-col justify-center py-20 rounded-3xl border border-gray-300 border-solid bg-[linear-gradient(167deg,#FFF_16.77%,rgba(254,251,249,0.50_91.49%))] max-md:max-w-full">
                  <div className="flex gap-5 justify-between items-center mt-12 mb-5 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    {/* <img
                                            loading="lazy"
                                            src={imageUrl}
                                            alt={images.edges[0]?.node.altText || title}
                                            className="shrink-0 self-stretch my-auto border-2 border-solid shadow-sm aspect-[0.5] border-zinc-700 border-opacity-10 w-[21px]"
                                        /> */}
                    <img
                      loading="lazy"
                      src={imageUrl}
                      alt={images.edges[0]?.node.altText || title}
                      className="shrink-0 object-contain object-center self-stretch max-w-full w-full"
                    />
                    {/* <img
                                            loading="lazy"
                                            alt={images.edges[0]?.node.altText || title}
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/68957c25f30a15fa24391c0c408615ddb0cb43dcbb21ea41e577f38ac1d5e84c?apiKey=db678b7586ac404998e13a78e0473c5d&"
                                            className="shrink-0 self-stretch my-auto border-2 border-solid shadow-sm aspect-[0.5] border-zinc-700 border-opacity-10 w-[21px]"
                                        /> */}
                  </div>
                </div>
              </div>
              <div className="justify-center mt-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  {images.edges.slice(0, 3).map((image, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                    >
                      <img
                        loading="lazy"
                        src={
                          image.node.src ||
                          'https://thumbs.dreamstime.com/b/image-unavailable-icon-simple-illustration-vector-stock-174841957.jpg'
                        }
                        alt={image.node.altText || title}
                        className="object-containt object-center shrink-0 max-w-full border border-solid aspect-square border-zinc-100 w-[153px] max-md:mt-5"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="flex gap-0 self-start pr-6 text-sm font-medium tracking-normal capitalize text-neutral-600 max-md:flex-wrap max-md:pr-5">
                      <div className="justify-center px-2 py-1 whitespace-nowrap rounded-[100px]">
                        Home
                      </div>
                      <div className="justify-center px-2 py-1 whitespace-nowrap rounded-[100px]">
                        /
                      </div>
                      <div className="justify-center px-2 py-1 rounded-[100px]">
                        Smart Shop
                      </div>
                      <div className="justify-center px-2 py-1 whitespace-nowrap rounded-[100px]">
                        /
                      </div>
                      <div className="justify-center px-2 py-1 rounded-[100px]">
                        All items
                      </div>
                      <div className="justify-center px-2 py-1 whitespace-nowrap rounded-[100px]">
                        /
                      </div>
                      <div className="justify-center px-2 py-1 rounded-[100px] text-emerald-950">
                        {title}
                      </div>
                    </div>
                    <div className="flex flex-col mt-8 max-md:max-w-full">
                      <div className="flex flex-col capitalize max-md:max-w-full">
                        <div className="text-3xl font-medium tracking-wide text-emerald-950 max-md:max-w-full">
                          {title}
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start mt-6 max-md:pr-5 max-md:max-w-full">
                        <div className="flex gap-4">
                          <div className="text-sm tracking-normal capitalize text-emerald-950">
                            10K + Sold
                          </div>
                          <div className="text-sm tracking-normal capitalize text-emerald-950">
                            •
                          </div>
                          <div className="flex gap-2.5">
                            <div className="flex gap-1 self-start">
                              {[...Array(5)].map((_, i) => (
                                <img
                                  key={i}
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3fd446b5bf5f5a9374423977f12e7f9c8477b2bc170b39a3b22c45eb0cb9965?apiKey=db678b7586ac404998e13a78e0473c5d&"
                                  className="shrink-0 w-5 aspect-square"
                                />
                              ))}
                            </div>
                            <div className="text-sm font-semibold tracking-normal capitalize text-emerald-950">
                              4.8
                            </div>
                          </div>
                          <div className="text-sm tracking-normal capitalize text-emerald-950">
                            •
                          </div>
                          <div className="text-sm tracking-normal capitalize text-emerald-950">
                            188 Reviews
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 pr-20 mt-11 capitalize max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium tracking-normal text-emerald-700">
                        Regular Price
                      </div>
                      <div className="mt-2 text-3xl italic font-semibold tracking-tight text-emerald-950">
                        ${originalPrice}
                      </div>
                    </div>
                  </div>
                </div>

                <ProductOptions
                  product={product}
                  variants={variants}
                  originalPrice={originalPrice}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductSellingSection />

      {/* TODO: we should get html description from the product and render it here */}

      <div className="p-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="mt-2.5 text-lg tracking-normal text-neutral-600 max-md:max-w-full">
          {parse(description)}
          {/* <img src="https://cdn.shopify.com/s/files/1/0677/1756/2607/files/image_38.png?v=1721140017" alt="withings" width={'100%'} /> */}
        </div>
        {/* <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow pb-11 max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col justify-center capitalize max-md:max-w-full">
                                <div className="flex flex-col max-md:max-w-full">
                                    <div className="text-3xl tracking-wide text-emerald-950 max-md:max-w-full">
                                        Apple Watch series 9
                                    </div>
                                    <div className="mt-6 text-sm tracking-normal text-neutral-600 max-md:max-w-full">
                                        Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing
                                        elit. Integer mattis nunc augue vel lacinia erat euismod ut.
                                        Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi
                                        felis. Lorem ipsum dolor sit amet, consectetur cdolor col
                                        adipiscing elit.
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing
                                        elit. Integer mattis nunc augue vel lacinia erat euismod ut.
                                        Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi
                                        felis.
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col mt-16 max-md:mt-10 max-md:max-w-full">
                                <div className="max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow justify-center max-md:mt-8">
                                                <div className="shrink-0 w-8 h-8 bg-gray-100 rounded" />
                                                <div className="mt-3.5 text-xl text-emerald-950">
                                                    Feature #1
                                                </div>
                                                <div className="mt-3.5 text-sm tracking-normal capitalize text-neutral-600">
                                                    Lorem ipsum dolor sit amet, consectetur cdolor col elit.
                                                    Integer mattis nunc.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow justify-center max-md:mt-8">
                                                <div className="shrink-0 w-8 h-8 bg-gray-100 rounded" />
                                                <div className="mt-3.5 text-xl text-emerald-950">
                                                    Feature #2
                                                </div>
                                                <div className="mt-3.5 text-sm tracking-normal capitalize text-neutral-600">
                                                    Lorem ipsum dolor sit amet, consectetur cdolor col elit.
                                                    Integer mattis nunc.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow justify-center max-md:mt-8">
                                                <div className="shrink-0 w-8 h-8 bg-gray-100 rounded" />
                                                <div className="mt-3.5 text-xl text-emerald-950">
                                                    Feature #1
                                                </div>
                                                <div className="mt-3.5 text-sm tracking-normal capitalize text-neutral-600">
                                                    Lorem ipsum dolor sit amet, consectetur cdolor col elit.
                                                    Integer mattis nunc.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow justify-center max-md:mt-8">
                                                <div className="shrink-0 w-8 h-8 bg-gray-100 rounded" />
                                                <div className="mt-3.5 text-xl text-emerald-950">
                                                    Feature #2
                                                </div>
                                                <div className="mt-3.5 text-sm tracking-normal capitalize text-neutral-600">
                                                    Lorem ipsum dolor sit amet, consectetur cdolor col elit.
                                                    Integer mattis nunc.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-10 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="shrink-0 mx-auto max-w-full bg-gray-100 rounded-3xl border border-gray-100 border-solid h-[620px] w-full max-md:mt-10" />
                    </div>
                </div> */}
      </div>

      <ProductReviewSection />
      <StartJourneySection />
      <FAQSection />
    </div>
  );
}
