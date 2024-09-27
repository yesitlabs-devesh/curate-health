'use client';
import { CartContext } from '@/context/shopContext';
import * as React from 'react';
import Link from 'next/link';
import { useState, useContext } from 'react';

import {
  getCollections,
  Product,
  getProductsInCollection,
} from '@/lib/shopify';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { title, images, priceRange, description, variants } = product;
  const selectedVariant = variants.edges[0].node;
  const { altText, src } =
    images.edges.length > 0
      ? images.edges[0].node
      : {
          src: 'https://thumbs.dreamstime.com/b/image-unavailable-icon-simple-illustration-vector-stock-174841957.jpg',
          altText: 'No image available',
        };
  const originalPrice = priceRange.minVariantPrice.amount;
  const discountedPrice = priceRange.maxVariantPrice.amount;

  const { addToCart, addToWhishlist, removeWishItem, whishlist } =
    useContext(CartContext);

  const isInWishlist = (productId: string) => {
    return whishlist.some((item) => item.id === productId);
  };

  const handleAddToWishlist = () => {
    addToWhishlist({
      id: selectedVariant.id,
      handle: product.handle,
      title: product.title,
      description: product.description,
      image: selectedVariant.image?.url,
      variantTitle: selectedVariant.title,
      variantPrice: parseFloat(selectedVariant.priceV2.amount),
      priceRange: {
        minVariantPrice: {
          amount: originalPrice,
        },
      },
      variantQuantity: 1,
    });
  };

  const handleRemoveFromWishlist = () => {
    removeWishItem(selectedVariant.id);
  };
  return (
    <>
      <div className="flex flex-col grow p-4 mx-auto w-full bg-white rounded-2xl border border-gray-100 border-solid max-md:mt-5 shadow-md">
        <Link
          href={'/product/' + product.handle}
          className="flex flex-col capitalize"
        >
          <div className="flex flex-col justify-center text-sm font-medium tracking-normal whitespace-nowrap text-neutral-600">
            <div className="flex flex-col  bg-gray-100 rounded-2xl max-md:pr-5">
              <div className="flex flex-col rounded-2xl max-md:px-5 bg-white relative h-[185px]">
                {/* <div className="absolute left-2 top-2 ">
                  <div className="justify-center self-start px-2.5 py-1 bg-white border border-gray-100 border-solid rounded-[1000px]">
                    Copy
                  </div>
                </div> */}
                <img
                  loading="lazy"
                  src={src}
                  alt={altText}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <div className="justify-center text-base font-medium tracking-normal text-emerald-950">
              {title}
            </div>
            <div className="mt-2.5 text-sm tracking-normal text-neutral-600 overflow-hidden h-14 line-clamp-3">
              {description}
            </div>
          </div>
        </Link>
        <div className="flex flex-wrap gap-y-2.5 gap-5 justify-between content-center mt-4 w-full">
          <div className="flex gap-2 py-px whitespace-nowrap">
            <div className="my-auto text-sm font-medium text-stone-500 line-through">
              $299
            </div>
            <div className="text-xl font-semibold text-rose-500">
              ${originalPrice}
            </div>
          </div>
          <div className="flex justify-center items-center my-auto">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/07ab3b475afa80ae03ba1cd05d7ca780b7081c7171ca9f2f47feefee5337a76e?apiKey=db678b7586ac404998e13a78e0473c5d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/07ab3b475afa80ae03ba1cd05d7ca780b7081c7171ca9f2f47feefee5337a76e?apiKey=db678b7586ac404998e13a78e0473c5d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07ab3b475afa80ae03ba1cd05d7ca780b7081c7171ca9f2f47feefee5337a76e?apiKey=db678b7586ac404998e13a78e0473c5d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/07ab3b475afa80ae03ba1cd05d7ca780b7081c7171ca9f2f47feefee5337a76e?apiKey=db678b7586ac404998e13a78e0473c5d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/07ab3b475afa80ae03ba1cd05d7ca780b7081c7171ca9f2f47feefee5337a76e?apiKey=db678b7586ac404998e13a78e0473c5d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07ab3b475afa80ae03ba1cd05d7ca780b7081c7171ca9f2f47feefee5337a76e?apiKey=db678b7586ac404998e13a78e0473c5d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/07ab3b475afa80ae03ba1cd05d7ca780b7081c7171ca9f2f47feefee5337a76e?apiKey=db678b7586ac404998e13a78e0473c5d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/07ab3b475afa80ae03ba1cd05d7ca780b7081c7171ca9f2f47feefee5337a76e?apiKey=db678b7586ac404998e13a78e0473c5d&"
              className="aspect-[3.03] w-[78px]"
            />
          </div>
        </div>
        <div className="flex gap-1.5 mt-4">
          <button
            onClick={async () => {
              const directCheckout = await addToCart({
                id: selectedVariant.id,
                handle: product.handle,
                title: product.title,
                description: product.description,
                image: selectedVariant.image?.url,
                variantTitle: selectedVariant.title,
                variantPrice: parseFloat(selectedVariant.priceV2.amount),
                priceRange: {
                  minVariantPrice: {
                    amount: originalPrice,
                  },
                },
                variantQuantity: 1,
              });
              // console.log("directCheckout", directCheckout)
              window.location.href = directCheckout.webUrl;
            }}
            className="flex-1 justify-center px-8 py-3 text-sm font-medium leading-5 text-center text-white bg-[#04554A] rounded-[120px]"
          >
            Buy Now
          </button>
          <button
            onClick={() =>
              addToCart({
                id: selectedVariant.id,
                handle: product.handle,
                title: product.title,
                description: product.description,
                image: selectedVariant.image?.url,
                variantTitle: selectedVariant.title,
                variantPrice: parseFloat(selectedVariant.priceV2.amount),
                priceRange: {
                  minVariantPrice: {
                    amount: originalPrice,
                  },
                },
                variantQuantity: 1,
              })
            }
            className="flex justify-center items-center px-3 py-3 border border-solid border-neutral-800 rounded-[120px] cursor=pointer"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/27754aeae10b0502efbc3786d42251f7cb9024307505f4c47f5e60704547813c?apiKey=db678b7586ac404998e13a78e0473c5d&"
              className="w-4 h-3  aspect-square"
            />
          </button>
          <button
            onClick={() =>
              addToWhishlist({
                id: selectedVariant.id,
                handle: product.handle,
                title: product.title,
                description: product.description,
                image: selectedVariant.image?.url,
                variantTitle: selectedVariant.title,
                variantPrice: parseFloat(selectedVariant.priceV2.amount),
                priceRange: {
                  minVariantPrice: {
                    amount: originalPrice,
                  },
                },
                variantQuantity: 1,
              })
            }
            className="flex justify-center items-center px-3 py-3 border border-solid border-neutral-800 rounded-[120px] cursor=pointer"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d16ef85005a18039c686ed5837badb37022e223e22efaf7981a644a71f98062a?apiKey=db678b7586ac404998e13a78e0473c5d&"
              className="w-4 h-3 aspect-square"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
