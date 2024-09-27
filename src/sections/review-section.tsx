'use client';
import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type ReviewProps = {
  imgSrc: string;
  imgAlt: string;
  name: string;
  age: number;
  location: string;
  isHighlighted?: boolean;
  onClick: () => void;
};

type TestimonialProps = {
  imgSrc: string;
  imgAlt: string;
  name: string;
  review: string;
  location: string;
  stars: number;
};

const Review: React.FC<ReviewProps> = ({
  imgSrc,
  imgAlt,
  name,
  age,
  location,
  isHighlighted = false,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`cursor-pointer bg-white grow flex gap-5 px-6 py-5 w-380 ${isHighlighted ? 'text-gray-100 bg-[#04554A]' : 'bg-gray-100'
      } rounded-3xl max-md:px-5 review-boxes`}
  >
    <img
      loading="lazy"
      src={imgSrc}
      alt={imgAlt}
      className={`rounded-full shrink-0 self-start border border-solid aspect-square ${isHighlighted ? 'border-gray-100 border-opacity-50' : 'border-zinc-300'
        } w-[60px]`}
    />
    <div className="flex flex-col">
      <div
        className={`heading ${isHighlighted ? '' : 'text-emerald-950'}`}
      >
        {name}, {age}
      </div>
      <div
        className={`para ${isHighlighted ? '' : 'text-neutral-600'
          }`}
      >
        {location}
      </div>
    </div>
  </div>
);

const Testimonial: React.FC<TestimonialProps> = ({
  imgSrc,
  imgAlt,
  name,
  review,
  location,
  stars,
}) => (
  <section className="flex bg-white flex-col shadow-md justify-center p-5 mt-16 rounded-3xl bg-gray-100 bg-opacity-30 max-md:mt-10 max-md:max-w-full">
    <div className="wapp-reviews-pro">
      <div className="review-left-sec">
        <header className="flex flex-col justify-center max-md:max-w-full">
          <div className="flex gap-1 self-start">
            {Array.from({ length: stars })?.map((_, index) => (
              <img
                key={index}
                loading="lazy"
                src={
                  'extra-imgs/star.png'
                }
                alt=""
                className="shrink-0 w-8 aspect-square"
              />
            ))}
          </div>
          <p className="mt-8 text-3xl text-neutral-600 max-md:max-w-full para-reviews">
            {review}
          </p>
        </header>
        <footer className="flex gap-5 self-start mt-11 text-emerald-950 max-md:mt-10">
          <img
            loading="lazy"
            src={imgSrc}
            alt={imgAlt}
            className="shrink-0 my-auto border border-solid aspect-square border-gray-100 border-opacity-50 w-[60px]"
          />
          <div className="flex flex-col">
            <p className="text-xl font-medium titles">{name}</p>
            <p className="text-lg font-light tracking-normal leading-7 titles">
              {location}
            </p>
          </div>
        </footer>
      </div>

      <div className="reviews-profile">
        <img loading="lazy" src="extra-imgs/review-img1.png" className="" />
        <div className="reviews-con-inner">
          <div className="heading-reviews">
            <h3>Sonya Karmali</h3>
            <img loading="lazy" src="extra-imgs/check.svg" className="" />
          </div>
          <div className="button-review-con">
            <button type='button'>Gut Health</button>
            <button type='button'>Exercise</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const reviewsData = [
  {
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/427795aa8041a702a114dd188cd349fce79e6c3188e8ee7a2bb2fa4396cdef41?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    imgAlt: 'Jake, 25',
    name: 'Jake',
    age: 25,
    stars: 5,
    location: 'Las Vegas, NV',
    review:
      '“Finally! One place for all my preventative care... why was I running around to so many different appointments EVERY YEAR! The convenience alone is worth every penny.”',
  },

  {
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/e2a493bc95f561c6f308ee33109fb677a2293f495f65da6b713857bc403ed87c?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    imgAlt: 'Stephanie Powell, 27',
    name: 'Stephanie Powell',
    age: 27,
    stars: 5,
    location: 'San Francisco, CA',
    review:
      '“Finally! One place for all my preventative care... why was I running around to so many different appointments EVERY YEAR! The convenience alone is worth every penny.”',
  },
  {
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/add0eb72a0cca037913d3d110f94f123e16d62d3d18983736118b63a2a525f24?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    imgAlt: 'James, 32',
    name: 'James',
    age: 32,
    stars: 5,
    location: 'San Francisco, CA',
    review:
      '“2Finally! One place for all my preventative care... why was I running around to so many different appointments EVERY YEAR! The convenience alone is worth every penny.”',
  },
  {
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/dd2df57a114515b354c5c1ab3aefa47fc2fafafd19f56d586a33993e2c7c1181?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    imgAlt: 'Jackson, 28',
    name: 'Jackson',
    age: 28,
    stars: 5,
    location: 'San Francisco, CA',
    review:
      '“Finally3! One place for all my preventative care... why was I running around to so many different appointments EVERY YEAR! The convenience alone is worth every penny.”',
  },

  {
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/427795aa8041a702a114dd188cd349fce79e6c3188e8ee7a2bb2fa4396cdef41?apiKey=fac0b9adbf9c43738d3faaf142128124&',
    imgAlt: 'Jake, 25',
    name: 'Jake',
    age: 25,
    stars: 5,
    location: 'Las Vegas, NV',
    review:
      '“Finally4! One place for all my preventative care... why was I running around to so many different appointments EVERY YEAR! The convenience alone is worth every penny.”',
  },
];

const ReviewSection: React.FC = () => {
  const [activeReview, setActiveReview] = React.useState<number | null>(0);
  const settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    speed: 2000,
    // autoplaySpeed: 2000,
    cssEase: 'linear',
    afterChange: (currentSlide: number) => setActiveReview(currentSlide),
  };
  return (
    <section className="verified-review">
      <header className="flex flex-col mt-5 max-md:max-w-full">
        <h1 className="text-5xl text-center leading-[72px] text-emerald-950 max-md:max-w-full max-md:text-4xl">
          Verified Reviews
        </h1>
      </header>
      <section className="flex flex-col justify-center mt-14 mb-5 max-md:mt-10 max-md:max-w-full">
        <Slider {...settings} className="max-md:flex-wrap max-md:max-w-full">
          {reviewsData.map((review, index) => (
            <div key={index} className="pr-5 ">
              <Review
                {...review}
                isHighlighted={activeReview === index}
                onClick={() => setActiveReview(index)}
              />
            </div>
          ))}
        </Slider>
        {activeReview !== null && (
          <Testimonial
            imgSrc={reviewsData[activeReview].imgSrc}
            imgAlt={reviewsData[activeReview].imgAlt}
            name={`${reviewsData[activeReview].name}, ${reviewsData[activeReview].age}`}
            review={reviewsData[activeReview].review}
            location={reviewsData[activeReview].location}
            stars={reviewsData[activeReview].stars}
          />
        )}
      </section>
    </section>
  );
};

export default ReviewSection;
