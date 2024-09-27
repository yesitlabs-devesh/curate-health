'use client';
import * as React from 'react';
// import {ProductCard} from "../catalog/page";
import { useContext } from 'react';
import { CartContext } from '@/context/shopContext';

function CartProductCard({
  product,
  decrementCartItem,
  incrementCartItem,
}: any) {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <section className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow max-md:mt-10">
          <p className="text-base text-neutral-800">Product</p>
          <div className="flex gap-5  mt-8">
            <img
              loading="lazy"
              src={
                product.image ??
                'https://thumbs.dreamstime.com/b/image-unavailable-icon-simple-illustration-vector-stock-174841957.jpg'
              }
              alt={product.title}
              className="shrink-0 max-w-full bg-white rounded-2xl aspect-square object-contain fill-white w-[101px]"
            />
            <div className="flex flex-col my-auto">
              <h2 className="text-2xl text-neutral-800">{product.title}</h2>
              <p className="mt-4 text-sm leading-5 text-stone-500">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col max-md:mt-10">
          <p className="text-base text-neutral-800">Quantity</p>
          <div>
            <div className="inline-flex gap-0 justify-center p-px mt-8 rounded-2xl border border-solid border-neutral-600 max-w-auto">
              <button
                className="flex flex-col justify-center items-start px-3 py-3.5"
                aria-label="Decrease Quantity"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c8346ab54911c38e6a1ce980bc50a7e89c01f5c91db700fc92df9a07c46fb2c?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                  alt="Decrease Icon"
                  className="aspect-square w-[9px] cursor-pointer"
                  onClick={() => decrementCartItem(product)}
                />
              </button>
              <div className="flex flex-col justify-center p-1.5 text-sm leading-7 text-center whitespace-nowrap rounded text-neutral-600">
                <div className="justify-center">{product.variantQuantity}</div>
              </div>
              <button
                className="flex justify-center items-center px-3 py-3.5"
                aria-label="Increase Quantity"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8670262eacc151a352b63eb4c4cd5ab70ec9e590047fae3ba5abdb8c71919889?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                  alt="Increase Icon"
                  className="w-2.5 aspect-[1.11 cursor-pointer"
                  onClick={() => incrementCartItem(product)}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col ml-5 w-[12%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col whitespace-nowrap text-neutral-800 max-md:mt-10">
          <p className="font-medium">Price</p>
          <p className="mt-8 text-lg">${product.variantPrice}</p>
        </div>
      </section>
    </div>
  );
}

interface SubtotalProps {
  subtotal: string;
  checkoutUrl: string;
}

function Subtotal({ subtotal, checkoutUrl }: SubtotalProps) {
  return (
    <aside className="flex flex-col grow max-md:mt-8">
      <section className="flex flex-col">
        <div className="flex flex-col p-4 w-full rounded-2xl bg-[#036C5F] text-white">
          <div className="flex gap-5 justify-between leading-7 whitespace-nowrap text-white">
            <p className="text-xl font-light">Subtotal</p>
            <p className="text-2xl font-semibold">{subtotal}</p>
          </div>
          <div className="flex flex-col mt-16 font-light text-center max-md:mt-10">
            <a href={checkoutUrl} className="block w-full">
              <button className="w-full justify-center items-center px-11 py-6 text-lg font-medium leading-6 text-white uppercase whitespace-nowrap bg-neutral-800 rounded-[120px] max-md:px-5">
                Checkout
              </button>
            </a>
            <p className="mt-4 text-sm leading-5 text-neutral-50">
              Tax and shipping are calculated at checkout
            </p>
          </div>
        </div>
        <p className="mt-5 text-xs leading-4 text-neutral-800">
          By placing this order, you agree to our{' '}
          <a href="privacy-policy" className="underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="terms-and-conditions" className="underline">
            Terms and Conditions
          </a>
        </p>
      </section>
      <section className="flex flex-col mt-8 text-xs font-light leading-5 text-neutral-600">
        <div className="flex flex-col mt-10 text-base font-medium leading-5 text-neutral-800">
          <div className="flex gap-0 justify-between p-5 border border-gray-300 border-solid bg-[linear-gradient(167deg,#FFF_16.77%,rgba(254,251,249,0.50_91.49%))] rounded-[90px]">
            <div className="flex-1">Apply promo code</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee73037258623b50e1578eea4e71c89962f18b5c11534400eb8a6fc8066a8516?apiKey=db678b7586ac404998e13a78e0473c5d&"
              className="shrink-0 my-auto border-0 border-solid aspect-square border-stone-500 fill-stone-500 stroke-[0.023px] stroke-stone-500 w-[9px]"
            />
          </div>
          <div className="flex gap-0 justify-between p-5 mt-4 border border-gray-300 border-solid bg-[linear-gradient(167deg,#FFF_16.77%,rgba(254,251,249,0.50_91.49%))] rounded-[90px]">
            <div className="flex-1">Military, Medical & First Responders</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee73037258623b50e1578eea4e71c89962f18b5c11534400eb8a6fc8066a8516?apiKey=db678b7586ac404998e13a78e0473c5d&"
              className="shrink-0 my-auto border-0 border-solid aspect-square border-stone-500 fill-stone-500 stroke-[0.023px] stroke-stone-500 w-[9px]"
            />
          </div>
          <div className="flex gap-0 justify-between p-5 mt-4 border border-gray-300 border-solid bg-[linear-gradient(167deg,#FFF_16.77%,rgba(254,251,249,0.50_91.49%))] rounded-[90px]">
            <div className="flex-1">Students & Teachers</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee73037258623b50e1578eea4e71c89962f18b5c11534400eb8a6fc8066a8516?apiKey=db678b7586ac404998e13a78e0473c5d&"
              className="shrink-0 my-auto border-0 border-solid aspect-square border-stone-500 fill-stone-500 stroke-[0.023px] stroke-stone-500 w-[9px]"
            />
          </div>
        </div>
      </section>
    </aside>
  );
}

