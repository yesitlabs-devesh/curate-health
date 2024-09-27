import * as React from 'react';

export default function NotReady() {
  return (
    <div className="py-16 pr-5 pl-20 max-md:px-5 max-md:max-w-[1152px]">
      <div className="flex gap-5 flex-col max-md:gap-0">
        <div className="flex flex-col w-full max-md:ml-0 max-md:w-[1152px]">
          <div className="items-center flex flex-col grow text-3xl font-medium tracking-tight uppercase text-neutral-800 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://i.postimg.cc/hGY1cg1s/items.png"
              className="w-full max-w-[521px]"
            />
          </div>
        </div>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 items-center justify-center">
          <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-[1152px]">
            <div className="flex flex-col grow text-3xl font-medium tracking-tight uppercase text-neutral-800 max-md:mt-10 max-md:max-w-full">
              <div className="justify-center px-3.5 py-0.5  bg-white text-center rounded-2xl border border-gray-300 border-solid max-md:mt-10 max-md:max-w-full">
                ReDesigning Healthcare’s First Line of Defense
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
            <a
              href="mailto:eric@curatehealth.ai"
              className="flex gap-2.5 justify-center px-3.5 py-2.5 w-full text-lg font-medium tracking-normal text-white uppercase bg-emerald-800 border border-white border-solid  rounded-[100px] max-md:mt-10"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c9734c0a1ab01bd9a377ff273fc07f5da382455987a112a7c26a2997c241b21?"
                className="shrink-0 my-auto w-6 aspect-square"
              />
              <div>Contact the Founder</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
