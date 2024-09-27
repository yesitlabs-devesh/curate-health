// import ArticleCard from "@/components/ui/news-card";
import InfoSection from '@/sections/info-section';
import SubscribeSection from '@/sections/subscribe-section';
import * as React from 'react';

type CategoryButtonProps = {
  text: string;
  isActive?: boolean;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({
  text,
  isActive = false,
}) => (
  <button
    className={`px-6 py-2.5 rounded-[100px] text-xl leading-7 ${
      isActive
        ? 'bg-[#04554A] text-white'
        : 'bg-white text-stone-500 border border-solid border-stone-500 border-opacity-20'
    }`}
  >
    {text}
  </button>
);

type ArticleCardProps = {
  imageUrl: string;
  categories: string[];
  title: string;
  content: string;
  author: string;
  date: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageUrl,
  categories,
  title,
  content,
  author,
  date,
}) => (
  <a
    href="/news/1234"
    className="flex flex-col grow justify-center rounded-3xl leading-[140%] max-md:mt-10 max-md:max-w-full"
  >
    <img
      loading="lazy"
      src={imageUrl}
      alt=""
      className="w-full aspect-[2.22] max-md:max-w-full"
    />
    <div className="flex flex-col pt-6  rounded-none max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex flex-wrap gap-2.5 content-center self-start text-sm text-center text-emerald-700">
          {categories.map((category, index) => (
            <span
              key={index}
              className="justify-center px-2.5 py-1 rounded-[100px] bg-gray-200 color-black"
            >
              {category}
            </span>
          ))}
        </div>
        <h2 className="mt-5 text-3xl text-neutral-800 max-md:max-w-full">
          {title}
        </h2>
        <p className="mt-5 text-lg leading-6 text-stone-500 max-md:max-w-full">
          {content}
        </p>
        <div className="flex gap-2 justify-center items-center self-start mt-5 text-base">
          <div className="flex gap-2.5 self-stretch text-neutral-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eb6d1b549f73771a4e49ae5a7318e72e5cfea593eddf526cb9e5dce70f61621?apiKey=db678b7586ac404998e13a78e0473c5d&"
              alt=""
              className="shrink-0 w-9 aspect-square"
            />
            <span className="my-auto">{author}</span>
          </div>
          <div className="shrink-0 self-stretch my-auto bg-stone-500 h-[3px] rounded-[90px] w-[3px]" />
          <time className="self-stretch my-auto text-stone-500">{date}</time>
        </div>
      </div>
    </div>
  </a>
);

