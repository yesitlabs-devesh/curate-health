import {
  getCollections,
  Product,
  getProductsInCollection,
} from '@/lib/shopify';
import * as React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';

interface BrandCheckboxProps {
  name: string;
}

const BrandCheckbox: React.FC<BrandCheckboxProps> = ({ name }) => {
  return (
    <div className="flex gap-1 mt-2 first:mt-0">
      <div className="flex flex-col justify-center p-0.5">
        <input
          type="checkbox"
          id={`brand-${name}`}
          name={name}
          className="shrink-0 h-4 w-4 rounded border border-solid border-zinc-300"
        />
      </div>
      <label
        htmlFor={`brand-${name}`}
        className="flex-1 text-sm text-emerald-800"
      >
        {name}
      </label>
    </div>
  );
};

interface Brand {
  name: string;
}

const brands: Brand[] = [
  { name: 'Therabody' },
  { name: 'Aroma360' },
  { name: 'EightSleep' },
  { name: 'Peloton' },
  { name: 'Dr. EltaMD' },
  { name: 'Lululemon' },
  { name: 'PRX' },
  { name: 'Oral-B' },
];

const PopularBrands: React.FC = () => {
  return (
    <section className="mt-3 p-3 bg-white rounded-xl border border-gray-100 shadow-lg w-full">
      <header className="flex flex-col text-lg font-medium text-emerald-800">
        <div>Popular Brands</div>
        <div className="shrink-0 mt-2 h-px bg-gray-100 border border-gray-100" />
      </header>
      <div className="flex flex-col justify-center mt-3">
        <form>
          {brands.map((brand, index) => (
            <BrandCheckbox key={index} name={brand.name} />
          ))}
        </form>
      </div>
    </section>
  );
};

type CategoryButtonProps = {
  category: {
    title: string;
    handle: string;
  };
  isActive: boolean;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  isActive,
}) => {
  return (
    <Link
      href={'/catalog?collection=' + category.handle}
      className={`justify-center px-2 py-1 text-xs rounded-full ${
        isActive ? 'bg-[#04554A] text-white' : 'bg-neutral-100 text-neutral-600'
      }`}
    >
      {category.title}
    </Link>
  );
};

const HeroSection: React.FC = async () => {
  const categories = await getCollections(6);
  return (
    <div className="flex justify-center items-center px-8 py-10 pb-0 w-full text-center max-md:px-3 max-md:max-w-full">
      <div className="flex flex-col my-3 w-full">
        <div className="text-4xl leading-10 text-emerald-950 max-md:text-2xl max-md:leading-8">
          Everything You Need
          <br />
          For Your Routine
        </div>
        <div className="self-center mt-4 text-base font-light text-neutral-600">
          Explore our marketplace with the top health devices all in one place.
        </div>
      </div>
    </div>
  );
};

