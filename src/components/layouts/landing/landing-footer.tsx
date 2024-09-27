import * as React from 'react';

type LinkSectionProps = {
  title: string;
  links: string[];
};

const LinkSection: React.FC<LinkSectionProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col text-sm text-gray-100 max-md:mt-3">
  <div className="text-base leading-6 text-neutral-400">{title}</div>
  {links.map((link, idx) => (
    <a
      key={idx}
      className="mt-1.5"
      tabIndex={0}
      role="link"
      href={link}
      aria-label={link}
    >
      {link}
    </a>
  ))}
</div>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center px-10 pt-10 pb-4 w-full bg-[#036C5F] max-md:px-4 max-md:max-w-full">
  <div className="mx-4 mt-4 max-md:mr-2 max-md:max-w-full">
    <div className="flex gap-4 max-md:flex-col max-md:gap-2">
      <aside className="flex flex-col w-[30%] max-md:w-full">
        <div className="flex flex-col max-md:mt-8">
          <figure className="flex flex-col justify-center text-sm font-light leading-5 text-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/31cbb55364bb0f796aeaf4f76a832583fc35b52d60fe9c1f93b4191366b4ac48?apiKey=fac0b9adbf9c43738d3faaf142128124&"
              alt=""
              className="max-w-full aspect-[4.55] w-[120px]"
            />
            <figcaption className="mt-8 max-md:mt-6">Power To The Patient</figcaption>
          </figure>
          <nav className="flex gap-3 pr-12 mt-6 max-md:pr-4">
            <a href="#" className="shrink-0" tabIndex={0}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/821ed8a31833b78c05fe485f84be3263c027437577f6d0c94a296c773f999099?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                alt="social media icon"
                className="w-5 aspect-square"
              />
            </a>
            <a href="#" className="shrink-0" tabIndex={0}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d755f45ade71b93ab51f6438350267ab1ee6cee50d924ffb36f6eba2f4edc0f?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                alt="social media icon"
                className="w-5 aspect-square"
              />
            </a>
            <a href="#" className="shrink-0" tabIndex={0}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b298a9de02e2c395d4cc044b791d8b2d2c7c0449a60362ecf1efd2023ddbad98?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                alt="social media icon"
                className="w-5 aspect-square"
              />
            </a>
            <a href="#" className="shrink-0" tabIndex={0}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9e0149efabe49d4381133537671ac809f922ad799ca32ffc861a16620eb188e?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                alt="social media icon"
                className="w-5 aspect-square"
              />
            </a>
          </nav>
        </div>
      </aside>

      <section className="flex flex-col items-end w-[70%] max-md:w-full">
        <div className="grow max-md:mt-8 max-md:max-w-full">
          <div className="flex gap-6 max-md:flex-col max-md:gap-2">
            <LinkSection
              title="Smart Shop"
              links={['Devices & Diagnostics', 'Smart Wearables']}
            />
            <LinkSection
              title="Care Memberships"
              links={['Curate Beauty', 'Curate Health', 'Curate Fit']}
            />
            <LinkSection
              title="Routine Center"
              links={[
                'Fitness',
                'Recovery',
                'Nutrition',
                'Skin Care',
                'Oral Hygiene',
              ]}
            />
            <LinkSection
              title="Discover"
              links={['Company', 'Legal', 'Contact Us', 'Knowledge Center']}
            />
          </div>
        </div>
      </section>
    </div>
  </div>

  <footer className="flex gap-4 pt-4 mx-4 mt-16 text-sm font-light tracking-normal leading-6 border-t border-solid border-white border-opacity-10 max-md:flex-wrap max-md:mt-8 max-md:mr-2 max-md:max-w-full">
    <p className="flex-1 text-neutral-400 max-md:max-w-full">
      Curate Health © 2024 All Rights Reserved
    </p>
    <nav className="flex gap-4 text-white">
      <a href="#" tabIndex={0} role="link" aria-label="Terms and Conditions">
        Terms and Conditions
      </a>
      <a href="#" tabIndex={0} role="link" aria-label="Privacy Policy">
        Privacy Policy
      </a>
    </nav>
  </footer>
</div>

  );
};

export default Footer;