const News: React.FC = () => {
  const categories = [
    'All posts',
    'Lorem ipsum dolor',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
    'Lorem ipsum',
  ];

  const articles = [
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/4dc87fd45f68e82ba71a5b805fdbcc30019003e78c93b4d0db87d2a92cd4ecf9?apiKey=db678b7586ac404998e13a78e0473c5d&',
      categories: ['Lorem ipsum dolor', 'Lorem ipsum'],
      title: 'Lorem ipsum',
      content:
        'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum dolor sit amet.',
      author: 'Eva Korn',
      date: 'May 18, 2024',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/4dc87fd45f68e82ba71a5b805fdbcc30019003e78c93b4d0db87d2a92cd4ecf9?apiKey=db678b7586ac404998e13a78e0473c5d&',
      categories: ['Lorem ipsum dolor', 'Lorem ipsum'],
      title: 'Lorem ipsum',
      content:
        'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum dolor sit amet.',
      author: 'Eva Korn',
      date: 'May 18, 2024',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/65b800d53efda0e6a6efdf2a4958299ca4b7fa46e4ce32c3f0146251866b5fe0?apiKey=db678b7586ac404998e13a78e0473c5d&',
      categories: ['Lorem ipsum dolor', 'Lorem ipsum'],
      title: 'Lorem ipsum',
      content:
        'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum dolor sit amet.',
      author: 'Eva Korn',
      date: 'May 18, 2024',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/65b800d53efda0e6a6efdf2a4958299ca4b7fa46e4ce32c3f0146251866b5fe0?apiKey=db678b7586ac404998e13a78e0473c5d&',
      categories: ['Lorem ipsum dolor', 'Lorem ipsum'],
      title: 'Lorem ipsum',
      content:
        'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum dolor sit amet.',
      author: 'Eva Korn',
      date: 'May 18, 2024',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/f4c6164708e33a63a9ca76e4c23e9c92c011c0e9080475e2cdc12d8164e7ce57?apiKey=db678b7586ac404998e13a78e0473c5d&',
      categories: ['Lorem ipsum dolor', 'Lorem ipsum'],
      title: 'Lorem ipsum',
      content:
        'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum dolor sit amet.',
      author: 'Eva Korn',
      date: 'May 18, 2024',
    },
    {
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/f4c6164708e33a63a9ca76e4c23e9c92c011c0e9080475e2cdc12d8164e7ce57?apiKey=db678b7586ac404998e13a78e0473c5d&',
      categories: ['Lorem ipsum dolor', 'Lorem ipsum'],
      title: 'Lorem ipsum',
      content:
        'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum dolor sit amet.',
      author: 'Eva Korn',
      date: 'May 18, 2024',
    },
  ];
  return (
    <main className="flex flex-col self-stretch p-20 bg-stone-50 max-md:px-5">
      <a
        href="/news/1234"
        className=" flex overflow-hidden relative flex-col justify-center p-10 mt-2.5 min-h-[680px] mb-10 rounded-[40px] max-md:px-5 max-md:max-w-full"
      >
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mt-80 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center text-base leading-6 text-center whitespace-nowrap text-stone-500 w-[91px]">
            <div className="justify-center px-3.5 py-1.5 bg-white shadow-xl rounded-[100px]">
              Featured
            </div>
          </div>
          <div className="flex gap-0 justify-between mt-4 max-md:flex-wrap">
            <div className="flex flex-col flex-1 text-white max-md:max-w-full">
              <div className="text-6xl max-md:max-w-full max-md:text-4xl">
                Lorem ipsum
              </div>
              <div className="mt-4 text-xl leading-7 max-w-[900px] max-md:max-w-full">
                Ornare arcu dui vivamus arcu felis bibendum ut tristique et
                tortor condimentum lacinia quis vel eros laoreet id donec
                ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum
                dolor sit amet.
              </div>
            </div>
            <div className="flex justify-center items-center self-end p-2.5 mt-36 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/447c82a08f451886472af355c3b00d981eb2888a9e81ce9987af5ca412af6eb1?apiKey=db678b7586ac404998e13a78e0473c5d&"
                className="aspect-[3.23] fill-white w-[72px]"
              />
            </div>
          </div>
        </div>
      </a>
      <section className="flex flex-col mt-5 max-w-full w-full">
        <h1 className="text-5xl text-neutral-800 max-md:max-w-full max-md:text-4xl">
          Latest news
        </h1>
        <p className="mt-4 text-xl leading-7 text-stone-500 max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam.
        </p>
      </section>
      <nav className="flex flex-col flex-wrap pr-1.5 mt-10 text-xl leading-7 text-center text-stone-500 max-md:max-w-full">
        <div className="flex gap-2 max-md:flex-wrap">
          {categories.slice(0, 7).map((category, index) => (
            <CategoryButton
              key={index}
              text={category}
              isActive={index === 0}
            />
          ))}
        </div>
      </nav>
      <section className="flex-wrap content-start mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {articles.slice(0, 3).map((article, index) => (
            <div
              key={index}
              className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full"
            >
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </section>
      <section className="flex-wrap content-start mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {articles.slice(3, 6).map((article, index) => (
            <div
              key={index}
              className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full"
            >
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col items-center pt-10 mt-10 text-xl font-medium leading-7 text-center text-white uppercase max-md:px-5 max-md:max-w-full">
        <button className="justify-center items-center px-16 py-6 max-w-full bg-emerald-900 rounded-[120px] w-[324px] max-md:px-5">
          Show more
        </button>
      </div>
      <section className="flex flex-col justify-center py-20 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
        <div className="py-12 pl-10 mx-2.5 my-5 bg-[#04554A] rounded-[40px] max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <h2 className="text-6xl text-white max-md:max-w-full max-md:text-4xl">
                    Subscribe to CH newsletter
                  </h2>
                  <p className="mt-5 text-xl leading-7 text-stone-50 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur cdolor col
                    adipiscing elit. Integer mattis nunc augue vel lacinia erat
                    euismod ut. Sed eleifend tellus nonole tincidunt aliquet.
                  </p>
                </div>
                <form className="flex gap-5 w-full mt-10 text-xl leading-7 text-white whitespace-nowrap rounded-3xl max-md:flex-wrap max-md:max-w-full">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="justify-center flex-1 items-start px-5 py-3 bg-teal-800 max-w-[418px] rounded-[100px] max-md:max-w-full"
                  />
                  <button
                    type="submit"
                    className="justify-center items-center px-16 py-6 font-medium text-center uppercase bg-black rounded-[120px] max-md:px-5"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center items-start self-stretch max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://i.postimg.cc/CL4Gsnp8/logo-with-shadow.png"
                  alt="Newsletter illustration"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center pt-16 pb-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="mb-5 max-w-full w-full max-md:pr-5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="relative flex flex-col grow justify-center max-md:mt-10 pt-20  max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col items-end w-full min-h-[544px] max-md:pl-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://i.postimg.cc/3Rj46By7/Frame-1171275186-1.png"
                    alt="Background image"
                    className="w-full inset-0"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="flex flex-col max-md:max-w-full">
                    <h2 className="text-6xl text-[#222222] max-md:max-w-full max-md:text-4xl">
                      About Curate Health
                    </h2>
                    <p className="mt-5 text-xl leading-7 text-neutral-600 max-md:max-w-full">
                      Lorem ipsum dolor sit amet, consectetur cdolor col
                      adipiscing elit. Integer mattis nunc augue vel lacinia
                      erat euismod ut. Sed eleifend tellus nonole tincidunt
                      aliquet. Fusce aliquam mi felis. Lorem ipsum dolor sit
                      amet, consectetur cdolor col adipiscing elit. Integer
                      mattis.
                    </p>
                  </div>
                  <button className="justify-center items-center px-16 py-6 mt-10 max-w-full text-xl font-medium leading-7 text-center text-white uppercase bg-emerald-900 rounded-[120px] w-[312px] max-md:px-5">
                    Our story
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;
