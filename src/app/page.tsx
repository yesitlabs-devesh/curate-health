// import LandingNavbar from "@/components/layouts/landing/landing-navbar";
import FAQSection from "@/sections/faq-section";
import LatestNewsSection from "@/sections/latest-news-section";
import CarouselSection from "@/sections/carousel-section";
import StartJourneySection from "@/sections/start-journey-section";
import { TypeAnimation } from 'react-type-animation';
import * as React from "react";
import ThreeDLogo from "@/components/ui/3d-logo";
import ReviewSection from "@/sections/review-section";
import Knowledgesection from "@/sections/knowledge-crouse-sec";
import Wellnesssection from "@/sections/wellness-journey-sec";
import HealthCareSection from "@/sections/health-care-section";
import IntegratingSmartSection from "@/sections/integrating-smart-section";
import TheCurateMarketPlace from "@/sections/the-curate-marketplace-section";
import ImageSliderSection from "@/sections/image-slider-section";
import RetypeAnimation from "@/components/ui/retype-animation";



interface CustomButtonProps {
  text: string;
  variant: "primary" | "secondary";
}


const CustomButton: React.FC<CustomButtonProps> = ({ text, variant }) => {
  const baseStyle =
    "flex flex-col justify-center p-0.5 rounded-[100px] text-lg border border-gray-500 border-1 ";
  const primaryStyle =
    "bg-[#04554A] text-white border-teal-700";
  const secondaryStyle =
    "bg-gray-100 text-emerald-950 border-gray-100";

  const className = `${baseStyle} ${variant === "primary" ? primaryStyle : secondaryStyle
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
                <div className="text-6xl leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px] heading-banner">
                  {/* Your Destination For Comprehensive */}
                  Your Destination for Support
                </div>
                <div className="flex gap-3 self-start pt-3 pb-0.5 text-6xl whitespace-nowrap leading-[71.92px] max-md:text-4xl">
                  <div className="font-instrument-sans flex-auto italic max-md:text-4xl">
                    <RetypeAnimation />
                  </div>
                  {/* <div className="shrink-0 my-auto w-1 h-11 bg-emerald-400 rounded-md" /> */}
                </div>
              </div>
              {/* <p className="justify-center py-1 mt-8 text-lg font-light tracking-normal leading-7 max-md:max-w-full">
                Complete All Your{" "}
                <span className="text-emerald-950">Essential Appointments</span> in
                the{" "}
                <span className="text-emerald-950">Same Location</span>, with{" "}
                <span className="text-emerald-950">Ongoing Support.</span> Then,
                Get Everything You Need to Implement Your{" "}
                <span className="text-emerald-950">Health Action Plan</span>{" "}
                through the <span className="text-emerald-950">Routine Center.</span>
              </p> */}
              <p className="justify-center py-1 mt-2 text-lg font-light tracking-normal leading-7 max-md:max-w-full">
                Curate is the{""}  <span className="text-emerald-950">leading digital health platform</span> for {""} Board-Certified Wellness Coaching, Care Navigation, and Patient Advocacy.
              </p>
              <div className="flex gap-2.5 mt-6 text-lg banner-bt-stble banner-btn-wpp">
                <CustomButton text="Find Your Health Coach" variant="secondary" />
                <CustomButton text="Explore the Routine Center" variant="primary" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-lg tracking-normal text-white capitalize max-md:mt-10 max-md:max-w-full">
              <div className="mx-auto max-w-full aspect-[0.98] w-[549px]">
                <img
                  loading="lazy"
                  src="extra-imgs/new-logo-updated.png"
                  alt="Main visual representation"
                  className="max-w-full object-contain aspect-[0.98] w-[549px]"
                />
                {/* <ThreeDLogo /> */}
                <div className="free-consultant-wpp-spapp">
                  {/* <CustomButton text="Free Consultation" variant="primary" /> */}
                  <button><img loading="lazy" src="extra-imgs/comment.png" alt="free consultant" /> Free Consultation</button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* <section className="">
        <div className="navigate-sec-banner px-20 py-3 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
          <div className="row align-items-center">

          </div>
        </div>
      </section> */}


      {/* NAVIGATE HEALTHCARE SEC */}

      <section className="px-20 flex justify-center items-center py-3 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full navigate-sec-banner">
        <div className="w-full m-auto max-md:my-10 max-md:max-w-full">
          <div className="flex gap-20 max-md:flex-col max-md:gap-0">
            <div className="flex-col w-[62%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch mt-1.5 text-lg max-md:mt-10 max-md:max-w-full">
                <h1>You Don’t Need to Navigate American Healthcare Alone</h1>
                <p className="">We imagine a future where every patient has access to a board-certified wellness coach that helps you achieve your holistic goals, set appointments with top specialists, and negotiate medical bills.</p>
                <div className="flex flex-col justify-center p-0.5 mt-6 max-w-full tracking-normal capitalize  text-emerald-950 w-[153px] max-md:mt-10">
                  <CustomButton text="Get Started" variant="secondary" />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
              {/* <img loading="lazy" src="https://i.postimg.cc/wT1g8ZH3/image-16.png" className="grow w-full aspect-[1.03] max-md:mt-10" /> */}
              <img loading="lazy" src="extra-imgs/navigate-img.png" className="" />
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATE HEALTHCARE SEC */}

      {/* /* APPROACH WELLNES SEC */}

      <section className="px-8 flex justify-center items-center py-3 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full approach-wellness-banner">
        <div className="w-full m-auto max-md:my-10 max-md:max-w-full">
          <div className="approcah-inner-wpp">
            <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
              {/* <img loading="lazy" src="https://i.postimg.cc/wT1g8ZH3/image-16.png" className="grow w-full aspect-[1.03] max-md:mt-10" /> */}
              <img loading="lazy" src="extra-imgs/approach-welness.png" className="" />
            </div>
            <div className="w-[50%]">
              <div className="flex flex-col self-stretch mt-1.5 text-lg max-md:mt-10 max-md:max-w-full">
                <h1>A Holistic and Data-Driven Approach To Wellness</h1>
                <p className="">At Curate, we believe in setting SMART (Specific, Measurable, Achievable, Relevant, and Time-Bound) goals that align within the context of a client’s everyday life.  By integrating with latest smart technology, our platform offers unique insights into how you might optimize your routines. </p>
                {/* <div className="flex flex-col justify-center p-0.5 mt-6 max-w-full tracking-normal capitalize bg-gray-100 rounded-[100px] text-emerald-950 w-[153px] max-md:mt-10">
                  <CustomButton text="Explore the Smart Shop" variant="secondary" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /* APPROACH WELLNES SEC */}

      {/* /* PROGRESS TECHNOLOGY SEC */}

      <section className="px-20 flex justify-center items-center py-3 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full technology-banner">
        <div className="w-full m-auto max-md:my-10 max-md:max-w-full">
          <div className="flex gap-20 max-md:flex-col max-md:gap-0">
            <div className="flex-col w-[62%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch mt-1.5 text-lg max-md:mt-10 max-md:max-w-full">
                <h1>Progress Aided by Best-In-Class Technology</h1>
                <p className="">Curate provides seamless access to best-in-class diagnostic tools and smart wearables, which can be integrated into your Curate Health Portal.  </p>
                <div className="flex flex-col justify-center p-0.5 mt-6 max-w-full tracking-normal capitalize bg-gray-100 rounded-[100px] text-emerald-950 w-[153px] max-md:mt-10">
                  <CustomButton text="Explore the Smart Shop" variant="secondary" />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
              {/* <img loading="lazy" src="https://i.postimg.cc/wT1g8ZH3/image-16.png" className="grow w-full aspect-[1.03] max-md:mt-10" /> */}
              <img loading="lazy" src="https://i.postimg.cc/wT1g8ZH3/image-16.png" className="" />
            </div>
          </div>
        </div>
      </section>

      {/* /* PROGRESS TECHNOLOGY SEC */}


      {/* WELNESS SEC */}


      <Wellnesssection />

      {/* WELNESS SEC */}


      <section>
        <div className="our-process-wp">
          <div className="">
            <div className="flex flex-col justify-center text-center leading-[150%] max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="text-5xl text-black max-md:max-w-full max-md:text-4xl our-process-heading">
                  <h1>Our Process</h1>
                </div>
                <div className="mt-8 text-lg font-light tracking-normal text-neutral-600 max-md:max-w-full our-process-para">
                  <p> Exceptional Care Requires a Holistic Approach</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-8 max-md:max-w-full relative">

              <div className="max-md:max-w-full ">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">

                  <div className="w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="process-box">
                      <div className="image-icon">
                        <img loading="lazy" src="extra-imgs/icon1.png" className="" />
                        <h3>01 • Matching You With The Right Coach</h3>
                      </div>
                      <div className="content-inner">
                        <p>We match you with a Board-Certified coach With Expertise In focus Areas Relevant to You. Explore dozens of profiles to find the perfect match for you. </p>
                      </div>
                    </div>
                  </div>


                  <div className="w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="process-box">
                      <div className="image-icon">
                        <img loading="lazy" src="extra-imgs/icon2.png" className="" />
                        <h3>02 • Getting to Know You and Your Goals </h3>
                      </div>
                      <div className="content-inner">
                        <p>Curate Coaches first gain a comprehensive understanding of your health profile. Then, They Work With You to Identify a Clear Vision of What Success Looks like to You.</p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>


              <div className="mt-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 relative">
                  <img src="https://i.postimg.cc/nr2RzFSc/Logo-2.png" className="w-[80px] absolute left-1/2 -top-2.5 max-md:hidden transform -translate-x-1/2 -translate-y-1/2 " />

                  <div className="w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="process-box">
                      <div className="image-icon">
                        <img loading="lazy" src="extra-imgs/icon3.png" className="" />
                        <h3>03 • Supporting You on a Path You Commit To</h3>
                      </div>
                      <div className="content-inner">
                        <p>we recognize that patients--not physicians-- are the most powerful providers of their own health outcomes. Creating an action plan that works in the context of your life is essential. </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="process-box">
                      <div className="image-icon">
                        <img loading="lazy" src="extra-imgs/icon4.png" className="" />
                        <h3>04 • Test & Re-Calibrate</h3>
                      </div>
                      <div className="content-inner">
                        <p>Whether you meet your goals as planned, decide to adjust them, or need to extend your timeline to achieve them, we’ll be there to help you calibrate the right Health Action Plan. </p>
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
      {/* <HealthCareSection /> */}
      <IntegratingSmartSection />
      <TheCurateMarketPlace />



      <StartJourneySection />
      <Knowledgesection />
      {/* <LatestNewsSection /> */}
      <FAQSection />
      {/* <SubscribeSection title="Subscribe to our newsletter" description="Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet." /> */}
    </main>
  );
}