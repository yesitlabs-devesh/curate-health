import * as React from 'react';
import LatestNewsSection from '@/sections/latest-news-section';
import StartJourneySection from '@/sections/start-journey-section';
import ImageSliderSection from '@/sections/image-slider-section';

// type TeamMemberProps = {
//   src: string;
//   name: string;
//   jobTitle: string;
// };

// const TeamMember: React.FC<TeamMemberProps> = ({ src, name, jobTitle }) => (
//   <div className="flex flex-col grow p-4 w-full rounded-2xl bg-neutral-100 max-md:mt-8">
//     <div className="flex justify-center items-center px-16 py-20 bg-white rounded-2xl max-md:px-5">
//       <img loading="lazy" src={src} className="aspect-[1.01] w-[70px]" alt={name} />
//     </div>
//     <div className="flex flex-col mt-4">
//       <div className="text-xl text-neutral-800">{name}</div>
//       <div className="mt-2 text-sm font-light text-neutral-500">{jobTitle}</div>
//     </div>
//   </div>
// );

// const Advisors: React.FC = () => (
//   <section className="flex-wrap content-start mt-16 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
//     <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//       {[
//         { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef20dfb0d2562e74071002235f5e63fe02d627169389f5eb8ac64cbd197dc328?apiKey=fac0b9adbf9c43738d3faaf142128124&", name: "Name", jobTitle: "Job title" },
//         { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a9ef1d1d0a030becbadcfd36a8210f8fb706f1afbf77b4176501b6171e9086f?apiKey=fac0b9adbf9c43738d3faaf142128124&", name: "Name", jobTitle: "Job title" },
//         { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8834bf18d1288124ba720a70aed32d8030387cfb30af8d26d597c715a8771e47?apiKey=fac0b9adbf9c43738d3faaf142128124&", name: "Name", jobTitle: "Job title" },
//       ].map((advisor, index) => (
//         <TeamMember key={index} {...advisor} />
//       ))}
//     </div>
//   </section>
// );

// const InvestorsAndPartners: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
//   <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
//     <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
//       <div className="flex flex-col max-md:max-w-full">
//         <h2 className="text-5xl text-neutral-800 max-md:max-w-full max-md:text-4xl">{title}</h2>
//         <p className="mt-4 text-base font-light leading-6 text-neutral-600 max-md:max-w-full">
//           Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit.
//         </p>
//       </div>
//       <div className="flex flex-col flex-wrap content-start mt-16 max-md:mt-10 max-md:max-w-full">
//         <div className="max-md:pr-5 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//             {items.slice(0, 3).map((src, index) => (
//               <img
//                 key={index}
//                 loading="lazy"
//                 src={src}
//                 className="shrink-0 max-w-full aspect-square  fill-white  w-[116px] max-md:mt-8"
//                 alt=""
//               />
//             ))}
//           </div>
//         </div>
//         <div className="mt-10 max-md:pr-5 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//             {items.slice(3).map((src, index) => (
//               <img
//                 key={index}
//                 loading="lazy"
//                 src={src}
//                 className="shrink-0 max-w-full aspect-square  fill-white  w-[116px] max-md:mt-8"
//                 alt=""
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// const values = [
//   { iconSrc: "http://b.io/icon_1", title: "First value", description: "Description for first value" },
//   { iconSrc: "http://b.io/icon_2", title: "Second value", description: "Description for second value" },
//   { iconSrc: "http://b.io/icon_3", title: "Third value", description: "Description for third value" },
// ];

type TeamMemberProps = {
  name: string;
  title: string;
  imageSrc: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, imageSrc }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow p-4 w-full bg-white rounded-3xl border border-gray-100 border-solid max-md:mt-5">
      <div className="flex flex-col justify-center">
        <img
          loading="lazy"
          src={imageSrc}
          className="w-full border border-gray-100 border-solid aspect-[1.1]"
          alt={`${name}, ${title}`}
        />
      </div>
      <div className="flex flex-col mt-4">
        <div className="text-xl font-medium text-zinc-900">{name}</div>
        <div className="mt-2.5 text-lg font-light tracking-normal leading-7 text-neutral-600">
          {title}
        </div>
      </div>
    </div>
  </div>
);

