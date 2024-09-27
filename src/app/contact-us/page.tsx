import { Switch } from '@/components/ui/switch';
import * as React from 'react';
import dynamic from 'next/dynamic';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
}

const Button: React.FC<ButtonProps> = ({ type, text }) => {
  return (
    <button
      type={type}
      className="justify-center items-center px-16 py-6 mt-5 max-w-full text-xl font-medium leading-7 text-center text-white uppercase whitespace-nowrap bg-neutral-800 rounded-[120px] w-[345px] max-md:px-5"
    >
      {text}
    </button>
  );
};

type CardProps = {
  heading: string;
  text: string;
  iconAlt: string;
  email: string;
};

const Card: React.FC<CardProps> = ({ heading, text, iconAlt, email }) => (
  <section className="flex flex-col grow p-4 w-full rounded-2xl bg-neutral-100">
    <div className="shrink-0 bg-white rounded-lg h-[37px] w-[37px]" />
    <div className="flex flex-col justify-center mt-11">
      <h3 className="text-xl leading-6 text-neutral-800">{heading}</h3>
      <p className="mt-4 text-sm font-light leading-5 text-neutral-400">
        {text}
      </p>
    </div>
  </section>
);

interface ContactFormProps {
  title: string;
  description: string;
}

interface InputFieldProps {
  name: string;
  placeholder: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  type = 'text',
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="flex-1 justify-center items-start px-5 py-2.5 bg-neutral-50 rounded-[90px]"
      aria-label={placeholder}
    />
  );
};

interface ContactFormProps {
  title: string;
  description: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ title, description }) => {
  return (
    <div className="px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-8 py-10 mt-5 w-full text-white bg-emerald-700 rounded-[40px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
              <h1 className="text-6xl max-md:max-w-full max-md:text-4xl">
                {title}
              </h1>
              <p className="mt-2.5 text-xl leading-7 max-md:max-w-full">
                {description}
              </p>
            </div>
            <div className="flex flex-col mt-10 max-w-full text-xl leading-7 w-[200px]">
              <p>Follow our journey</p>
              <nav className="flex gap-5 pr-20 mt-3 max-md:pr-5">
                <a href="#" className="shrink-0" tabIndex={0}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/821ed8a31833b78c05fe485f84be3263c027437577f6d0c94a296c773f999099?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                    alt="social media icon"
                    className="w-6 aspect-square"
                  />
                </a>
                <a href="#" className="shrink-0" tabIndex={0}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d755f45ade71b93ab51f6438350267ab1ee6cee50d924ffb36f6eba2f4edc0f?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                    alt="social media icon"
                    className="w-6 aspect-square"
                  />
                </a>
                <a href="#" className="shrink-0" tabIndex={0}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b298a9de02e2c395d4cc044b791d8b2d2c7c0449a60362ecf1efd2023ddbad98?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                    alt="social media icon"
                    className="w-6 aspect-square"
                  />
                </a>
                <a href="#" className="shrink-0" tabIndex={0}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9e0149efabe49d4381133537671ac809f922ad799ca32ffc861a16620eb188e?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                    alt="social media icon"
                    className="w-6 aspect-square"
                  />
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <form className="flex gap-5 flex-col p-8 bg-white border border-solid shadow-xl border-neutral-50 rounded-[40px] max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 text-base leading-6 text-stone-500 max-md:flex-wrap max-md:max-w-full">
                <InputField name="firstName" placeholder="First name" />
                <InputField name="lastName" placeholder="Last name" />
              </div>
              <InputField name="email" placeholder="Email" type="email" />
              <InputField name="phone" placeholder="Phone" type="tel" />
              <textarea
                name="message"
                placeholder="Message"
                className="justify-center items-start px-5 pt-5 pb-12 mt-5 text-base leading-6 whitespace-nowrap rounded-xl bg-neutral-50 text-stone-500 max-md:max-w-full"
              />
              <div className="flex gap-3 mt-5 max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col  py-1 max-md:pl-5">
                  <Switch />
                </div>
                <p className="text-xl leading-7 underline text-neutral-600 max-md:max-w-full">
                  I have read and agree to the{' '}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
              <Button type="submit" text="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialIcons: React.FC = () => {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/174ad692a6a8ecb22b3445862eae87172e4f1521e6f9e62e3aed1353b63f84f7?apiKey=21f73548ae0c48fabcc8e482427997f9&"
      className="self-center mt-6 w-full aspect-[5]"
      alt="Social media icons"
    />
  );
};

