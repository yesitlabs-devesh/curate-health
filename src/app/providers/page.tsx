'use client';

import StartJourneySection from '@/sections/start-journey-section';
import FAQSection from '@/sections/faq-section';

import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <Slider {...settings}>
      <section>
        <div className="p-20 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="text-5xl leading-[64px] text-emerald-950 max-md:max-w-full">
                      Run Your Own Practice. Your Way.
                    </div>
                    <div className="mt-8 text-lg font-light tracking-normal leading-7 text-neutral-600 max-md:max-w-full">
                      Curate is dedicated to supporting physicians with the
                      tools they need to deliver exceptional care on their own
                      terms. <br />
                      <br />
                      You set Your patient load, rates, and hours. We just
                      provide the space, equipment, software, and supportive
                      ecosystem to ensure you thrive.{' '}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-16 max-w-full text-lg font-medium tracking-normal uppercase bg-gray-100 rounded-[100px] text-neutral-600 w-[168px] max-md:mt-10">
                    <div className="justify-center px-6 py-3.5 border border-solid border-emerald-950 border-opacity-30 rounded-[100px] max-md:px-5">
                      Get Started
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="shrink-0 self-stretch m-auto max-w-full bg-gray-100 rounded-3xl h-[600px] w-[620px] max-md:mt-10" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-20 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="shrink-0 self-stretch m-auto max-w-full bg-gray-100 rounded-3xl h-[600px] w-[620px] max-md:mt-10" />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="text-5xl leading-[64px] text-emerald-950 max-md:max-w-full">
                      Work Alongside Other Providers Dedicated To Truly Holistic
                      Care
                    </div>
                    <div className="mt-8 text-lg font-light tracking-normal leading-7 text-neutral-600 max-md:max-w-full">
                      Curate brings together top healthcare professionals from a
                      variety of specialties to best care for patient’s holisitc
                      care needs. Rather than sending someone across town for a
                      referral, you can have confidence that your patients will
                      receive excellent treatment from professionals you know
                      and trust.{' '}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-16 max-w-full text-lg font-medium tracking-normal uppercase bg-gray-100 rounded-[100px] text-neutral-600 w-[168px] max-md:mt-10">
                    <div className="justify-center px-6 py-3.5 border border-solid border-emerald-950 border-opacity-30 rounded-[100px] max-md:px-5">
                      Get Started
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="p-20 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="text-5xl leading-[63.84px] text-emerald-950 max-md:max-w-full">
                      A Community of Support
                    </div>
                    <div className="mt-8 text-lg font-light tracking-normal leading-7 text-neutral-600 max-md:max-w-full">
                      Curate is dedicated to cultivating a community of
                      empathetic healthcare professionals that{' '}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-16 max-w-full text-lg font-medium tracking-normal uppercase bg-gray-100 rounded-[100px] text-neutral-600 w-[168px] max-md:mt-10">
                    <div className="justify-center px-6 py-3.5 border border-solid border-emerald-950 border-opacity-30 rounded-[100px] max-md:px-5">
                      Get Started
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="shrink-0 self-stretch m-auto max-w-full bg-gray-100 rounded-3xl h-[600px] w-[620px] max-md:mt-10" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="p-20 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="shrink-0 self-stretch m-auto max-w-full bg-gray-100 rounded-3xl h-[600px] w-[620px] max-md:mt-10" />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <div className="text-5xl leading-[63.84px] text-emerald-950 max-md:max-w-full">
                      Providers platform feature 1
                    </div>
                    <div className="mt-8 text-lg font-light tracking-normal leading-7 text-neutral-600 max-md:max-w-full">
                      Lorem ipsum dolor sit amet, consectetur cdolor col
                      adipiscing elit. Integer mattis nunc augue vel lacinia
                      erat euismod ut. Sed eleifend tellus nonole tincidunt
                      aliquet. Fusce aliquam mi felis. Lorem ipsum dolor sit
                      amet, consectetur cdolor col adipiscing elit. Integer
                      mattis.
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetur cdolor col
                      adipiscing elit. Integer mattis nunc augue vel lacinia
                      erat euismod ut. Sed eleifend tellus nonole tincidunt
                      aliquet. Fusce aliquam mi felis. Lorem ipsum dolor sit
                      amet, consectetur cdolor col adipiscing elit. Integer
                      mattis.
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-16 max-w-full text-lg font-medium tracking-normal uppercase bg-gray-100 rounded-[100px] text-neutral-600 w-[168px] max-md:mt-10">
                    <div className="justify-center px-6 py-3.5 border border-solid border-emerald-950 border-opacity-30 rounded-[100px] max-md:px-5">
                      Get Started
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Slider>
  );
};

