'use client';
import { useContext } from 'react';
import * as React from 'react';
import { CartContext } from '@/context/shopContext';
export default function Cart({ cart }: { cart: any }) {
  const {
    cartOpen,
    setCartOpen,
    checkoutUrl,
    removeCartItem,
    clearCart,
    cartLoading,
    incrementCartItem,
    decrementCartItem,
  } = useContext(CartContext) as any;
  let cartTotal = 0;
  cart.length > 0 &&
    cart.map((item: any) => {
      cartTotal += item?.variantPrice * item?.variantQuantity;
    });
  return (
    <div className="z-50 flex flex-col px-5 py-8 bg-white max-w-[540px] min-w-[370px] h-screen overflow-scroll scroll relative">
      <div className="text-5xl text-neutral-800 max-md:max-w-full max-md:text-4xl">
        Your cart
      </div>
      <button
        onClick={() => setCartOpen(false)}
        className="absolute right-5 flex justify-end"
      >
        Close
      </button>
      {cart.length > 0 ? (
        <div className="flex flex-col pb-12 mt-10 max-md:max-w-full">
          {cart.map((product: any, index: any) => (
            <div
              key={index}
              className="flex gap-5 justify-between items-start pt-2.5 pr-2.5 pb-5 mb-5 pl-5 bg-white rounded-3xl border border-solid border-neutral-300 max-md:flex-wrap"
            >
              <div className="flex gap-5 mt-2.5">
                <div className="flex justify-center items-center fill-neutral-100 max-md:px-5">
                  <img
                    loading="lazy"
                    src={
                      product.image ??
                      'https://thumbs.dreamstime.com/b/image-unavailable-icon-simple-illustration-vector-stock-174841957.jpg'
                    }
                    className="w-[170px]"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <div className="text-2xl text-neutral-800">
                      {product.title}
                    </div>
                    <div className="mt-3 text-xs font-light text-stone-500">
                      {product.title}
                    </div>
                  </div>
                  <div className="mt-8 text-2xl text-neutral-800">
                    ${product.variantPrice}
                  </div>
                  <div className="flex flex-row">
                    <div className="flex gap-0 justify-center p-px mt-8 rounded-3xl border border-solid border-neutral-600 max-md:pr-5">
                      <div className="flex justify-center items-center px-2.5 py-2">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5417ea6b829097add871640880fc1cc849caaa7ae87088da2630628a712f0ec1?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                          className="w-3 aspect-square cursor-pointer"
                          onClick={() => decrementCartItem(product)}
                        />
                      </div>
                      <div className="flex flex-col justify-center p-1.5 text-base font-light leading-9 text-center whitespace-nowrap rounded text-neutral-600">
                        <div className="justify-center">
                          {product.variantQuantity}
                        </div>
                      </div>
                      <div className="flex justify-center items-center px-2.5 py-2">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4819e4d075086faa95a29f0d0cf6b3f1b15d77717df1e1203fd59c52694b0a5?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                          className="w-3 aspect-square cursor-pointer"
                          onClick={() => incrementCartItem(product)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/529cc0bc39d7555a785c3ecd8c4f961c37dd059b28edf2544d6355297cf0ff84?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                className="shrink-0 w-10 aspect-square cursor-pointer"
                onClick={() => removeCartItem(product.id)}
              />
            </div>
          ))}
        </div>
      ) : null}

      {/* <div className="flex flex-col justify-center p-5 mt-10 rounded-3xl bg-neutral-100 max-md:max-w-full">
        <div className="flex flex-col justify-center max-w-full text-2xl text-neutral-800 w-[201px]">
          <div className="justify-center">You might also like</div>
        </div>
        <div className="flex gap-5 justify-between items-start pt-5 pr-2.5 pb-2.5 pl-5 mt-5 bg-white rounded-xl max-md:flex-wrap">
          <div className="flex gap-5 self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d0fca49dd5739472fa7d1d41a02cae5a8406b53966a73d95783010f7311e925?apiKey=fac0b9adbf9c43738d3faaf142128124&"
              className="shrink-0 aspect-[1.45] fill-neutral-100 w-[90px]"
            />
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="text-lg text-neutral-800">Product name</div>
                <div className="mt-3 text-xs font-light text-stone-500">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
              </div>
              <div className="mt-4 text-lg text-neutral-800">$1,199.00</div>
            </div>
          </div>
          <div className="flex justify-center items-center self-end p-2.5 mt-9 rounded-md bg-[#04554A] h-[38px] w-[38px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa450daa5b5902b80425590ec2e3ea85ee058272e657c3ac469422ca547d61b8?apiKey=fac0b9adbf9c43738d3faaf142128124&"
              className="w-3 aspect-square fill-white"
            />
          </div>
        </div>
      </div> */}
      <div className="flex flex-col mt-10 whitespace-nowrap max-md:max-w-full">
        <div className="flex gap-5 justify-between leading-9 text-neutral-800 max-md:flex-wrap max-md:max-w-full">
          <div className="text-lg font-light">Subtotal</div>
          <div className="text-xl">${cartTotal}</div>
        </div>
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8da9e257259eeba6526c58821a9551a7e075910068c9342200babcb02630f?apiKey=fac0b9adbf9c43738d3faaf142128124&"
          className="mt-6 w-full border border-solid border-neutral-300 stroke-[1px] stroke-neutral-300 max-md:max-w-full"
        /> */}
        <a href={checkoutUrl}>
          <div className="justify-center cursor-pointer items-center px-10 py-5 mt-6 text-base font-light leading-6 text-center text-white uppercase rounded-2xl bg-[#04554A] max-md:px-5 max-md:max-w-full">
            Checkout
          </div>
        </a>
      </div>
    </div>
  );
}
