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
const ImageSliderSection: React.FC = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <Slider
      {...settings}
      className="mt-16 mb-5 w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full"
    >
      <img
        className="w-full"
        src="https://i.postimg.cc/ydGpfRS9/Consultation-Room-1.png"
        alt=""
      />
      <img
        className="w-full"
        src="https://i.postimg.cc/nL9BqGz0/second.png"
        alt=""
      />
      <img
        className="w-full"
        src="https://i.postimg.cc/VvgCz7GL/third.png"
        alt=""
      />
    </Slider>
  );
};

export default ImageSliderSection;
