import * as React from 'react';

const ProductSellingSection: React.FC = () => {
  return (
    <div className="px-20 py-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center items-center self-stretch my-auto max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ace2d4a4b0f0928b6e4328b1dca17ecff8b6e498414a3b372285a9ec945db3?apiKey=db678b7586ac404998e13a78e0473c5d&"
              className="aspect-[0.97] w-[31px]"
            />
            <div className="mt-3.5 text-xl font-medium text-emerald-950">
              Free shipping
            </div>
            <div className="self-stretch mt-3.5 text-sm tracking-normal text-center capitalize text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur cdolor col elit. Integer
              mattis nunc.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center items-center self-stretch my-auto max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8e887cdb449005a9f2023e11f6a7787d812282cd190024c50362daf5646bd00?apiKey=db678b7586ac404998e13a78e0473c5d&"
              className="w-8 aspect-square"
            />
            <div className="mt-3.5 text-xl font-medium text-emerald-950">
              24/7 support
            </div>
            <div className="self-stretch mt-3.5 text-sm tracking-normal text-center capitalize text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur cdolor col elit. Integer
              mattis nunc.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/129fc48456d98d2119bf9baa88a9f5ed0a56c4cedc4c7292a9c7e89d89d962d7?apiKey=db678b7586ac404998e13a78e0473c5d&"
              className="self-center w-8 aspect-square"
            />
            <div className="mx-6 mt-3.5 text-xl font-medium text-emerald-950 max-md:mx-2.5">
              Member-only discounts
            </div>
            <div className="mt-3.5 text-sm tracking-normal text-center capitalize text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur cdolor col elit. Integer
              mattis nunc.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center items-center self-stretch my-auto max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c33d34a61985cc7e8c22773ca6e71ba39026224be9b1c608236adc102f98f97?apiKey=db678b7586ac404998e13a78e0473c5d&"
              className="w-8 aspect-square"
            />
            <div className="mt-3.5 text-xl font-medium text-emerald-950">
              Satisfaction guarantee
            </div>
            <div className="self-stretch mt-3.5 text-sm tracking-normal text-center capitalize text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur cdolor col elit. Integer
              mattis nunc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSellingSection;
