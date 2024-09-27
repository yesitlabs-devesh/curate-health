import * as React from 'react';

type ProductCardProps = {
  providerImageSrc: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buyNowText: string;
  howItWorksText: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  providerImageSrc,
  imageSrc,
  imageAlt,
  title,
  description,
  buyNowText,
  howItWorksText,
}) => {
  return (
    <section className="grow shadow-md-grill flex flex-col px-6 py-0 w-full rounded-3xl border border-gray-200 border-solid max-md:px-5 max-md:mt-5 max-md:max-w-full">
      <div className="flex items-center gap-5 max-md:flex-col max-md:gap-0">
        <article className="pt-4 pb-4">
          <div className="self-stretch max-md:mt-10">
            <figure className="flex flex-col">
              <img
                loading="lazy"
                src={providerImageSrc}
                alt={imageAlt}
                className="object-left tag-apple-img"
              />
              <figcaption className="flex flex-col mt-2.5">
                <h2 className="text-5xl leading-[63.84px] text-emerald-950 title-integrating">
                  {title}
                </h2>
                <p className="mt-2 text-lg font-light leading-7 text-neutral-600">
                  {description}
                </p>
              </figcaption>
            </figure>
            <div className="flex gap-2.5 mt-4 text-lg tracking-normal capitalize max-md:mt-10">
              <button className="flex justify-center p-0.5 text-white  rounded-[100px]">
                <span className="px-6 py-3 border whitespace-nowrap border-white border-solid bg-[#04554A] rounded-[100px] max-md:px-5">
                  {buyNowText}
                </span>
              </button>
              <button className="flex justify-center p-0.5 bg-white rounded-[100px] text-emerald-950">
                <span className="px-6 py-3 border whitespace-nowrap border-white border-solid rounded-[100px] max-md:px-5">
                  {howItWorksText}
                </span>
              </button>
            </div>
          </div>
        </article>
        <div className="flex flex-col justify-center items-center ml-5 w-5/12 max-md:ml-0 max-md:w-full">
          <figure className="flex justify-center items-center self-stretch rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default function IntegratingSmartSection() {
  return (
    <main className="flex flex-col justify-center  max-md:px-5 max-md:max-w-full integrating-main-wpp">
      <header className="flex flex-col pr-20 mt-5 leading-[150%] max-md:pr-5 max-md:max-w-full">
        <h1 className="text-5xl text-emerald-950 max-md:max-w-full max-md:text-4xl">
          Integrating Smart Technology Into Your Action Plan
        </h1>
        <p className="mt-6 text-lg font-light tracking-normal text-neutral-600 max-md:max-w-full">
          Track Progress Towards Your Health Goals, and Catch Warning Signs Before They Become Issues
        </p>
      </header>
      <section className="flex grow flex-col justify-center mt-4 mb-5 max-md:mt-10 max-md:max-w-full">
        <div className="py-0 grow w-1/2 md:w-full flex flex-col integrating-technology">
          <ProductCard
            providerImageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589b70036d82fd42981d032c7c64e83713cd899c1bc21a626e784bbd45986f53?apiKey=fac0b9adbf9c43738d3faaf142128124&"
            imageSrc="https://i.postimg.cc/tTvY2xtz/apple.png"
            imageAlt="Apple Watch Series 9"
            title="Apple Watch Series 9"
            description="Track Heart Health. Sleep. Cycle Management. Fitness Activity and more with built-in messaging."
            buyNowText="Buy Now"
            howItWorksText="How it works"
          />
        </div>
        <div className="flex gap-5">
          <div className="py-3 grow w-1/2 md:w-full flex flex-col integrating-technology">
            <ProductCard
              providerImageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/906563ee2ca23786f58f2bc195231fe4492233d5842d6c27d875194db99fdf44?apiKey=fac0b9adbf9c43738d3faaf142128124&"
              imageSrc="https://i.postimg.cc/fb83mT0m/Images-1.png"
              imageAlt="WITHINGS"
              title="BPM Connect"
              description="Discreet Health Insights."
              buyNowText="Buy Now"
              howItWorksText="How it works"
            />
          </div>
          <div className="py-3 grow w-1/2 md:w-full flex flex-col integrating-technology">
            <ProductCard
              providerImageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5d6956ecb04196bf7fbe671c2020d1f93e57f5b49d9955516a99fe1dc93273a1?apiKey=fac0b9adbf9c43738d3faaf142128124&"
              imageSrc="https://i.postimg.cc/Gty9WFgx/Images-2.png"
              imageAlt="Oura Ring"
              title="Oura Ring"
              description="Discreet Health Insights."
              buyNowText="Buy Now"
              howItWorksText="How it works"
            />
          </div>
        </div>
        <div className="flex justify-center p-0.5 pt-4"><a href="#">Explore The Smart Shop</a></div>
      </section>
    </main>
  );
}
