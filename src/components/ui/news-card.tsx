import * as React from 'react';
import Link from 'next/link';

type CardProps = {
  imgSrc: string;
  tags: string[];
  heading: string;
  description: string;
};

export const ArticleCard: React.FC<CardProps> = ({
  imgSrc,
  tags,
  heading,
  description,
}) => (
  <article className="flex flex-col grow justify-center p-4 mx-auto w-full bg-white rounded-2xl border-2 border-solid border-neutral-100">
    <div className="flex justify-center items-center px-16 py-16 rounded-lg bg-neutral-100">
      <img
        loading="lazy"
        src={imgSrc}
        alt=""
        className="aspect-square w-[38px]"
      />
    </div>
    <div className="flex flex-wrap gap-2 mt-5 text-xs font-light leading-5 text-center text-neutral-600">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="justify-center px-2.5 py-1.5 bg-neutral-100 rounded-[69.398px]"
        >
          {tag}
        </div>
      ))}
    </div>
    <div className="flex flex-col mt-5">
      <div className="flex flex-col">
        <h3 className="text-xl text-neutral-800">{heading}</h3>
        <p className="mt-4 text-sm font-light leading-5 text-neutral-400">
          {description}
        </p>
      </div>
      <div className="flex gap-2 justify-between self-start py-1.5 mt-8 text-xs leading-4 uppercase text-neutral-800">
        <div>Learn more</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/586ee469d0321d75f92f99c978e0de8767e6d48352a481090ae33c1d07c2f39c?apiKey=7e71f959147546008f8b100259363c93&"
          alt=""
          className="shrink-0 my-auto w-3 border border-solid aspect-[2] border-neutral-800 stroke-[0.771px] stroke-neutral-800"
        />
      </div>
    </div>
  </article>
);

export default ArticleCard;
