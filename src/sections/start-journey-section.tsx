import * as React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  tabIndex?: number;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  tabIndex = 0,
}) => (
  <button className={className} tabIndex={tabIndex}>
    {children}
  </button>
);

type TextBlockProps = {
  heading: string;
  subheading: string;
};

const TextBlock: React.FC<TextBlockProps> = ({ heading, subheading }) => (
  <div className="flex flex-col max-md:max-w-full">
    <h1 className="text-5xl text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
      {heading}
    </h1>
    <p className="mt-5 text-lg font-light tracking-normal leading-7 text-gray-100 max-md:max-w-full">
      {subheading}
    </p>
  </div>
);

const StartJourneySection: React.FC = () => {
  return (
    <section className="relative bg-contain bg-center flex overflow-hidden relative flex-col gap-5 justify-between px-4 py-4 w-full fill-emerald-700 min-h-[449px] max-md:flex-wrap max-md:px-5 max-md:max-w-full curate-health-band">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f08b6915c07d9f91a2cf3b4fb315e17c46b23401a9060e2c3ab5a5049082304f?apiKey=fac0b9adbf9c43738d3faaf142128124&"
        alt=""
        className="w-full "
      />
      <div className="flex flex-col md:flex-row gap-5 px-12 py-6 absolute w-full">
        <div className="md:w-1/2">
          <div className="flex flex-col max-md:max-w-full">
            <h1 className="text-5xl text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
              Get started with <br className="max-md:hidden" /> Curate Health
              today
            </h1>
            <p className="mt-5 text-lg font-light tracking-normal leading-7 text-gray-100 max-md:max-w-full">
              Track Heart Health. Sleep. Cycle Management. Fitness{' '}
              <br className="max-md:hidden" /> Activity and more with built-in
              messaging.
            </p>
          </div>
          <div className="flex gap-2 mt-6 text-lg tracking-normal capitalize max-md:flex-wrap max-md:mt-10 manage-journey-btns">
            <Button className="flex flex-col justify-center p-0.5 bg-gray-100 rounded-[100px] text-emerald-950">
              <span className="justify-center px-6 py-3 border border-white border-solid rounded-[100px] max-md:px-5">
                Find Your HEalth Coach
              </span>
            </Button>
            <Button className="flex flex-col justify-center p-0.5 text-white rounded-[100px]">
              <span className="justify-center px-6 py-3 border border-gray-100 border-solid rounded-[100px] max-md:px-5">
                For Employers
              </span>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 p-3 relative">
          <img
            loading="lazy"
            src="https://i.postimg.cc/CL4Gsnp8/logo-with-shadow.png"
            alt=""
            className="w-full m-auto "
          />
          {/* <img loading="lazy" src="https://i.postimg.cc/d0v5tjBh/logo-bg.png" alt="" className="w-full top-0 left-0 m-auto absolute " /> */}
        </div>
      </div>
    </section>
  );
};

export default StartJourneySection;
