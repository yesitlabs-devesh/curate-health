'use client';
import * as React from 'react';
import { useState } from 'react';

type Tab = {
  label: string;
  header: string;
  description: string;
  points?: string[];
  imgUrl: string;
};

const tabs: Tab[] = [
  {
    label: 'Curate Primary',
    header: 'Curate Health',
    description:
      'Complete all your essential annual appointments in the same location, within 2 hours, with ongoing support from your team.',
    points: [
      'Physicals with Expedited Bloodwork, So You Can Discuss Your Results Right Away With a  your Primary Care Provider',
      'Skin Cancer Screening',
      'Vision Screening, to keep your prescription up-to-date',
      'Dental Check-Up',
    ],
    imgUrl: 'img3.jpg',
  },
  {
    label: 'Curate Plus',
    header: 'Curate Health',
    description:
      'Complete all your essential annual appointments in the same location, within 2 hours, with ongoing support from your team',
    imgUrl: 'img3.jpg',
  },
  {
    label: 'Curate Health',
    header: 'Curate Health',
    description:
      'Complete all your essential annual appointments in the same location, within 2 hours, with ongoing support from your team',
    imgUrl: 'img3.jpg',
  },
];

function HealthCareSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex flex-col justify-center p-20 w-full rounded-3xl max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mt-5 max-md:max-w-full">
        <div className="text-5xl leading-[72px] text-emerald-950 max-md:max-w-full max-md:text-4xl">
          Healthcare plans designed to meet your goals
        </div>
        <div className="mt-6 text-lg font-light tracking-normal leading-7 text-teal-700 max-md:max-w-full">
          With <span className="font-medium text-teal-700">Curate Health,</span>{' '}
          you can complete all your essential annual exams in the same day.
          Then, work with a Certified Nutritionist and Physical Therapist to
          implement your Health Action Plan through{' '}
          <span className="font-medium text-teal-700">Curate Fit</span>.
          Finally, with{' '}
          <span className="font-semibold text-teal-700">Curate Confidence</span>
          , your dentist and dermatologist collaborate with you to ensure you
          feel great about your smile and skin.{' '}
        </div>
      </div>
      <div className="flex flex-col justify-center mt-16 mb-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col justify-center max-md:max-w-full">
          <div className="flex gap-5 text-lg tracking-normal text-center capitalize rounded-xl text-emerald-950 max-md:flex-wrap">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`flex-1 justify-center px-5 py-3.5 ${activeTab === index ? 'text-white bg-[#04554A] border-teal-700' : 'bg-white border-[#696969] text-black'} rounded-[100px] border border-solid cursor-pointer`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center p-5 mt-5 rounded-3xl max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center self-stretch max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col pb-20 max-md:max-w-full">
                      <div className="flex flex-col max-md:max-w-full">
                        <div className="text-3xl text-emerald-950 max-md:max-w-full">
                          {tabs[activeTab].label}
                        </div>
                        <div className="mt-6 text-lg font-light tracking-normal leading-7 text-neutral-600 max-md:max-w-full">
                          {tabs[activeTab].description}
                          <br />
                          <ul className="list-disc ml-2 pl-4 mt-4">
                            {tabs[activeTab].points?.map((point, index) => (
                              <li key={index} className="mb-4">
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 mx-auto max-w-full bg-gray-100 rounded-3xl h-[440px] w-[570px] max-md:mt-10" />
                  {/* <img src={tabs[activeTab].imgUrl} alt={tabs[activeTab].label} className="shrink-0 mx-auto max-w-full bg-gray-100 rounded-3xl h-[440px] w-[570px] max-md:mt-10" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-0.5 mt-8 max-w-full text-lg tracking-normal capitalize bg-gray-100 rounded-[100px] text-emerald-950 w-[153px]">
          <div className="justify-center px-6 py-3.5 border border-white border-solid rounded-[100px] max-md:px-5">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthCareSection;
