import Image from 'next/image';
import * as React from 'react';

interface ImageCardProps {
  title: string;
  description: string | JSX.Element;
  image: string;
  background: 'primary' | 'secondary';
}

const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  image,
  background,
}) => {
  return (
    <section className="flex flex-col justify-center px-8 py-10 w-full bg-stone-50 max-md:px-3 max-md:max-w-full">
      <div
        className={`py-6 pl-5 mx-1.5 my-3 ${background === 'primary' ? 'bg-[#04554A]' : 'bg-[#CFD7D7]'} rounded-[20px] max-md:pl-3 max-md:max-w-full`}
      >
        <div className="flex gap-2 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-5 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <h2
                  className={`text-4xl ${background === 'primary' ? 'text-stone-50' : 'text-black'} max-md:max-w-full max-md:text-2xl`}
                >
                  {title}
                </h2>
                <p
                  className={`mt-3 text-base leading-5 ${background === 'primary' ? 'text-stone-50' : 'text-black'} max-md:max-w-full`}
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center self-stretch max-md:mt-5">
              <Image
                loading="lazy"
                src={image}
                height={500} // Reduced height
                width={500}  // Reduced width
                alt={title}
                className="max-w-[80%] aspect-[1.25] object-cover overflow-visible"
                style={{ position: 'relative', zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCard;