type BlogPostProps = {
  imageSrc: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
};

const BlogPost: React.FC<BlogPostProps> = ({
  imageSrc,
  title,
  excerpt,
  author,
  date,
}) => (
  <div className="flex flex-col justify-center">
    <div className="flex flex-col justify-center p-4 w-full bg-white rounded-3xl border border-gray-200 border-solid">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col">
          <img
            loading="lazy"
            src={imageSrc}
            className="w-full aspect-[1.22]"
            alt={title}
          />
          <div className="flex flex-col mt-4">
            <div className="flex gap-2.5 self-start text-sm font-medium tracking-normal leading-5 text-emerald-700 whitespace-nowrap">
              <div className="justify-center px-2.5 py-1 bg-teal-700 bg-opacity-10 rounded-[100px]">
                Tag
              </div>
              <div className="justify-center px-2.5 py-1 bg-teal-700 bg-opacity-10 rounded-[100px]">
                Tag
              </div>
            </div>
            <div className="flex flex-col mt-2.5">
              <h3 className="text-xl font-medium text-emerald-950">{title}</h3>
              <p className="mt-4 text-lg font-light tracking-normal leading-7 text-neutral-600">
                {excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3.5 pr-20 mt-8 font-medium max-md:pr-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3260d92a2cb53df80a113139bf478066598f8af21ad8f480cc71db0acff7da?apiKey=db678b7586ac404998e13a78e0473c5d&"
          className="shrink-0 border border-gray-100 border-solid aspect-square w-[42px]"
          alt={`${author}'s avatar`}
        />
        <div className="flex flex-col justify-center py-1">
          <div className="text-base text-neutral-800">{author}</div>
          <div className="mt-3.5 text-sm text-neutral-600">{date}</div>
        </div>
      </div>
    </div>
  </div>
);

export default function AboutUs() {
  return (
    <div>
      <main>
        <section className="flex flex-col justify-center px-16 py-20 w-full text-center max-md:px-5 max-md:max-w-full">
          <div className="flex justify-center items-center px-16 mx-5 mt-48 mb-32 max-md:px-5 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex flex-col justify-center max-w-full w-[587px]">
              <h1 className="justify-center text-6xl leading-[72px] text-emerald-950 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                Enabling Holistic Primary Care
              </h1>
              <p className="justify-center mt-8 text-lg font-light tracking-normal leading-7 text-neutral-600 max-md:max-w-full">
                All Your Preventative Care Needs. All in One Place.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center p-20 mt-5 w-full rounded-3xl max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-5 bg-white max-md:max-w-full">
            <h2 className="text-5xl leading-[72px] text-emerald-950 max-md:max-w-full max-md:text-4xl">
              Imagine a Better Preventative Care System
            </h2>
            <p className="justify-center mr-5 mt-3.5 text-lg font-light tracking-normal leading-7 text-neutral-600 max-md:pr-5 max-md:max-w-full">
              Curate is on a mission to fix the disjointed healthcare system by
              bringing together top preventative care specialists into the same
              clinic to help you reach your goals. Because exceptional
              healthcare is a team sport.
            </p>
          </div>
          <ImageSliderSection />

          {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa0fd6ac1d06884554c61ea2831246ca4faccb79de7c012607124fac191a36d6?apiKey=db678b7586ac404998e13a78e0473c5d&" className="mt-16 mb-5 w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full" alt="Preventative Care System Illustration" /> */}
        </section>
        <section className="flex flex-col pr-10 pb-20 pl-20 w-full rounded-3xl max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col justify-center max-w-full leading-[150%] max-w-[530px]">
            <div className="flex flex-col justify-center max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="text-5xl text-emerald-800 max-md:max-w-full max-md:text-4xl">
                  Our Beliefs
                </div>
                <div className="mt-8 text-lg font-light tracking-normal text-zinc-700 max-md:max-w-full">
                  Values Change. Beliefs Don’t.{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="pb-5 mt-16 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-6 py-4 w-full text-emerald-800 bg-white rounded-2xl border border-gray-300 border-solid shadow-sm max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9abfad3bca35319db5f7f65941c17bf950bd3ea8e1793cc39dfc8bdbb8980b6?apiKey=db678b7586ac404998e13a78e0473c5d&"
                    className="aspect-square w-[42px]"
                  />
                  <div className="mt-3.5 text-xl font-medium">
                    Already a member?
                  </div>
                  <div className="mt-3.5 text-lg font-light tracking-normal leading-7">
                    Contact us via email at patients@curatehealth.com or submit
                    your request via help portal.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-4 py-2.5 w-full text-emerald-800 bg-white rounded-2xl border border-gray-300 border-solid shadow-sm max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a993ae99c84688ea8bc3c384ab4d3ad9013f5451c4d9127005d576e9a57385ef?apiKey=db678b7586ac404998e13a78e0473c5d&"
                    className="aspect-square w-[42px]"
                  />
                  <div className="mt-5 text-xl font-medium">
                    Not a member yet?
                  </div>
                  <div className="mt-5 text-lg font-light tracking-normal leading-7">
                    We’re always here to help. Just message us via chat or drop
                    us a line at new@curatehealth.com
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-4 py-2.5 w-full text-emerald-800 bg-white rounded-2xl border border-gray-300 border-solid shadow-sm max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/65b3098c71607bd444319a468e27168bbac17cbd0939f00732e495f0e381c226?apiKey=db678b7586ac404998e13a78e0473c5d&"
                    className="aspect-square w-[42px]"
                  />
                  <div className="mt-5 text-xl font-medium">
                    Provider support
                  </div>
                  <div className="mt-5 text-lg font-light tracking-normal leading-7">
                    We’re always here to help. Just message us via chat or drop
                    us a line at provider@curatehealth.com
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-4 py-2.5 w-full text-emerald-800 bg-white rounded-2xl border border-gray-300 border-solid shadow-sm max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbc5c8b1f16a79405854db166d6fa6d0012109970431f39bd1c98d31cf77a727?apiKey=db678b7586ac404998e13a78e0473c5d&"
                    className="aspect-square w-[42px]"
                  />
                  <div className="mt-5 text-xl font-medium">Partnerships</div>
                  <div className="mt-5 text-lg font-light tracking-normal leading-7">
                    Let’s partner! Send your proposal to
                    partners@curatehealth.com
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="flex flex-col justify-center mt-5 w-full max-md:max-w-full">
          <div className="p-20 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center mt-5 leading-[150%] max-md:mt-10 max-md:max-w-full">
                  <h2 className="text-5xl text-emerald-950 max-md:max-w-full max-md:text-4xl">Our Beliefs</h2>
                  <p className="mt-8 text-lg font-light tracking-normal text-neutral-600 max-md:max-w-full">
                    Values Change. Beliefs Dont.
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-emerald-950 max-md:mt-10">
                          <h3 className="text-xl font-medium">Patient Empowerment</h3>
                          <p className="mt-5 text-lg font-light tracking-normal leading-7">
                            We recognize that patients--not physicians-- are the most powerful providers of their own health outcomes.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-emerald-950 max-md:mt-10">
                          <h3 className="text-xl font-medium">Healthcare is a Team Sport</h3>
                          <p className="mt-5 text-lg font-light tracking-normal leading-7">
                            Exceptional preventative care requires effective collaboration and alignment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-emerald-950 max-md:mt-10">
                          <h3 className="text-xl font-medium">Lead With Empathy</h3>
                          <p className="mt-5 text-lg font-light tracking-normal leading-7">
                            Empathy--not judgment--is the core of understanding. Without it, we will never achieve our goals.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-emerald-950 max-md:mt-10">
                          <h3 className="text-xl font-medium">Dare Greatly</h3>
                          <p className="mt-5 text-lg font-light tracking-normal leading-7">
                            Imagine the best possible future. Chart a path there. Summon the courage to execute.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="flex flex-col justify-center mt-5 w-full max-md:max-w-full">
          <div className="flex flex-col p-20 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col mt-5 max-md:max-w-full">
              <h2 className="text-5xl leading-[72px] text-emerald-950 max-md:max-w-full max-md:text-4xl">
                Our Team
              </h2>
              <p className="mt-8 text-lg font-light tracking-normal leading-7 text-neutral-600 max-md:max-w-full">
                Complete All Your Essential Appointments in the Same Location,
                with Ongoing Support. Then, Get Everything You Need to Implement
                Your Health Action Plan through the Routine Center.
              </p>
            </div>
            <div className="justify-center mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <TeamMember
                  name="Dr.Melissa Cusumano"
                  title="Asst. Medical Director, New York"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8ae9e2421c6fa83dd69c97b006dbd0c683dc9b3b27701c8d773904ce90774c49?apiKey=db678b7586ac404998e13a78e0473c5d&"
                />
                <TeamMember
                  name="Dr.Melissa Cusumano"
                  title="Asst. Medical Director, New York"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/83cbf3fe16cbaf147ae971c4bff488069067e10eeff8a36a41be6e3406633911?apiKey=db678b7586ac404998e13a78e0473c5d&"
                />
                <TeamMember
                  name="Dr.Melissa Cusumano"
                  title="Asst. Medical Director, New York"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/41af582de5096cacb3154cf4997dac85857f80ffbe2eb0f554152d244a043f91?apiKey=db678b7586ac404998e13a78e0473c5d&"
                />
              </div>
            </div>
            <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-5xl leading-[72px] text-emerald-950 max-md:max-w-full max-md:text-4xl">
                Advisors
              </h2>
              <p className="mt-8 text-lg font-light tracking-normal leading-7 text-neutral-600 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing
                elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed
                eleifend tellus nonole tincidunt aliquet.
              </p>
            </div>
            <div className="justify-center mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <TeamMember
                  name="Name"
                  title="Job Title"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/679d4b37c30addb0e674a190ba2edc23a3214383ec243b7474aee545c8668ce2?apiKey=db678b7586ac404998e13a78e0473c5d&"
                />
                <TeamMember
                  name="Name"
                  title="Job Title"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/419f51a15b8347152c932b758ba9ccc77cf3c4cce2f06aa53102e3b766f873cd?apiKey=db678b7586ac404998e13a78e0473c5d&"
                />
                <TeamMember
                  name="Name"
                  title="Job Title"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/aa215ab0ef4009253a235bc9f6afc5c2369f76c193fda0365044507f2e289bf0?apiKey=db678b7586ac404998e13a78e0473c5d&"
                />
              </div>
            </div>
            <div className="justify-center mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <TeamMember
                  name="Name"
                  title="Job Title"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/52eb09e5b4d62d03acbab0cc3a1ce86ea24eb482880a895cbdf045e1b8bbb00c?apiKey=db678b7586ac404998e13a78e0473c5d&"
                />
                <TeamMember
                  name="Name"
                  title="Job Title"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3e387e1e93d23d1266d63cb44433b37c893bdbfe6c817602b22e3a781a3951ea?apiKey=db678b7586ac404998e13a78e0473c5d&"
                />
                <TeamMember
                  name="Name"
                  title="Job Title"
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7a595ac97a7ceeb48bae612afce85d3c2837af2d561c727e73a19dd4d3b14372?apiKey=db678b7586ac404998e13a78e0473c5d&"
                />
              </div>
            </div>
          </div>
        </section>
        <StartJourneySection />
        <LatestNewsSection />
      </main>
      {/* <section className="flex flex-col justify-center px-12 py-20 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="shrink-0 mx-auto max-w-full bg-white rounded-2xl h-[499px] w-[571px] max-md:mt-10"></div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <h2 className="text-5xl text-neutral-800 max-md:max-w-full max-md:text-4xl">Mission statement goes here</h2>
                  <p className="mt-4 text-base font-light leading-6 text-neutral-600 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat
                    euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center px-14 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <h2 className="text-5xl text-neutral-800 max-md:max-w-full max-md:text-4xl">
              Taking care of your health
              <br />
              shouldn’t be difficult
            </h2>
            <div className="flex gap-0 mt-6 text-base font-light leading-6 text-neutral-600 max-md:flex-wrap">
              {Array(2).fill(
                <p className="justify-center max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat
                  euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis. Lorem ipsum dolor sit amet,
                  consectetur cdolor col adipiscing elit. Integer mattis.
                </p>
              )}
            </div>
          </div>
          <div className="shrink-0 mt-12 rounded-2xl bg-neutral-100 h-[516px] max-md:mt-10 max-md:max-w-full"></div>
        </div>
      </section>
      <section className="flex flex-col px-14 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[605px]">
            <h2 className="text-5xl text-neutral-800 max-md:max-w-full max-md:text-4xl">Our team</h2>
            <p className="mt-4 text-base font-light leading-6 text-neutral-600 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod
              ut. Sed eleifend tellus nonole tincidunt aliquet.
            </p>
          </div>
          <div className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap -mx-2">
              {[
                { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=32", name: "Name", jobTitle: "Job title" },
                { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=33", name: "Name", jobTitle: "Job title" },
                { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=34", name: "Name", jobTitle: "Job title" },
                { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=32", name: "Name", jobTitle: "Job title" },
                { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=33", name: "Name", jobTitle: "Job title" },
                { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=34", name: "Name", jobTitle: "Job title" },
                { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=35", name: "Name", jobTitle: "Job title" },
              ].map((member, index) => (
                <div key={index} className="w-full md:w-1/4 px-2 mb-4">
                  <TeamMember {...member} />
                </div>
              ))}
              <div className="w-full md:w-1/4 px-2 mb-4">
                <div className="flex flex-col grow justify-between p-4 w-full rounded-2xl bg-neutral-100 max-md:mt-8">
                  <div className="flex flex-col">
                    <h3 className="text-2xl text-neutral-800">Join our team</h3>
                    <p className="mt-3 text-sm font-light text-neutral-500">
                      Join our team and contribute to our mission of creating something amazing together. Explore our open positions
                      and take the first step towards a rewarding career.
                    </p>
                  </div>
                  <button className="justify-center px-14 py-4 mt-28 text-xs leading-4 text-center text-white uppercase rounded-xl bg-[#04554A] max-md:px-5 max-md:mt-10">
                    SEE open jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-16 max-w-full w-[605px] max-md:mt-10">
            <h2 className="text-5xl text-neutral-800 max-md:max-w-full max-md:text-4xl">Advisors</h2>
            <p className="mt-4 text-base font-light leading-6 text-neutral-600 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod
              ut. Sed eleifend tellus nonole tincidunt aliquet.
            </p>
          </div>
          <Advisors />
        </div>
      </section>
      
      <div className="flex gap-5 max-md:flex-col mb-10">
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <InvestorsAndPartners title="Investors" items={["https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=26", "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=27", "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=28", "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=29", "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=30", "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=31"]} />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <InvestorsAndPartners title="Partners" items={["https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=32", "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=33", "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=34", "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=35", "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=36", "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd1889a23b41e16bed27dd1adfdeb3f17e4a82f2f2ce9d48b4c3d75e01272c8?apiKey=fac0b9adbf9c43738d3faaf142128124&test=37"]} />
        </div>
      </div> */}
    </div>
  );
}