const CompleteAllCards: React.FC = () => {
  const cardData = [
    {
      title: "Fitness",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/340e8e4b6d4eda1d57e92a33c24727517b7c53a6705d9ef6356e54947e106b18?apiKey=db678b7586ac404998e13a78e0473c5d&width=800",
      description: "Improve strength, mobility, and endurance with top fitness equipment.",
    },
    {
      title: "Recovery",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4786c8f32bda1e5006f5914d87690991bf2cb2dbc9fc04129b5ccde5a4c99df7?apiKey=db678b7586ac404998e13a78e0473c5d&width=800",
      description: "Sleep, heat, cold therapy, and more to enhance recovery.",
    },
    {
      title: "Nutrition",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cc1dec1fe96bbb49964c3a95fb714b333ab4e353c09ece8196f208df780f03b2?apiKey=db678b7586ac404998e13a78e0473c5d&width=800",
      description: "Shop natural supplements and tools for pre and post-workout nutrition.",
    },
    {
      title: "Skin Care",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e798336dd5a3f0af22c11b66fd6ce67561a096a9f5182e669ef734dab52764bf?apiKey=db678b7586ac404998e13a78e0473c5d&width=800",
      description: "Protect, cleanse, and moisturize with top skincare products.",
    },
    {
      title: "Oral Hygiene",
      imgUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3627be91b70e1d6a2466c581726dff5fbf0e311c177bfe8ff1830e85187dc1e6?apiKey=db678b7586ac404998e13a78e0473c5d&width=800",
      description: "Complete oral care solutions for clean, white, and protected teeth.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 px-20 py-6 w-full max-md:px-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center px-3 py-4 bg-white rounded-xl border border-gray-100 shadow-lg w-[18%] max-md:w-full"
        >
          <img
            loading="lazy"
            src={card.imgUrl}
            alt={card.title}
            className="aspect-[1.59] w-[64px]"
          />
          <div className="mt-3 text-center">
            <div className="text-base text-emerald-900">{card.title}</div>
            <div className="mt-2 text-sm font-light text-neutral-600">
              {card.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SortBySelect: React.FC = () => {
  return (
    <div className="flex flex-col justify-center px-4 py-2 bg-gray-100 rounded-full">
      <div className="flex justify-center">
        <select className="bg-transparent border-none outline-none text-xs">
          <option value="featured">Sort By Featured</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

const FilterBlock: React.FC = () => {
  return (
    <section className="flex gap-3 justify-center py-2 w-full text-emerald-950 max-md:flex-wrap max-md:px-3 max-md:max-w-full px-32">
      <header className="flex-auto my-auto text-2xl font-medium">All items</header>
      <nav className="flex gap-1 text-xs bg-white rounded-full">
        <SortBySelect />
      </nav>
    </section>
  );
};

interface SearchProps {
  searchText: string;
  imageUrl: string;
  imageAlt: string;
}

function SearchItem({ searchText, imageUrl, imageAlt }: SearchProps) {
  return (
    <div className="flex gap-1.5 justify-between">
      <img loading="lazy" src={imageUrl} alt={imageAlt} className="shrink-0 w-5" />
      <input
        id="searchInput"
        type="search"
        placeholder="Search item..."
        className="bg-transparent border-none outline-none grow"
        aria-label="Search"
      />
    </div>
  );
}

interface CategoryType {
  title: string;
  options: string[];
}

interface CheckboxListProps {
  category: CategoryType;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ category }) => (
  <section className="flex flex-col justify-center mt-6">
    <h3 className="text-xs font-medium text-emerald-800">{category.title}</h3>
    <div className="flex flex-col">
      {category.options.map((option, index) => (
        <div className="flex gap-1 mt-2" key={index}>
          <input
            type="checkbox"
            id={`option-${index}`}
            className="h-4 rounded border border-zinc-300"
          />
          <label
            htmlFor={`option-${index}`}
            className="text-sm text-neutral-800"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  </section>
);

const categories: CategoryType[] = [
  {
    title: 'Fitness',
    options: ['Strength', 'Mobility', 'Endurance'],
  },
  {
    title: 'Recovery',
    options: ['Sleep', 'Heat, Cold, Aromatherapy', 'Percussion'],
  },
  {
    title: 'Nutrition',
    options: ['Indoor Garden', 'Natural Supplements', 'Pre, Post-Workout'],
  },
  {
    title: 'Skincare',
    options: ['Cleanse', 'Moisturize', 'Protect'],
  },
  {
    title: 'Oral Hygiene',
    options: ['Clean', 'Whiten', 'Protect'],
  },
];

function CategoriesFilter() {
  return (
    <section className="flex flex-col p-3 bg-white rounded-xl border border-gray-100 shadow-lg">
      <header className="text-lg font-medium text-emerald-950">Categories</header>
      <main className="mt-3">
        {categories.map((category, index) => (
          <CheckboxList key={index} category={category} />
        ))}
      </main>
    </section>
  );
}

export default async function Catalog({
  searchParams,
}: {
  searchParams: { collection: any; sort: string };
}) {
  const collection = searchParams.collection || '';
  const sort = searchParams.sort || '';
  const products = await getProductsInCollection(collection, sort);

  return (
    <div>
      <HeroSection />
      <CompleteAllCards />
      <FilterBlock />
      <div className="flex flex-wrap px-32 max-md:px-8">
        <aside className="flex flex-col w-[20%] max-md:w-full">
          <div className='pb-2'>
          <section className="p-3 bg-gray-100 rounded-xl">
            <SearchItem
              searchText="Search item..."
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ded5ee3eebbf1dfe134e9ad9459ed6940094005d4c6e6905eecb72d9a2a65896?apiKey=db678b7586ac404998e13a78e0473c5d&"
              imageAlt="Search icon"
            />
          </section>
          </div>
          <CategoriesFilter />
          <PopularBrands />
        </aside>
        <main className="w-[80%] max-md:ml-0 max-md:w-full">
          <section className="grid grid-cols-3 gap-2">
            {products.map((product, index) => (
              <div key={index} className="p-1 bg-white rounded-lg shadow-sm">
                <ProductCard product={product} />
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
