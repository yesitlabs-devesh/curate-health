import * as React from 'react';

interface EmailSectionProps {
  title: string;
  description: string;
}

const EmailSection: React.FC<EmailSectionProps> = ({ title, description }) => {
  return (
    <section className="flex flex-col justify-center px-8 py-10 w-full bg-stone-50 max-md:px-3 max-md:max-w-full">
      <div className="py-6 pl-5 mx-1.5 my-3 bg-[#04554A] rounded-[20px] max-md:pl-3 max-md:max-w-full">
        <div className="flex gap-2 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-5 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <h2 className="text-3xl text-white max-md:max-w-full max-md:text-2xl">
                  {title}
                </h2>
                <p className="mt-3 text-base leading-5 text-stone-50 max-md:max-w-full">
                  {description}
                </p>
              </div>
              <form className="flex gap-3 w-full mt-5 text-base leading-5 text-white whitespace-nowrap rounded-3xl max-md:flex-wrap max-md:max-w-full">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="justify-center flex-1 items-start px-4 py-2 bg-teal-800 max-w-[300px] rounded-[50px] max-md:max-w-full"
                />
                <button
                  type="submit"
                  className="justify-center items-center px-8 py-4 font-medium text-center uppercase bg-black rounded-[60px] max-md:px-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col ml-3 w-[34%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center self-stretch max-md:mt-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/36c66e2a35f03be73d46a5df419ca582943c71675b3e63924a6caa43c06401e6?apiKey=db678b7586ac404998e13a78e0473c5d&"
                alt="Newsletter illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
