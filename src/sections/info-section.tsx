import Link from 'next/link';
import * as React from 'react';

interface InfoSectionProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonLink?: string;
  imgUrl?: string;
  rightSide?: boolean;
}

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: 'white' | 'black';
}

const Button: React.FC<CustomButtonProps> = ({
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
const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  description,
  buttonLabel,
  buttonLink,
  imgUrl,
  rightSide,
}) => {
  return (
    <section className="flex flex-col justify-center px-14 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div
        className={`flex gap-5 max-md:flex-col max-md:gap-0 ${rightSide ? 'flex-row-reverse' : 'flex-row'}`}
      >
        <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center items-start self-stretch px-16 py-16 max-md:max-w-full">
            <section className="flex flex-col max-md:max-w-full">
              <h2 className="text-5xl text-neutral-800 max-md:max-w-full max-md:text-4xl">
                Improve both physical and mental health
              </h2>
              <p className="mt-4 text-base font-light leading-6 text-neutral-600 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing
                elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed
                eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi
                felis. Lorem ipsum dolor sit amet, consectetur cdolor col
                adipiscing elit. Integer mattis.
              </p>
            </section>
            {buttonLabel && (
              <Link href={buttonLink || '#'}>
                <Button label={buttonLabel} />
              </Link>
            )}
          </div>
        </article>
        <figure className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex grow justify-center items-center p-2 w-full rounded-2xl bg-neutral-100 max-md:px-5 max-md:max-w-full">
            {imgUrl && (
              <img
                loading="lazy"
                src={imgUrl}
                alt="Health plan customization"
                className="mt-20 max-w-full aspect-square w-[100px] max-md:mt-10"
              />
            )}
          </div>
        </figure>
      </div>
    </section>
  );
};

export default InfoSection;
