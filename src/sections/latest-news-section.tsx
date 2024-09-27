import * as React from 'react';

type TagProps = {
  tags: string[];
};

const Tags: React.FC<TagProps> = ({ tags }) => (
  <div className="flex gap-2.5 self-start text-sm font-medium tracking-normal leading-5 text-teal-700 whitespace-nowrap">
    {tags.map((tag, index) => (
      <span
        key={index}
        className="justify-center px-2.5 py-1 bg-[#04554A] bg-opacity-10 rounded-[100px]"
      >
        {tag}
      </span>
    ))}
  </div>
);

type ArticleProps = {
  imageSrc: string;
  tags: string[];
  title: string;
  description: string;
  author: string;
  date: string;
};

const ArticleCard: React.FC<ArticleProps> = ({
  imageSrc,
  tags,
  title,
  description,
  author,
  date,
}) => (
  <article className="flex flex-col justify-center p-4 bg-white rounded-3xl border border-gray-200 border-solid">
    <img
      loading="lazy"
      src={imageSrc}
      alt={title}
      className="w-full aspect-[1.22]"
    />
    <div className="flex flex-col mt-4">
      <Tags tags={tags} />
      <h2 className="flex flex-col mt-2.5 text-xl font-medium text-emerald-950">
        {title}
      </h2>
      <p className="mt-4 text-lg font-light tracking-normal leading-7 text-neutral-600">
        {description}
      </p>
    </div>
    <div className="flex gap-3.5 pr-20 mt-8 font-medium max-md:pr-5 items-center">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3260d92a2cb53df80a113139bf478066598f8af21ad8f480cc71db0acff7da?apiKey=fac0b9adbf9c43738d3faaf142128124&"
        alt={`Portrait of ${author}`}
        className="shrink-0 border border-gray-100 border-solid aspect-square w-[42px] h-[42px]"
      />
      <div className="flex flex-col justify-center py-1">
        <span className="text-base text-neutral-800">{author}</span>
        <time className="mt-1 text-sm text-neutral-600">{date}</time>
      </div>
    </div>
  </article>
);

const articleData = [
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/520371a9f740fd1678181d7a41049ac2a074995ea736b581817aa25b31afc40e?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    tags: ['Tag', 'Tag'],
    title: 'Lorem ipsum',
    description:
      'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia.',
    author: 'Eva Korn',
    date: 'May 18, 2024',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/b118ecc0501eb9a25871e430a71d33a690c033b207bec8206534df10501f5888?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    tags: ['Tag', 'Tag'],
    title: 'Lorem ipsum',
    description:
      'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia.',
    author: 'Eva Korn',
    date: 'May 18, 2024',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/128273a2745091ad7480b956f19e07a6cd1f0ae021d1aa4de78c6ea826a28342?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    tags: ['Tag', 'Tag'],
    title: 'Lorem ipsum',
    description:
      'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia.',
    author: 'Eva Korn',
    date: 'May 18, 2024',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/1fdf4c7986564113acbd9ecd044d429fb257b3d18c393c9bf370a4b995ec1059?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    tags: ['Tag', 'Tag'],
    title: 'Lorem ipsum',
    description:
      'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia.',
    author: 'Eva Korn',
    date: 'May 18, 2024',
  },
];

const LatestNewsSection: React.FC = () => (
  <div className="flex flex-col justify-center py-20 pl-20 w-full bg-white rounded-3xl max-md:pl-5 max-md:max-w-full">
    <header className="justify-center mt-5 ml-5 text-5xl leading-[72px] text-emerald-950 max-md:max-w-full max-md:text-4xl">
      The Knowledge Center
    </header>
    <section className="flex gap-5 mt-20 mb-5 ml-5 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      {articleData.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </section>
  </div>
);

export default LatestNewsSection;