const Provider: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center pb-20 w-full max-md:max-w-full">
        <div className="flex flex-col justify-center self-center mt-48 mb-16 max-w-full w-[680px] max-md:my-10">
          <div className="flex flex-col justify-center max-md:max-w-full">
            <div className="flex flex-col justify-center text-center max-md:max-w-full">
              <div className="flex flex-col justify-center max-md:max-w-full">
                <div className="justify-center px-5 text-6xl leading-[72px] text-emerald-950 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                  Run Your Own Practice. Your Way.{' '}
                </div>
                <div className="items-start px-6 pt-1.5 pb-7 mt-8 text-lg font-light tracking-normal leading-7 text-neutral-600 max-md:px-5 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className="flex gap-2.5 self-center mt-16 text-lg font-medium tracking-normal uppercase max-md:mt-10">
              <div className="flex flex-col justify-center text-white bg-[#04554A] rounded-[100px]">
                <div className="justify-center px-6 py-3 bg-[#04554A] border border-white border-solid rounded-[100px] max-md:px-5 whitespace-nowrap ">
                  Join As Provider
                </div>
              </div>
              <div className="flex flex-col justify-center bg-gray-100 rounded-[100px] text-neutral-600">
                <div className="justify-center px-6 py-3 border border-solid border-emerald-950 border-opacity-30 rounded-[100px] max-md:px-5">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="p-20 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center p-0.5 w-full font-medium bg-gray-300 rounded-2xl max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col p-11 bg-white rounded-2xl border-4 border-gray-300 border-solid max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-col pb-20 text-emerald-800 max-md:max-w-full">
                    <div className="justify-center text-3xl tracking-wide capitalize max-md:max-w-full">
                      Traditional Healthcare
                    </div>
                    <div className="flex flex-col justify-center mt-6 mb-3 text-xl max-md:max-w-full">
                      <div className="flex flex-col justify-center mt-6 max-md:max-w-full">
                        <div className="flex flex-col justify-center max-md:max-w-full">
                          <div className="flex gap-3.5 max-md:flex-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98b69e4634a8444e3df78a948020609948e6092a35295c83c4d3d01f155ec1ba?apiKey=db678b7586ac404998e13a78e0473c5d&"
                              className="shrink-0 my-auto w-6 aspect-square"
                            />
                            <div className="flex-1 max-md:max-w-full">
                              You managing 10 different providers
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3.5 self-start mt-8">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98b69e4634a8444e3df78a948020609948e6092a35295c83c4d3d01f155ec1ba?apiKey=db678b7586ac404998e13a78e0473c5d&"
                            className="shrink-0 my-auto w-6 aspect-square"
                          />
                          <div>Endless calls, emails, forms</div>
                        </div>
                        <div className="flex gap-3.5 mt-8 max-md:flex-wrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98b69e4634a8444e3df78a948020609948e6092a35295c83c4d3d01f155ec1ba?apiKey=db678b7586ac404998e13a78e0473c5d&"
                            className="shrink-0 my-auto w-6 aspect-square"
                          />
                          <div className="flex-1 max-md:max-w-full">
                            You need to keep track of your health
                          </div>
                        </div>
                        <div className="flex gap-3.5 mt-8 max-md:flex-wrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98b69e4634a8444e3df78a948020609948e6092a35295c83c4d3d01f155ec1ba?apiKey=db678b7586ac404998e13a78e0473c5d&"
                            className="shrink-0 my-auto w-6 aspect-square"
                          />
                          <div className="flex-1 max-md:max-w-full">
                            You’re on your own year around
                          </div>
                        </div>
                        <div className="flex gap-3.5 mt-8 max-md:flex-wrap">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98b69e4634a8444e3df78a948020609948e6092a35295c83c4d3d01f155ec1ba?apiKey=db678b7586ac404998e13a78e0473c5d&"
                            className="shrink-0 my-auto w-6 aspect-square"
                          />
                          <div className="flex-1 max-md:max-w-full">
                            Rushed appointments
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-16 text-lg tracking-normal text-white uppercase whitespace-nowrap bg-gray-300 border border-emerald-700 border-solid rounded-[100px] max-md:mt-10 max-md:max-w-full">
                    <div className="justify-center text-center items-center px-6 py-3 bg-emerald-800 border border-white border-solid rounded-[100px] max-md:px-5 max-md:max-w-full">
                      BUTTON
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center p-0.5 w-full font-medium bg-[#3C3E44] rounded-2xl max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col grow justify-center p-11 bg-white rounded-2xl border-4 border-emerald-700 border-solid max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-col justify-center text-emerald-800 max-md:max-w-full">
                    <div className="justify-center text-3xl tracking-wide capitalize max-md:max-w-full">
                      Curated Care
                    </div>
                    <div className="flex flex-col justify-center mt-6 text-xl max-md:max-w-full">
                      <div className="flex flex-col justify-center mt-6 max-md:max-w-full">
                        <div className="flex flex-col justify-center max-md:max-w-full">
                          <div className="flex gap-3.5 max-md:flex-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/602fd826c555e77312427d7495c4cae232aa71c7aea99c2262c05f56c43debc4?apiKey=db678b7586ac404998e13a78e0473c5d&"
                              className="shrink-0 my-auto w-6 aspect-square"
                            />
                            <div className="flex-1 max-md:max-w-full">
                              Your own team of providers working together
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center mt-8 max-md:max-w-full">
                          <div className="flex flex-col justify-center max-md:max-w-full">
                            <div className="flex gap-3.5 max-md:flex-wrap">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/602fd826c555e77312427d7495c4cae232aa71c7aea99c2262c05f56c43debc4?apiKey=db678b7586ac404998e13a78e0473c5d&"
                                className="shrink-0 my-auto w-6 aspect-square"
                              />
                              <div className="flex-1 max-md:max-w-full">
                                All communications centralized via app
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center mt-8 max-md:max-w-full">
                          <div className="flex gap-3.5 max-md:flex-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/602fd826c555e77312427d7495c4cae232aa71c7aea99c2262c05f56c43debc4?apiKey=db678b7586ac404998e13a78e0473c5d&"
                              className="shrink-0 my-auto w-6 aspect-square"
                            />
                            <div className="flex-1 max-md:max-w-full">
                              Labs and tests done regularly
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center mt-8 max-md:max-w-full">
                          <div className="flex gap-3.5 max-md:flex-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/602fd826c555e77312427d7495c4cae232aa71c7aea99c2262c05f56c43debc4?apiKey=db678b7586ac404998e13a78e0473c5d&"
                              className="shrink-0 my-auto w-6 aspect-square"
                            />
                            <div className="flex-1 max-md:max-w-full">
                              Your favorite health devices integrated
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center mt-8 max-md:max-w-full">
                          <div className="flex gap-3.5 max-md:flex-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/602fd826c555e77312427d7495c4cae232aa71c7aea99c2262c05f56c43debc4?apiKey=db678b7586ac404998e13a78e0473c5d&"
                              className="shrink-0 my-auto w-6 aspect-square"
                            />
                            <div className="flex-1 max-md:max-w-full">
                              Pro-active 24/7 support{' '}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center mt-8 max-md:max-w-full">
                          <div className="flex gap-3.5 max-md:flex-wrap">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/602fd826c555e77312427d7495c4cae232aa71c7aea99c2262c05f56c43debc4?apiKey=db678b7586ac404998e13a78e0473c5d&"
                              className="shrink-0 my-auto w-6 aspect-square"
                            />
                            <div className="flex-1 max-md:max-w-full">
                              Same/next-day longer appointments
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center mt-16 text-lg tracking-normal text-white uppercase whitespace-nowrap bg-[#3C3E44] border border-emerald-700 border-solid rounded-[100px] max-md:mt-10 max-md:max-w-full">
                    <div className="justify-center text-center items-center px-6 py-3 bg-emerald-800 border border-white border-solid rounded-[100px] max-md:px-5 max-md:max-w-full">
                      BUTTON
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CarouselSection />
      <StartJourneySection />
      <div className="mt-20" />
      <FAQSection />
    </>
  );
};

export default Provider;
