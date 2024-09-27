'use client';
import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: 'white' | 'black';
}

export const Button: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  className,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      className={`justify-center self-start px-12 py-6 mt-10 text-xl font-light leading-7 text-center uppercase rounded-2xl bg-[#04554A] text-neutral-100 max-md:px-6 ${type === 'white' ? '!bg-neutral-100 !text-neutral-800 border !border-neutral-800' : ''} ${className}`}
    >
      {label}
    </button>
  );
};
const CarouselSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <Slider {...settings}>
      <section className="px-20 py-3 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="text-5xl leading-[63.84px] text-emerald-950 max-md:max-w-full">
                    Build Your Team
                  </div>
                  <div className="mt-8 text-lg font-light tracking-normal leading-7 text-neutral-600 max-md:max-w-full">
                    Every year, patients across the country go to separate
                    clinics for Primary Care, Mental Health Counseling,
                    Dentistry, Dermatology, Physical Therapy, and all their
                    other preventative care needs. What if you could meet with
                    specialists across all these disciplines through one site,
                    or in one location? What if these healthcare professionals
                    actually worked together to help you meet your goals? <br />
                    <br />
                    Whether you’re looking for exceptional Primary Care, or to
                    receive all your essential preventative care in the same
                    place, Curate has a membership program designed to help you
                    reach your goals.{' '}
                  </div>
                </div>
                <div className="flex flex-col justify-center p-0.5 mt-16 max-w-full text-lg tracking-normal capitalize bg-gray-100 rounded-[100px] text-emerald-950 w-[157px] max-md:mt-10">
                  <Link
                    href="/join"
                    className="justify-center px-6 py-3.5 border border-white border-solid rounded-[100px] max-md:px-5"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center items-end self-stretch px-14 py-20 my-auto  max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1715006a0058a663713c44d70ece3fa063a6b5c5f48107832232903a6c1c74ee?apiKey=fac0b9adbf9c43738d3faaf142128124&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1715006a0058a663713c44d70ece3fa063a6b5c5f48107832232903a6c1c74ee?apiKey=fac0b9adbf9c43738d3faaf142128124&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1715006a0058a663713c44d70ece3fa063a6b5c5f48107832232903a6c1c74ee?apiKey=fac0b9adbf9c43738d3faaf142128124&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1715006a0058a663713c44d70ece3fa063a6b5c5f48107832232903a6c1c74ee?apiKey=fac0b9adbf9c43738d3faaf142128124&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1715006a0058a663713c44d70ece3fa063a6b5c5f48107832232903a6c1c74ee?apiKey=fac0b9adbf9c43738d3faaf142128124&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1715006a0058a663713c44d70ece3fa063a6b5c5f48107832232903a6c1c74ee?apiKey=fac0b9adbf9c43738d3faaf142128124&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1715006a0058a663713c44d70ece3fa063a6b5c5f48107832232903a6c1c74ee?apiKey=fac0b9adbf9c43738d3faaf142128124&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1715006a0058a663713c44d70ece3fa063a6b5c5f48107832232903a6c1c74ee?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                className="max-w-full w-[435px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-20 py-3 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex justify-center items-center self-stretch px-16 py-20 my-auto w-full bg-white  max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7876320a6f56eab5a2c8fef0ccd38ea3a66a254f6a1ada9cce3a0806d71263?apiKey=fac0b9adbf9c43738d3faaf142128124&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7876320a6f56eab5a2c8fef0ccd38ea3a66a254f6a1ada9cce3a0806d71263?apiKey=fac0b9adbf9c43738d3faaf142128124&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7876320a6f56eab5a2c8fef0ccd38ea3a66a254f6a1ada9cce3a0806d71263?apiKey=fac0b9adbf9c43738d3faaf142128124&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7876320a6f56eab5a2c8fef0ccd38ea3a66a254f6a1ada9cce3a0806d71263?apiKey=fac0b9adbf9c43738d3faaf142128124&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7876320a6f56eab5a2c8fef0ccd38ea3a66a254f6a1ada9cce3a0806d71263?apiKey=fac0b9adbf9c43738d3faaf142128124&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7876320a6f56eab5a2c8fef0ccd38ea3a66a254f6a1ada9cce3a0806d71263?apiKey=fac0b9adbf9c43738d3faaf142128124&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7876320a6f56eab5a2c8fef0ccd38ea3a66a254f6a1ada9cce3a0806d71263?apiKey=fac0b9adbf9c43738d3faaf142128124&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e7876320a6f56eab5a2c8fef0ccd38ea3a66a254f6a1ada9cce3a0806d71263?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                className="mt-8 max-w-full w-[435px] max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col justify-center py-20 max-md:max-w-full">
                <div className="flex flex-col mt-4 max-md:max-w-full">
                  <div className="text-5xl leading-[64px] text-emerald-950 max-md:max-w-full">
                    Health Action Plans Driven By Data
                  </div>
                  <div className="mt-8 text-lg font-light tracking-normal leading-7 text-neutral-600 max-md:max-w-full">
                    Your team works with you to ensure you have a strong
                    understanding of your biometrics. Then, with your commitment
                    to hitting achievable, measurable improvement in metrics
                    like blood pressure, A1C, and LDL levels, puts together a
                    comprehensive Health Action Plan.{' '}
                  </div>
                </div>
                <div className="flex flex-col justify-center px-0.5 py-px mt-16 mb-4 max-w-full text-lg tracking-normal capitalize bg-gray-100 rounded-[100px] text-emerald-950 w-[153px] max-md:mt-10">
                  <div className="justify-center px-6 py-3.5 border border-white border-solid rounded-[100px] max-md:px-5">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-20 flex justify-center items-center py-3 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
        <div className="mt-32 mb-20 w-full m-auto max-md:my-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch mt-1.5 text-lg max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl leading-[64px] text-emerald-950 max-md:max-w-full">
                  Progress Aided by Best-In-Class Technology
                </div>
                <div className="mt-8 font-light tracking-normal leading-7 text-neutral-600 max-md:max-w-full">
                  To help you and your team track your progress, Curate provides
                  seamless access to best-in-class diagnostic tools and smart
                  wearables, and makes analyzing your data easy through the
                  Curate Portal.{' '}
                </div>
                <div className="flex flex-col justify-center p-0.5 mt-16 max-w-full tracking-normal capitalize bg-gray-100 rounded-[100px] text-emerald-950 w-[153px] max-md:mt-10">
                  <div className="justify-center px-6 py-3.5 border border-white border-solid rounded-[100px] max-md:px-5">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://i.postimg.cc/wT1g8ZH3/image-16.png"
                className="grow w-full aspect-[1.03] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </section>
    </Slider>
  );
};

export default CarouselSection;
