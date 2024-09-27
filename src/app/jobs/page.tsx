import React from 'react';

interface JobListingProps {
  department: string;
  location: string;
  title: string;
}

const JobListing: React.FC<JobListingProps> = ({
  department,
  location,
  title,
}) => (
  <div className="flex flex-col pb-3 w-full">
    <div className="flex gap-3 justify-between w-full">
      <div className="flex flex-col px-3">
        <div className="flex gap-1.5 text-xs tracking-normal capitalize">
          <div>{department}</div>
          <button className="text-xs">Remove</button>
          <div className="text-emerald-950 text-opacity-50">•</div>
          <div>{location}</div>
        </div>
        <h2 className="mt-2 text-lg font-medium">{title}</h2>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/86e7ccbc72a0ee4a24b91a98c7ab37368fc1962c9b16c2a3fe1b0541eac10a3b?apiKey=db678b7586ac404998e13a78e0473c5d&"
        alt=""
        className="shrink-0 my-auto w-6 aspect-square"
      />
    </div>
  </div>
);

const jobListingsData = [
  {
    department: 'Finance & Accounting',
    location: 'US',
    title: 'Account, Revenue Operations',
  },
  {
    department: 'Finance & Accounting',
    location: 'US',
    title: 'Account, Revenue Operations',
  },
  {
    department: 'Finance & Accounting',
    location: 'US',
    title: 'Account, Revenue Operations',
  },
  {
    department: 'Finance & Accounting',
    location: 'US',
    title: 'Account, Revenue Operations',
  },
  {
    department: 'Finance & Accounting',
    location: 'US',
    title: 'Account, Revenue Operations',
  },
  {
    department: 'Finance & Accounting',
    location: 'US',
    title: 'Account, Revenue Operations',
  },
  {
    department: 'Finance & Accounting',
    location: 'US',
    title: 'Account, Revenue Operations',
  },
  {
    department: 'Finance & Accounting',
    location: 'US',
    title: 'Account, Revenue Operations',
  },
  {
    department: 'Finance & Accounting',
    location: 'US',
    title: 'Account, Revenue Operations',
  },
  {
    department: 'Finance & Accounting',
    location: 'US',
    title: 'Account, Revenue Operations',
  },
];

const JobListings: React.FC = () => {
  return (
    <article className="p-10 max-w-[1152px] m-auto">
      <div className="flex justify-center items-center px-8 py-10 w-full bg-[#036C5F] rounded-2xl max-md:px-4 max-md:max-w-full">
        <div className="flex flex-col justify-center max-w-full w-[500px]">
          <div className="flex flex-col justify-center text-white max-md:max-w-full">
            <div className="self-center text-4xl leading-[50px] max-md:text-2xl">
              All Jobs
            </div>
            <div className="mt-2 text-base font-light tracking-normal leading-6 text-center max-md:max-w-full">
              100+ roles open
            </div>
          </div>
          <div className="flex flex-col justify-center mt-8 text-sm max-md:mt-6 max-md:max-w-full">
            <div className="flex flex-col justify-center items-start px-3 py-2 tracking-normal capitalize bg-gray-100 rounded-xl text-neutral-600 max-md:pr-4 max-md:max-w-full">
              <div className="flex gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/49ee7cbc2f66818137a6abfd0c38a5e760f518d00214a8bf42acb04ca15d9e90?apiKey=db678b7586ac404998e13a78e0473c5d&"
                  className="shrink-0 w-4 aspect-square"
                />
                <div>Start your search</div>
              </div>
            </div>
            <div className="flex gap-3 mt-4 text-white max-md:flex-wrap">
              <div className="flex flex-col text-center justify-center px-2.5 py-2 border border-solid bg-white bg-opacity-10 border-white border-opacity-10 rounded-full">
                <div className="flex gap-2">
                  <div className="flex-1 justify-center text-center items-center">
                    Team
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center px-2.5 py-2 capitalize border border-solid bg-white bg-opacity-10 border-white border-opacity-10 rounded-full">
                <div className="flex gap-2 justify-center">
                  <div className="justify-center">Where you work</div>
                </div>
              </div>
              <div className="flex flex-col justify-center px-2.5 py-2 border border-solid bg-white bg-opacity-10 border-white border-opacity-10 rounded-full">
                <div className="flex gap-2 justify-center">
                  <div className="justify-center">Work Flexibility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-between px-3 mt-10 w-full capitalize text-neutral-800 max-md:flex-wrap max-md:mt-8 max-md:max-w-full">
        <div className="my-auto text-xl font-medium tracking-wide max-md:max-w-full">
          Showing 1-10 results out of total 141 open jobs
        </div>
        <div className="flex flex-col justify-center px-5 py-3 text-sm tracking-normal bg-gray-100 rounded-full max-md:px-4">
          <div className="flex gap-2 justify-center">
            <div>Sort By Job Title (A-Z)</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d532f4f3dc5cb897c56f2816ea8f8676686b69e73f50bc52813b56cd060d2efe?apiKey=db678b7586ac404998e13a78e0473c5d&"
              className="shrink-0 my-auto w-4 aspect-square"
            />
          </div>
        </div>
      </div>

      <section className="flex flex-col mt-6 w-full">
        {jobListingsData.map((job, index) => (
          <JobListing
            key={index}
            department={job.department}
            location={job.location}
            title={job.title}
          />
        ))}
      </section>
    </article>
  );
};

export default JobListings;
