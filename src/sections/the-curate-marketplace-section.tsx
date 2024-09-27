import Link from 'next/link';
import * as React from 'react';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => (
  <article className="flex flex-col justify-center p-4 bg-white rounded-3xl border border-gray-200 border-solid">
    <figure className="flex flex-col">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="w-full aspect-[1.22]"
      />
      <figcaption className="flex flex-col mt-4">
        <h2 className="text-xl font-medium text-emerald-950">{title}</h2>
        <p className="mt-4 text-lg font-light tracking-normal leading-7 text-neutral-600">
          {description}
        </p>
      </figcaption>
    </figure>
    <div className="flex w-auto flex-col justify-center p-0.5 mt-8 text-base bg-gray-100 rounded-[100px] text-emerald-950">
      <div className="cursor-pointer w-auto justify-center text-center items-center px-5 py-2.5 border border-white border-solid rounded-[100px]">
        Explore
      </div>
    </div>
  </article>
);

const cardData: CardProps[] = [
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/1566285d057a39bb6a54f0b5e0525b63c6f9f24d0807738bb9bb74797cfef901?apiKey=fac0b9adbf9c43738d3faaf142128124',
    imageAlt: 'Fitness Image',
    title: 'Fitness',
    description:
      'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia.',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/6b84f102a34b6a337aa7dc0c15bf24dae6f2b7bc2c0ee4604caad5d4e3df0f27?apiKey=fac0b9adbf9c43738d3faaf142128124',
    imageAlt: 'Nutrition Image',
    title: 'Nutrition',
    description:
      'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia.',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/818021f7e84c4ea836e8867db2ef4eabf58edeb46709bccdbc18fd53563c7610?apiKey=fac0b9adbf9c43738d3faaf142128124',
    imageAlt: 'Skin Care Image',
    title: 'Skin Care',
    description:
      'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia.',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/1566285d057a39bb6a54f0b5e0525b63c6f9f24d0807738bb9bb74797cfef901?apiKey=fac0b9adbf9c43738d3faaf142128124',
    imageAlt: 'Skin Care Image',
    title: 'Oral Hygiene',
    description:
      'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia.',
  },
];

const TheCurateMarketPlace: React.FC = () => (
  <main className="flex flex-col justify-center  w-full bg-white rounded-3xl max-md:pl-5 max-md:max-w-full main-exploreroutine-wrap">
    <section className="flex flex-col pr-20 mt-5 leading-[150%] max-md:pr-5 max-md:max-w-full">
      <h1 className="text-5xl text-emerald-950 max-md:mr-1 max-md:max-w-full max-md:text-4xl">
        Explore The Routine Center
      </h1>
      {/* <h2 className="mt-2 text-lg font-light text-neutral-600 max-md:mr-1 max-md:max-w-full">

      </h2> */}
      <p> Everything you need to establish and maintain exceptional systems to reach your goals. All in one place.</p>
    </section>
    <section className="flex gap-5 mt-4 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      {/* {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))} */}

      <div className="explore-routine-wpp">
        <div className="explore-boxes">
          <div className="image-explore-wpp">
            <img loading="lazy" src="extra-imgs/market1.png" className="" />
          </div>
          <div className="content-exploreroutine">
            <h2>Fitness</h2>
            <p>get a great workout, either at home or at the gym. </p>
          </div>
          <button type='button'><img src="extra-imgs/anchor-arrow.png" className="" /></button>
        </div>
        <div className="explore-boxes">
          <div className="image-explore-wpp">
            <img loading="lazy" src="extra-imgs/market2.png" className="" />
          </div>
          <div className="content-exploreroutine">
            <h2>Nutrition</h2>
            <p> fresh produce anytime in the comfort of your own home.</p>
          </div>
          <button type='button'><img src="extra-imgs/anchor-arrow.png" className="" /></button>
        </div>
        <div className="explore-boxes">
          <div className="image-explore-wpp">
            <img loading="lazy" src="extra-imgs/market3.png" className="" />
          </div>
          <div className="content-exploreroutine">
            <h2>Recovery</h2>
            <p>Proper Recovery is Just As Important as The Exercise Itself</p>
          </div>
          <button type='button'><img src="extra-imgs/anchor-arrow.png" className="" /></button>
        </div>
        <div className="explore-boxes">
          <div className="image-explore-wpp">
            <img loading="lazy" src="extra-imgs/market4.png" className="" />
          </div>
          <div className="content-exploreroutine">
            <h2>Oral Hygiene</h2>
            <p>Take Care of Your Smile. It’s Your Best Asset :)</p>
          </div>
          <button type='button'><img src="extra-imgs/anchor-arrow.png" className="" /></button>
        </div>
        <div className="explore-boxes">
          <div className="image-explore-wpp">
            <img loading="lazy" src="extra-imgs/market5.png" className="" />
          </div>
          <div className="content-exploreroutine">
            <h2>Skin Care</h2>
            <p>Cleanse. Moisturize, and Protect. Your future self will thank you.</p>
          </div>
          <button type='button'><img src="extra-imgs/anchor-arrow.png" className="" /></button>
        </div>
      </div>


    </section>
    <section className="flex justify-center items-center px-16 mt-8 mb-5 text-lg tracking-normal text-white capitalize max-md:px-5 max-md:mt-10 max-md:max-w-full marketplace-anchor">
      <div className="flex flex-col justify-center p-0.5 max-w-full bg-[#04554A] rounded-[100px] w-[317px]">
        <Link
          href="/catalog"
          className="justify-center  text-center px-6 py-3 border border-white border-solid bg-[#04554A] rounded-[100px] max-md:px-5"
        >
          Explore marketplace
        </Link>
      </div>
    </section>
  </main>
);

export default TheCurateMarketPlace;
