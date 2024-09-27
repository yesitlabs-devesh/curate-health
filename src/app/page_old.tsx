// import LandingNavbar from "@/components/layouts/landing/landing-navbar";
import FAQSection from '@/sections/faq-section';
import LatestNewsSection from '@/sections/latest-news-section';
import CarouselSection from '@/sections/carousel-section';
import StartJourneySection from '@/sections/start-journey-section';
import { TypeAnimation } from 'react-type-animation';
import * as React from 'react';
import ThreeDLogo from '@/components/ui/3d-logo';
import ReviewSection from '@/sections/review-section';
import HealthCareSection from '@/sections/health-care-section';
import IntegratingSmartSection from '@/sections/integrating-smart-section';
import TheCurateMarketPlace from '@/sections/the-curate-marketplace-section';
import ImageSliderSection from '@/sections/image-slider-section';
import RetypeAnimation from '@/components/ui/retype-animation';

interface CustomButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, variant }) => {
  const baseStyle =
    'flex flex-col justify-center p-0.5 rounded-[100px] text-lg border border-gray-500 border-1 ';
  const primaryStyle = 'bg-[#04554A] text-white border-teal-700';
  const secondaryStyle = 'bg-gray-100 text-emerald-950 border-gray-100';

  const className = `${baseStyle} ${
    variant === 'primary' ? primaryStyle : secondaryStyle
  }`;

  return (
    <button className={className}>
      <div className="px-6 py-3 border-solid border-white rounded-[100px]">
        {text}
      </div>
    </button>
  );
};