const ContactUsForm: React.FC = () => (
  <form className="flex flex-col grow text-xs font-light rounded-2xl text-neutral-500">
    <div className="flex gap-4">
      <div className="flex-1 justify-center items-start  rounded-lg bg-neutral-100">
        <label className="sr-only" htmlFor="firstName">
          First name
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First name"
          className="w-full px-4 py-4 bg-neutral-100"
        />
      </div>
      <div className="flex-1 justify-center items-start  rounded-lg bg-neutral-100">
        <label className="sr-only" htmlFor="lastName">
          Last name
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Last name"
          className="w-full px-4 py-4 bg-neutral-100"
        />
      </div>
    </div>
    <div className="justify-center items-start  mt-4 rounded-lg bg-neutral-100">
      <label className="sr-only" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        className="w-full py-4 px-4  bg-neutral-100"
      />
    </div>
    <div className="justify-center items-start mt-4 rounded-lg bg-neutral-100">
      <label className="sr-only" htmlFor="phone">
        Phone
      </label>
      <input
        type="tel"
        id="phone"
        placeholder="Phone"
        className="w-full px-4 py-4  bg-neutral-100"
      />
    </div>
    <div className="justify-center items-start mt-4 rounded-lg bg-neutral-100">
      <label className="sr-only" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        placeholder="Message"
        className=" px-4 pt-4  w-full h-32 bg-neutral-100"
      ></textarea>
    </div>
    <button
      type="submit"
      className="justify-center self-start px-10 py-4 mt-4 text-center text-white uppercase rounded-xl bg-[#04554A] leading-[140%]"
    >
      Submit
    </button>
  </form>
);

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <section className="flex flex-col grow self-stretch px-5 py-6 w-full bg-white rounded-3xl border border-solid shadow-xl border-neutral-50">
      <div className="flex flex-col justify-center items-center px-5 rounded-md bg-neutral-100 h-[60px] w-[60px]">
        {icon}
      </div>
      <div className="flex flex-col justify-center mt-16 max-md:mt-10">
        <h2 className="text-3xl leading-10 text-neutral-800">{title}</h2>
        <p className="mt-4 text-lg leading-6 text-stone-500">{description}</p>
      </div>
    </section>
  );
};

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ContactSupport: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: (
        <div className="shrink-0 w-full h-5 bg-emerald-700 rounded-[81.818px]" />
      ),
      title: 'Already a member?',
      description:
        'Contact us via email at patients@curatehealth.com or submit your request via help portal.',
    },
    {
      icon: (
        <div className="shrink-0 w-full h-5 bg-emerald-700 rounded-[81.818px]" />
      ),
      title: 'Not a member yet?',
      description:
        "We're always here to help. Just message us via chat or drop us a line at new@curatehealth.com",
    },
    {
      icon: (
        <div className="shrink-0 w-full h-5 bg-emerald-700 rounded-[81.818px]" />
      ),
      title: 'Provider support',
      description:
        "We're always here to help. Just message us via chat or drop us a line at provider@curatehealth.com",
    },
    {
      icon: (
        <div className="shrink-0 w-full h-5 bg-emerald-700 rounded-[81.818px]" />
      ),
      title: 'Partnerships',
      description:
        "Let's partner! Send your proposal to partners@curatehealth.com",
    },
  ];

  return (
    <main className="flex flex-col justify-between px-16 pt-16 pb-16 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center mx-2.5 mb-5 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
              >
                <ContactCard
                  icon={info.icon}
                  title={info.title}
                  description={info.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

const ContactUs: React.FC = () => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import('@/sections/map-section'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <>
      <header className="box-border flex relative flex-col shrink-0">
        <section className="flex flex-col justify-center px-12 py-20 w-full bg-neutral-100">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-8xl leading-[110.4px] text-neutral-800 max-md:max-w-full max-md:text-4xl">
              Get in touch
            </h1>
            <p className="mt-4 text-xl leading-7 text-neutral-600 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
      </header>

      <main>
        <ContactSupport />
        <ContactForm
          title={'Contact us'}
          description={
            'Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.'
          }
        />

        <section className="px-16 ">
          <div className="rounded-3xl overflow-hidden">
            <Map position={[30.3151777, -97.7345022]} zoom={20} />
          </div>
        </section>
        <div className="flex flex-col justify-center px-16 py-16 text-center bg-white max-md:px-5">
          <div className="flex flex-col items-center p-10 mx-2.5 bg-[#047857] rounded-[40px] max-md:px-5 max-md:max-w-full">
            <div className="text-6xl text-white leading-[72px] w-[540px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
              Get started with
              <br />
              Curate Health today
            </div>
            <div className="mt-5 text-xl font-light leading-8 text-white w-[693px] max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore. Dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </div>
            <div className="flex gap-5 justify-center mt-10 max-w-full text-base leading-6 uppercase w-[693px] max-md:flex-wrap">
              <div className="justify-center items-center px-16 py-5 bg-white rounded-2xl text-neutral-800 max-md:px-5">
                Explore membership plans
              </div>
              <div className="justify-center items-center px-16 py-5 text-white rounded-2xl border border-white border-solid bg-neutral-800 max-md:px-5">
                For employers
              </div>
            </div>
          </div>
        </div>
        {/* <section>
          <div className="flex flex-col justify-center px-16 py-16 bg-white max-md:px-5">
            <div className="px-8 pt-7 pb-14 mx-2.5 bg-neutral-50 rounded-[40px] max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col justify-center text-neutral-800 max-md:max-w-full">
                      <div className="flex flex-col max-md:max-w-full">
                        <div className="text-6xl max-md:max-w-full max-md:text-4xl">
                          Get started with Curate Health today
                        </div>
                        <div className="mt-5 text-xl leading-7 max-md:max-w-full">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore. Dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore.
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5 mt-10 text-xl font-medium leading-7 text-center uppercase max-md:flex-wrap">
                      <div className="justify-center px-16 py-6 text-white bg-neutral-800 rounded-[120px] max-md:px-6">
                        Explore memberships
                      </div>
                      <div className="justify-center px-16 py-6 border border-solid border-neutral-800 rounded-[120px] text-neutral-800 max-md:px-6">
                        For employers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://i.postimg.cc/prN6mcBy/Frame-1171275188.png"
                    className="w-full fill-emerald-700 max-w-[544px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default ContactUs;
