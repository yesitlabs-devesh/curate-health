import * as React from 'react';

interface SubscribeSectionProps {
  title: string;
  description: string;
}

const SubscribeSection: React.FC<SubscribeSectionProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col px-14 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex justify-center items-center px-16 text-center max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[611px]">
          <div className="self-center text-5xl text-neutral-800 max-md:max-w-full max-md:text-4xl">
            {title}
          </div>
          <div className="mt-4 text-base font-light leading-6 text-neutral-600 max-md:max-w-full">
            {description}
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-center self-center mt-12 max-w-full text-xs whitespace-nowrap rounded-2xl w-[566px] max-md:flex-wrap max-md:mt-10">
        <input
          type="email"
          placeholder="Email"
          className="justify-center items-start px-4 py-2 font-light rounded-lg bg-neutral-100 text-neutral-500 max-md:pr-5 flex-1"
        />
        <button className="justify-center px-10 py-4 text-center text-white uppercase rounded-xl bg-[#04554A] leading-[140%] max-md:px-5">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubscribeSection;