const similarProducts = [
  {
    id: 1,
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/b44d9b54d2ec55174cf6126a55300a432d2b936501a8174d8f0b36696ec30c2b?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    altText: 'Theragun Sense product image',
    title: 'Theragun Sense',
    description: 'Relaxing massage for pain and stress relief',
    originalPrice: '$299',
    discountedPrice: '$239',
    saleImgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/1afc2d4a2cbed5653f9bf146d454e871d395172d3eb4a2b42413c5fc46449b44?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    saleAltText: '',
  },
  {
    id: 2,
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/7c9bee04ec54a43eb6791c668af5e933819cf4f11c24ff41d89074aa853e895d?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    altText: 'Theragun Sense product image',
    title: 'Theragun Sense',
    description: 'Relaxing massage for pain and stress relief',
    originalPrice: '$299',
    discountedPrice: '$239',
    saleImgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/c522ba936606037b08932a4595ffbd843fb864f99c7eda65678be2c14714c625?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    saleAltText: '',
  },
  {
    id: 3,
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/32d9ff814134866169c554a6e1f2cbee7624272466c928da6afe7e2c2004977b?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    altText: 'Theragun Sense product image',
    title: 'Theragun Sense',
    description: 'Relaxing massage for pain and stress relief',
    originalPrice: '$299',
    discountedPrice: '$239',
    saleImgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/8b5a898ab263c5688660c39ecc45cbadeef7be5cc832c0fcdc28abff674aade2?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    saleAltText: '',
  },
  {
    id: 4,
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/e7de1358a589a7edf0ef82cc1f57026779450723ac89c08a405ee926ad4e9d99?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    altText: 'Theragun Sense product image',
    title: 'Theragun Sense',
    description: 'Relaxing massage for pain and stress relief',
    originalPrice: '$299',
    discountedPrice: '$239',
    saleImgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/529db3491538d70055bfc5b289fb10183a203ef4dad2df8a99586a919c2d2531?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    saleAltText: '',
  },
];

function CartPage() {
  const {
    cart,
    checkoutUrl,
    removeCartItem,
    incrementCartItem,
    decrementCartItem,
  } = useContext(CartContext);

  let cartTotal = 0;
  cart.forEach((item) => {
    cartTotal += item.variantPrice * item.variantQuantity;
  });
  return (
    <div className="flex flex-col justify-center px-12 py-20 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
      <section className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
            <header className="flex flex-col max-md:mt-8 max-md:max-w-full">
              <div className="text-6xl text-neutral-800 max-md:max-w-full max-md:text-4xl">
                Your cart
              </div>
            </header>
            <main className="flex flex-col mt-8 max-md:max-w-full">
              {cart.map((product, index) => (
                <React.Fragment key={index}>
                  <CartProductCard
                    product={product}
                    decrementCartItem={decrementCartItem}
                    incrementCartItem={incrementCartItem}
                  />
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="flex flex-col justify-center items-end px-0 max-md:pl-5 max-md:max-w-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b918be5c7a7dc03975cd47dc470890e83e1f90db2a0f0486884836987bde3516?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                        alt="Remove Icon"
                        className="aspect-square w-[15px]"
                        onClick={() => removeCartItem(product.id)}
                      />
                    </div>
                    <div className="my-6 w-full border border-solid border-neutral-300 stroke-[0.771px] stroke-neutral-300 max-md:max-w-full"></div>
                  </div>
                </React.Fragment>
              ))}
            </main>
          </section>
          <section className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
            <Subtotal checkoutUrl={checkoutUrl} subtotal={'$' + cartTotal} />
          </section>
        </div>
      </section>
      <section className="flex mt-10 flex-col p-8 bg-white rounded-[30.843px] max-md:px-5 max-md:max-w-full">
        <h1 className="justify-center self-start text-4xl text-neutral-800">
          You might also like
        </h1>
        <div className="mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {similarProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
              >
                {/* <ProductCard {...product} /> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartPage;
