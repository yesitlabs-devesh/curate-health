import React from 'react';

type ReviewCardProps = {
  name: string;
  jobTitle: string;
  review: string;
  avatarSrc: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  jobTitle,
  review,
  avatarSrc,
}) => (
  <article className="flex flex-col grow justify-center p-4 w-full bg-white rounded-2xl border border-gray-100 border-solid shadow-lg max-md:mt-5">
    <div className="flex flex-col">
      <header className="flex gap-5 ">
        <img
          loading="lazy"
          src={avatarSrc}
          alt={`${name}'s avatar`}
          className="shrink-0 my-auto aspect-square w-[42px]"
        />
        <div className="flex flex-col py-2 pr-2.5">
          <h3 className="text-xl font-medium text-emerald-950">{name}</h3>
          <p className="mt-2 text-sm tracking-normal capitalize text-neutral-600">
            {jobTitle}
          </p>
        </div>
      </header>
      <p className="mt-5 text-sm tracking-normal capitalize text-neutral-600">
        {review}
      </p>
      <div className="flex gap-1 pr-20 mt-8 max-md:pr-5">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11b7c10cbd8b3f86d273457dfa53a4162cd5e0d31a1e3edb29be7062ce2220c3?apiKey=db678b7586ac404998e13a78e0473c5d&"
            alt=""
            className="shrink-0 w-6 aspect-square"
          />
        ))}
      </div>
    </div>
  </article>
);

const ProductReviewSection: React.FC = () => {
  const reviews = [
    {
      name: 'Name',
      jobTitle: 'Job Title',
      review:
        'Lorem ipsum dolor sit amet, consectetur cdolor col elit. Integer mattis nunc augue vel lacinia erat.',
      avatarSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/7a77b6e44172b6a2ae11c2c3d847ae3959d23251c06ee3a8f3733d1bc79307d8?apiKey=db678b7586ac404998e13a78e0473c5d&',
    },
    {
      name: 'Name',
      jobTitle: 'Job Title',
      review:
        'Lorem ipsum dolor sit amet, consectetur cdolor col elit. Integer mattis nunc augue vel lacinia erat.',
      avatarSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/7a77b6e44172b6a2ae11c2c3d847ae3959d23251c06ee3a8f3733d1bc79307d8?apiKey=db678b7586ac404998e13a78e0473c5d&',
    },
    {
      name: 'Name',
      jobTitle: 'Job Title',
      review:
        'Lorem ipsum dolor sit amet, consectetur cdolor col elit. Integer mattis nunc augue vel lacinia erat.',
      avatarSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/7a77b6e44172b6a2ae11c2c3d847ae3959d23251c06ee3a8f3733d1bc79307d8?apiKey=db678b7586ac404998e13a78e0473c5d&',
    },
    {
      name: 'Name',
      jobTitle: 'Job Title',
      review:
        'Lorem ipsum dolor sit amet, consectetur cdolor col elit. Integer mattis nunc augue vel lacinia erat.',
      avatarSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/7a77b6e44172b6a2ae11c2c3d847ae3959d23251c06ee3a8f3733d1bc79307d8?apiKey=db678b7586ac404998e13a78e0473c5d&',
    },
  ];

  return (
    <section className="flex flex-col justify-center p-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center max-md:max-w-full">
        <div className="flex flex-col justify-center capitalize max-md:max-w-full">
          <div className="flex flex-col justify-center max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
              <h2 className="text-3xl font-medium tracking-wide text-emerald-950 max-md:max-w-full">
                Reviews
              </h2>
              <p className="mt-6 text-base tracking-normal text-neutral-600 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing
                elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed
                eleifend tellus nonole tincidunt aliquet.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
        <button className=" mt-20 max-w-full text-lg tracking-normal capitalize ">
          <span className="justify-center px-6 py-3.5 border border-solid border-emerald-950 border-opacity-30 rounded-[100px] max-md:px-5 bg-gray-100 rounded-[100px] text-neutral-600 w-[211px] max-md:mt-10">
            See More Reviews
          </span>
        </button>
      </div>
    </section>
  );
};

export default ProductReviewSection;