export default function Landing() {
  return (
    <main className="">
      <div className="self-center mt-16 w-full mx-auto px-20 max-md:mt-10 max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-14 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col justify-center text-emerald-950 max-md:max-w-full">
                <div className="text-6xl leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                  Your Destination For Comprehensive
                </div>
                <div className="flex gap-3 self-start pt-3 pb-0.5 text-6xl whitespace-nowrap leading-[71.92px] max-md:text-4xl">
                  <div className="font-instrument-sans flex-auto italic max-md:text-4xl">
                    <RetypeAnimation />
                  </div>
                  {/* <div className="shrink-0 my-auto w-1 h-11 bg-emerald-400 rounded-md" /> */}
                </div>
              </div>
              <p className="justify-center py-1 mt-8 text-lg font-light tracking-normal leading-7 max-md:max-w-full">
                Complete All Your{' '}
                <span className="text-emerald-950">Essential Appointments</span>{' '}
                in the <span className="text-emerald-950">Same Location</span>,
                with <span className="text-emerald-950">Ongoing Support.</span>{' '}
                Then, Get Everything You Need to Implement Your{' '}
                <span className="text-emerald-950">Health Action Plan</span>{' '}
                through the{' '}
                <span className="text-emerald-950">Routine Center.</span>
              </p>
              <div className="flex gap-2.5 mt-16 text-lg tracking-normal capitalize max-md:flex-wrap max-md:mt-10">
                <CustomButton
                  text="Explore the Routine Center"
                  variant="primary"
                />
                <CustomButton text="Select Care Team" variant="secondary" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-lg tracking-normal text-white capitalize max-md:mt-10 max-md:max-w-full">
              <div className="mx-auto max-w-full aspect-[0.98] w-[549px]">
                <img
                  loading="lazy"
                  src="https://i.postimg.cc/6qb3QTZF/new-logo.png"
                  alt="Main visual representation"
                  className="max-w-full object-contain aspect-[0.98] w-[549px]"
                />
                {/* <ThreeDLogo /> */}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="flex flex-col justify-center p-20 mt-5 w-full rounded-3xl max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-5 max-md:max-w-full">
          <h2 className="text-5xl leading-[72px] text-emerald-950 max-md:max-w-full max-md:text-4xl">
            Imagine a Better Preventative Care System
          </h2>
          <p className="justify-center mr-5 mt-3.5 text-lg font-light tracking-normal leading-7 text-neutral-600 max-md:pr-5 max-md:max-w-full">
            Curate is on a mission to fix the disjointed healthcare system by
            bringing together top preventative care specialists into the same
            clinic to help you reach your goals. Because exceptional healthcare
            is a team sport.
          </p>
        </div>
        <ImageSliderSection />
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa0fd6ac1d06884554c61ea2831246ca4faccb79de7c012607124fac191a36d6?apiKey=db678b7586ac404998e13a78e0473c5d&" className="mt-16 mb-5 w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full" alt="Preventative Care System Illustration" /> */}
      </section>

      <div className="">
        <CarouselSection />
      </div>

      <div className="flex flex-col justify-center p-20 w-full rounded-3xl max-md:px-5 max-md:max-w-full">
        <div className="mt-5 text-5xl leading-[63.84px] text-emerald-950 max-md:max-w-full">
          The All-Inclusive Preventative Care Membership
        </div>
        <div className="mt-8 text-lg font-light tracking-normal leading-7 text-neutral-600 max-md:max-w-full">
          Supporting patients means being there for them when they need you.
          Whether through text, call, video-chat, or in-person, you’ll always be
          able to contact a member of your dedicated team.
        </div>
        <div className="flex-wrap content-center mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 max-md:mt-5 max-md:max-w-full">
                <div className="mt-3.5 flex flex-row items-center gap-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd51b4a01983fca3bf6ab4f987f0b36a384d9831a7bacddc538bc8ead436633b?"
                    className="w-6 aspect-square"
                  />
                  <div className="text-xl font-medium text-emerald-950 max-md:max-w-full">
                    24/7
                  </div>
                </div>
                <div className="mt-2.5 text-base tracking-normal capitalize text-neutral-600 max-md:max-w-full">
                  Get 24/7, on-demand care from your dedicated team.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 max-md:mt-5 max-md:max-w-full">
                <div className="mt-3.5 flex flex-row items-center gap-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eb66bbfdfb989806a02eba5d9e9c0ba5801a8a387aced891a7d5fb9f3d86d74?"
                    className="w-6 aspect-square"
                  />
                  <div className=" text-xl font-medium text-emerald-950 max-md:max-w-full">
                    HIPAA
                  </div>
                </div>
                <div className="mt-2.5 text-base tracking-normal capitalize text-neutral-600 max-md:max-w-full">
                  HIPAA-compliant Messaging & Zoom Meetings.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-wrap content-center mt-11 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 max-md:mt-5 max-md:max-w-full">
                <div className="mt-3.5 flex flex-row items-center gap-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cab6213f0c4d2fdeacc19e88b295f99fef320d99ad3ad892d15063b55ba861f8?"
                    className="w-6 aspect-square"
                  />
                  <div className="text-xl font-medium text-emerald-950 max-md:max-w-full">
                    Refills and renewals
                  </div>
                </div>
                <div className="mt-2.5 text-base tracking-normal capitalize text-neutral-600 max-md:max-w-full">
                  Request prescription refills and renewals.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 max-md:mt-5 max-md:max-w-full">
                <div className="mt-3.5 flex flex-row items-center gap-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e429e95df3cef482e63df7ec3d427eabdb96df824571b66878893e342de7174e?"
                    className="w-6 aspect-square"
                  />
                  <div className="text-xl font-medium text-emerald-950 max-md:max-w-full">
                    Access
                  </div>
                </div>
                <div className="mt-2.5 text-base tracking-normal capitalize text-neutral-600 max-md:max-w-full">
                  Easily access your medical records & Health Action Plan.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-11 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 pr-3.5 max-md:mt-10 max-md:max-w-full">
                <div className="mt-3.5 flex flex-row items-center gap-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdf8d2689568b96645ce038f4ce45cd95689788223352cef4afa24211eeeac30?"
                    className="w-6 aspect-square"
                  />
                  <div className="text-xl font-medium text-emerald-950 max-md:max-w-full">
                    Powered By Ai
                  </div>
                </div>
                <div className="mt-2.5 text-base tracking-normal capitalize text-neutral-600 max-md:max-w-full">
                  Free summarized medical journal articles, powered by AI.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 pr-3.5 max-md:mt-10 max-md:max-w-full">
                <div className="mt-3.5 flex flex-row items-center gap-2">
                  <img
                    loading="lazy"
                    src="https://i.postimg.cc/x8zh1VDX/Icon.png"
                    className="w-6 aspect-square"
                  />
                  <div className=" text-xl font-medium text-emerald-950 max-md:max-w-full">
                    A Team-Based Appoach
                  </div>
                </div>
                <div className="mt-2.5 text-base tracking-normal capitalize text-neutral-600 max-md:max-w-full">
                  All the Support You Need. All in One Place.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full ">
          <button className="flex flex-col p-0.5 mt-16 mb-5 max-w-full text-lg tracking-normal capitalize bg-gray-100 rounded-[100px] text-emerald-950 w-[153px] max-md:mt-10">
            <div className="justify-center w-full px-6 py-3.5 border border-white border-solid rounded-[100px] max-md:px-5">
              Learn More
            </div>
          </button>
        </div>
      </div>

      <section>
        <div className="flex justify-center items-center px-20 py-20 w-full rounded-3xl max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col my-5 w-full max-md:max-w-full">
            <div className="flex flex-col justify-center text-center leading-[150%] max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="text-5xl text-black max-md:max-w-full max-md:text-4xl">
                  Our Process
                </div>
                <div className="mt-8 text-lg font-light tracking-normal text-neutral-600 max-md:max-w-full">
                  Holistic care requires treating the whole patient. Not just
                  your symptoms.
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-8 max-md:max-w-full relative">
              <div className="max-md:max-w-full ">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center p-6 w-full bg-white rounded-3xl border border-solid border-neutral-200 max-md:px-5 max-md:mt-2.5 max-md:max-w-full">
                      <div className="flex justify-center items-center self-center p-1.5 rounded-2xl w-[52px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8e66f2acb259761ed18ed26a70002ae6bd2b27983c0d3033cecf677a063a278?apiKey=db678b7586ac404998e13a78e0473c5d&"
                          className="w-full aspect-square"
                        />
                      </div>
                      <div className="flex flex-col mt-6 text-center text-emerald-800 max-md:max-w-full">
                        <div className="text-xl font-medium max-md:max-w-full">
                          01 • Matching You With The Right Team{' '}
                        </div>
                        <div className="mt-4 text-lg font-light tracking-normal leading-7 max-md:max-w-full">
                          Exceptional healthcare is a team effort. We match you
                          with the right group of dedicated, independent
                          healthcare professionals to help you meet your goals.{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center p-6 w-full bg-white rounded-3xl border border-solid border-neutral-200 max-md:px-5 max-md:mt-2.5 max-md:max-w-full">
                      <div className="flex justify-center items-center self-center p-1.5 rounded-2xl w-[52px]">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9153188fb442c3c2651dca1de6fddaf5b88f858db2ab209d12efa2ea676c28dc?apiKey=db678b7586ac404998e13a78e0473c5d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9153188fb442c3c2651dca1de6fddaf5b88f858db2ab209d12efa2ea676c28dc?apiKey=db678b7586ac404998e13a78e0473c5d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9153188fb442c3c2651dca1de6fddaf5b88f858db2ab209d12efa2ea676c28dc?apiKey=db678b7586ac404998e13a78e0473c5d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9153188fb442c3c2651dca1de6fddaf5b88f858db2ab209d12efa2ea676c28dc?apiKey=db678b7586ac404998e13a78e0473c5d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9153188fb442c3c2651dca1de6fddaf5b88f858db2ab209d12efa2ea676c28dc?apiKey=db678b7586ac404998e13a78e0473c5d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9153188fb442c3c2651dca1de6fddaf5b88f858db2ab209d12efa2ea676c28dc?apiKey=db678b7586ac404998e13a78e0473c5d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9153188fb442c3c2651dca1de6fddaf5b88f858db2ab209d12efa2ea676c28dc?apiKey=db678b7586ac404998e13a78e0473c5d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9153188fb442c3c2651dca1de6fddaf5b88f858db2ab209d12efa2ea676c28dc?apiKey=db678b7586ac404998e13a78e0473c5d&"
                          className="w-full aspect-square"
                        />
                      </div>
                      <div className="flex flex-col mt-6 text-center text-emerald-800 max-md:max-w-full">
                        <div className="text-xl font-medium max-md:max-w-full">
                          02 • Getting to Know You and Your Goals{' '}
                        </div>
                        <div className="mt-4 text-lg font-light tracking-normal leading-7 max-md:max-w-full">
                          Healthcare professionals you’ll connect with through
                          Curate want treat the whole you--not just your
                          symptoms. This means understanding your mental,
                          physical, and emotional health goals.{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 relative">
                  <img
                    src="https://i.postimg.cc/nr2RzFSc/Logo-2.png"
                    className="w-[80px] absolute left-1/2 -top-2.5 max-md:hidden -translate-x-1/2 -translate-y-1/2"
                  />

                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center p-6 w-full bg-white rounded-3xl border border-solid border-neutral-200 max-md:px-5 max-md:mt-2.5 max-md:max-w-full">
                      <div className="flex flex-col justify-center self-center px-1.5 py-1.5 rounded-2xl w-[52px]">
                        <div className="flex justify-center items-center">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b5712c878afaec83e414252cee246fabb012cbf07c6c34f505aaf6415ec92c2?apiKey=db678b7586ac404998e13a78e0473c5d&"
                            className="w-full aspect-[0.98]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col px-3.5 py-1.5 mt-6 text-center text-emerald-800 max-md:max-w-full">
                        <div className="self-center text-xl font-medium max-md:max-w-full">
                          03 • Charting a Path That You Can Commit Too{' '}
                        </div>
                        <div className="mt-6 text-lg font-light tracking-normal leading-7 max-md:max-w-full">
                          At Curate, we recognize that patients--not
                          physicians-- are the most powerful providers of their
                          own health outcomes. Your commitment is a prerequisit
                          for success.{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center p-6 w-full bg-white rounded-3xl border border-solid border-neutral-200 max-md:px-5 max-md:mt-2.5 max-md:max-w-full">
                      <div className="flex justify-center items-center self-center p-1.5 rounded-2xl w-[52px]">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e3be05ce9d50740e2bd4878f91579758a2f715eeb3030d980e3701a09be97eb1?apiKey=db678b7586ac404998e13a78e0473c5d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3be05ce9d50740e2bd4878f91579758a2f715eeb3030d980e3701a09be97eb1?apiKey=db678b7586ac404998e13a78e0473c5d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3be05ce9d50740e2bd4878f91579758a2f715eeb3030d980e3701a09be97eb1?apiKey=db678b7586ac404998e13a78e0473c5d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3be05ce9d50740e2bd4878f91579758a2f715eeb3030d980e3701a09be97eb1?apiKey=db678b7586ac404998e13a78e0473c5d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3be05ce9d50740e2bd4878f91579758a2f715eeb3030d980e3701a09be97eb1?apiKey=db678b7586ac404998e13a78e0473c5d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3be05ce9d50740e2bd4878f91579758a2f715eeb3030d980e3701a09be97eb1?apiKey=db678b7586ac404998e13a78e0473c5d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3be05ce9d50740e2bd4878f91579758a2f715eeb3030d980e3701a09be97eb1?apiKey=db678b7586ac404998e13a78e0473c5d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3be05ce9d50740e2bd4878f91579758a2f715eeb3030d980e3701a09be97eb1?apiKey=db678b7586ac404998e13a78e0473c5d&"
                          className="w-full aspect-square"
                        />
                      </div>
                      <div className="flex flex-col px-2 py-1.5 mt-6 text-center text-emerald-800 max-md:max-w-full">
                        <div className="self-center text-xl font-medium">
                          04 • Test & Re-Calibrate
                        </div>
                        <div className="mt-8 text-lg font-light tracking-normal leading-7 max-md:max-w-full">
                          Whether you meet your goals as planned or need to
                          extend your timeline to achieve them, we’ll be there
                          to help you calibrate the right Health Action Plan.{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewSection />
      <HealthCareSection />
      <IntegratingSmartSection />
      <TheCurateMarketPlace />

      <StartJourneySection />
      <LatestNewsSection />
      <FAQSection />
      {/* <SubscribeSection title="Subscribe to our newsletter" description="Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet." /> */}
    </main>
  );
}
