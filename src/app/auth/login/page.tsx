import * as React from 'react';

type BenefitItemProps = {
  title: string;
  description: string;
};

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description }) => (
  <div className="flex gap-4 mt-8">
    <div className="shrink-0 self-start bg-white rounded-lg h-[37px] w-[37px]" />
    <div className="flex flex-col flex-1 justify-center">
      <div className="text-xl leading-6 text-neutral-800">{title}</div>
      <div className="mt-4 text-xs font-light leading-5 text-neutral-400">
        {description}
      </div>
    </div>
  </div>
);

const benefits = [
  {
    title: 'Benefit #1',
    description:
      'Lorem ipsum dolor sit amet, consectetur cdolor col elit. Integer mattis nunc augue vel lacinia erat.',
  },
  {
    title: 'Benefit #2',
    description:
      'Lorem ipsum dolor sit amet, consectetur cdolor col elit. Integer mattis nunc augue vel lacinia erat.',
  },
  {
    title: 'Benefit #3',
    description:
      'Lorem ipsum dolor sit amet, consectetur cdolor col elit. Integer mattis nunc augue vel lacinia erat.',
  },
  {
    title: 'Benefit #4',
    description:
      'Lorem ipsum dolor sit amet, consectetur cdolor col elit. Integer mattis nunc augue vel lacinia erat.',
  },
];

const Login: React.FC = () => {
  return (
    <div className="flex flex-col justify-center px-12 py-20 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
      <div className="mt-11 mb-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <header className="flex flex-col grow justify-center max-md:mt-10 max-md:max-w-full">
              <h1 className="text-5xl text-neutral-800 max-md:max-w-full max-md:text-4xl">
                Curate Health platform
              </h1>
              <p className="mt-4 text-base font-light leading-6 text-neutral-600 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing
                elit. Integer mattis nunc augue vel lacinia erat euismod ut.
              </p>
            </header>
            <section className="mt-8 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  {benefits.slice(0, 2).map((benefit, index) => (
                    <BenefitItem
                      key={index}
                      title={benefit.title}
                      description={benefit.description}
                    />
                  ))}
                </article>
                <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  {benefits.slice(2, 4).map((benefit, index) => (
                    <BenefitItem
                      key={index}
                      title={benefit.title}
                      description={benefit.description}
                    />
                  ))}
                </article>
              </div>
            </section>
          </section>

          <aside className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <form className="flex flex-col grow justify-center px-16 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <section className="flex flex-col justify-center p-8 mr-2.5 bg-white rounded-[30.843px] max-md:px-5 max-md:ml-2.5">
                <h2 className="text-xl leading-6 text-center text-neutral-800">
                  Sign in to your account
                </h2>
                <div className="flex flex-col justify-center mt-6">
                  <label htmlFor="loginInput" className="sr-only">
                    Login
                  </label>
                  <input
                    className="px-4 py-4 font-light whitespace-nowrap rounded-lg bg-neutral-100 text-neutral-500 max-md:pr-5"
                    type="text"
                    id="loginInput"
                    placeholder="Login"
                    aria-label="Login"
                  />
                  <label htmlFor="passwordInput" className="sr-only">
                    Password
                  </label>
                  <div className="relative w-full mt-5">
                    <input
                      type="password"
                      id="passwordInput"
                      placeholder="Password"
                      aria-label="Password"
                      className="px-4 py-4 font-light whitespace-nowrap rounded-lg bg-neutral-100 text-neutral-500 max-md:pr-5 w-full"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d2094072f94321decfc5ce7e6f340d70903cdb783f173c160347748398053bc?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                      alt=""
                      className="absolute top-1/3 right-3 self-start w-6 aspect-square"
                    />
                  </div>
                  <div className="flex gap-1.5 px-px mt-4 bg-white rounded-lg">
                    <div className="flex flex-col justify-center items-start p-0.5 my-auto border border-solid bg-[#04554A] border-neutral-800 rounded-[77.108px]">
                      <div className="shrink-0 w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div className="flex-1 text-xs leading-4 text-neutral-800">
                      <span className="font-light">
                        Yes, I understand and agree to the{' '}
                      </span>
                      <span className="font-light text-neutral-800">
                        Terms of Service
                      </span>
                      <span className="font-light">, including the</span>
                      <span className="font-light text-neutral-800">
                        Privacy Policy
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="justify-center items-center px-8 py-4 mt-6 text-xs leading-4 text-center text-white uppercase rounded-xl bg-[#04554A] max-md:px-5"
                >
                  Sign in
                </button>
                <div className="flex gap-5 items-center justify-center mt-8 text-xs text-neutral-400">
                  <div className="flex-1 shrink-0 self-stretch my-auto w-full border border-solid  border-neutral-200 stroke-[1px] stroke-neutral-200" />
                  <div className="self-stretch flex-1 text-center">
                    or sign in with{' '}
                  </div>
                  <div className="flex-1 shrink-0 self-stretch my-auto w-full border border-solid  border-neutral-200 stroke-[1px] stroke-neutral-200" />
                </div>
                <div className="flex gap-3 mt-6 text-xs font-semibold whitespace-nowrap text-neutral-800">
                  <div className="flex flex-1 gap-px bg-white rounded-lg border border-solid border-neutral-200">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e2b9fd4213587e868b607519a26d436b3f231f187a13a12ff15d94a79d7bde1?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                      alt=""
                      className="shrink-0 aspect-square w-[31px]"
                    />
                    <div className="shrink-0 my-auto w-px rounded-lg bg-neutral-200 h-[25px]" />
                    <div className="flex flex-1 justify-center items-center px-5 py-1.5">
                      Google
                    </div>
                  </div>
                  <div className="flex flex-1 gap-0.5 bg-white rounded-lg border border-solid border-neutral-200">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/958f96e75422d38b06b8dee675d8b179ae03da5d4934576fc4f2b717b37ab89b?apiKey=fac0b9adbf9c43738d3faaf142128124&"
                      alt=""
                      className="shrink-0 aspect-square w-[31px]"
                    />
                    <div className="shrink-0 my-auto w-px rounded-lg bg-neutral-200 h-[25px]" />
                    <div className="flex flex-1 justify-center items-center px-5 py-1.5">
                      Facebook
                    </div>
                  </div>
                </div>
              </section>
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Login;
