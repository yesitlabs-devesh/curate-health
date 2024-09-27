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
    className={`cursor-pointer bg-white grow flex gap-5 w-380 'text-gray-100 bg-[#04554A]' : 'bg-gray-100'
      } rounded-3xl welness-boxes`}
  >

    <div className="welness-journey-wrap">
      <div className="welness-boxes">
        <div className="image-knowlge-sec">
          <img loading="lazy" src="extra-imgs/welnes-img.png" className="" />
        </div>
        <div className="wellnes-content-box">
          <div className="heading-reviews">
            <h3>John Harris</h3>
            <img loading="lazy" src="extra-imgs/check.svg" className="" />
          </div>
          <div className="button-review-con">
            <button type='button'>Gut Health</button>
            <button type='button'>Exercise</button>
          </div>
        </div>

      </div>
    </div>




  </div>
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

const Wellnesssection: React.FC = () => {
  const [activeReview, setActiveReview] = React.useState<number | null>(0);
  const settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: false,
    slidesToScroll: 1,
    speed: 2000,
    // autoplaySpeed: 2000,
    cssEase: 'linear',
    afterChange: (currentSlide: number) => setActiveReview(currentSlide),
  };
  return (
    <section className="wellness-review">
      <header className="flex flex-col mt-5 max-md:max-w-full">
        <h1 className="text-5xl text-center leading-[72px] text-emerald-950 max-md:max-w-full max-md:text-4xl">
          Meet The Perfect Partner for Your<br /> Wellness Journey
        </h1>
      </header>
      <section className="flex flex-col justify-center mt-10 mb-5 max-md:mt-10 max-md:max-w-full">
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



      </section>
      <div className="flex justify-center p-0.5 ">
        <a href="#">Explore Coaches</a>
      </div>

    </section>
  );
};

export default Wellnesssection;
