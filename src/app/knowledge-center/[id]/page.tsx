import * as React from 'react';
import ArticleCard from '@/components/ui/news-card';
import SubscribeSection from '@/sections/subscribe-section';

const articles = [
  {
    id: 1,
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/6d433f55579c878067e36d5c755b90e4805d73523f76651b057a1cbb8faf44ac?apiKey=7e71f959147546008f8b100259363c93&',
    tags: ['Lorem ipsum dolor', 'Lorem ipsum dolor'],
    heading: 'Lorem ipsum',
    description:
      'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum dolor sit amet.',
  },
  {
    id: 2,
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/37dc27b26cf316cac2c3069a2c4799c4d6647e861d6b4eaf3324392dc3c69f1e?apiKey=7e71f959147546008f8b100259363c93&',
    tags: ['Lorem ipsum dolor', 'Lorem ipsum dolor'],
    heading: 'Lorem ipsum',
    description:
      'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum dolor sit amet.',
  },
  {
    id: 1,
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/6d433f55579c878067e36d5c755b90e4805d73523f76651b057a1cbb8faf44ac?apiKey=7e71f959147546008f8b100259363c93&',
    tags: ['Lorem ipsum dolor', 'Lorem ipsum dolor'],
    heading: 'Lorem ipsum',
    description:
      'Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor condimentum lacinia quis vel eros laoreet id donec ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum dolor sit amet.',
  },
];

interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const LabelledInput: React.FC<{
  id: string;
  type?: string;
  placeholder?: string;
}> = ({ id, type = 'text', placeholder }) => (
  <>
    <label htmlFor={id} className="sr-only">
      {placeholder}
    </label>
    <input
      className="label"
      type={type}
      id={id}
      placeholder={placeholder}
      aria-label={placeholder}
    />
  </>
);

function NewsDetails() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-stone-50">
        <div className="flex flex-col justify-center px-20 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col justify-center p-10 mt-2.5 text-white min-h-[680px] rounded-[40px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2850f21a8e07189d677614296a29de4380c67975fb5e3a4dcd621073de50110?apiKey=db678b7586ac404998e13a78e0473c5d&"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col justify-center mt-72 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="text-6xl max-md:max-w-full max-md:text-4xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </div>
                <div className="mt-4 text-xl leading-7 max-w-[900px] max-md:max-w-full">
                  Ornare arcu dui vivamus arcu felis bibendum ut tristique et
                  tortor condimentum lacinia quis vel eros laoreet id donec
                  ultrices tincidunt arcu id donec ultrices tincidunt arcu ipsum
                  dolor sit amet.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-16 py-20 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
          <div className="mx-2.5 my-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl text-neutral-800 max-md:max-w-full max-md:text-4xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </div>
                  <div className="mt-8 text-lg leading-6 text-neutral-400 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                    <br />
                    <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                  <div className="mt-8 text-lg leading-6 text-neutral-400 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Elementum nisi quis eleifend quam. Massa id neque
                    aliquam vestibulum. Condimentum mattis pellentesque id nibh
                    tortor id aliquet lectus proin. Tincidunt tortor aliquam
                    nulla facilisi cras fermentum. Ridiculus mus mauris vitae
                    ultricies leo integer. Urna nec tincidunt praesent semper
                    feugiat nibh sed pulvinar. Quis blandit turpis cursus in hac
                    habitasse. Ut sem viverra aliquet eget sit amet. Facilisi
                    cras fermentum odio eu feugiat pretium nibh ipsum consequat.
                    Orci dapibus ultrices in iaculis nunc. Pretium aenean
                    pharetra magna ac placerat vestibulum lectus mauris
                    ultrices. Erat velit scelerisque in dictum non consectetur a
                    erat nam. Neque egestas congue quisque egestas diam in arcu
                    cursus. Elit scelerisque mauris pellentesque pulvinar
                    pellentesque. Lorem sed risus ultricies tristique nulla
                    aliquet enim tortor at. Eu non diam phasellus vestibulum
                    lorem sed risus ultricies. Cursus mattis molestie a iaculis
                    at erat. Cras adipiscing enim eu turpis egestas pretium
                    aenean pharetra magna. Et netus et malesuada fames ac turpis
                    egestas maecenas.
                    <br />
                    <br />
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium vulputate sapien nec. Habitasse platea dictumst
                    vestibulum rhoncus. Pretium viverra suspendisse potenti
                    nullam ac tortor vitae purus. Aenean pharetra magna ac
                    placerat vestibulum lectus mauris ultrices eros. Elit ut
                    aliquam purus sit amet luctus venenatis lectus magna. Cursus
                    mattis molestie a iaculis at erat pellentesque adipiscing
                    commodo. Sem integer vitae justo eget magna fermentum
                    iaculis eu. Lobortis feugiat vivamus at augue eget arcu.{' '}
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f88692e22b2d4a2d347687ad2e8714cc649302d9dcb34fa0c840b0f18f670b89?apiKey=db678b7586ac404998e13a78e0473c5d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f88692e22b2d4a2d347687ad2e8714cc649302d9dcb34fa0c840b0f18f670b89?apiKey=db678b7586ac404998e13a78e0473c5d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f88692e22b2d4a2d347687ad2e8714cc649302d9dcb34fa0c840b0f18f670b89?apiKey=db678b7586ac404998e13a78e0473c5d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f88692e22b2d4a2d347687ad2e8714cc649302d9dcb34fa0c840b0f18f670b89?apiKey=db678b7586ac404998e13a78e0473c5d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f88692e22b2d4a2d347687ad2e8714cc649302d9dcb34fa0c840b0f18f670b89?apiKey=db678b7586ac404998e13a78e0473c5d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f88692e22b2d4a2d347687ad2e8714cc649302d9dcb34fa0c840b0f18f670b89?apiKey=db678b7586ac404998e13a78e0473c5d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f88692e22b2d4a2d347687ad2e8714cc649302d9dcb34fa0c840b0f18f670b89?apiKey=db678b7586ac404998e13a78e0473c5d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f88692e22b2d4a2d347687ad2e8714cc649302d9dcb34fa0c840b0f18f670b89?apiKey=db678b7586ac404998e13a78e0473c5d&"
                    className="mt-8 w-full aspect-[1.64] max-md:max-w-full"
                  />
                  <div className="flex flex-col pt-10 mt-8 max-md:max-w-full">
                    <div className="text-5xl text-neutral-800 max-md:max-w-full max-md:text-4xl">
                      Id aliquet risus feugiat
                    </div>
                    <div className="mt-5 text-lg leading-6 text-neutral-400 max-md:max-w-full">
                      Fringilla ut morbi tincidunt augue interdum velit euismod.
                      Risus in hendrerit gravida rutrum quisque. Scelerisque
                      varius morbi enim nunc. Odio tempor orci dapibus ultrices
                      in iaculis nunc sed. Suspendisse sed nisi lacus sed
                      viverra tellus in. Ante in nibh mauris cursus mattis
                      molestie a. Tristique nulla aliquet enim tortor at auctor
                      urna. In cursus turpis massa tincidunt dui. Lorem ipsum
                      dolor sit amet consectetur adipiscing elit. Tellus
                      elementum sagittis vitae et leo duis ut diam. Arcu felis
                      bibendum ut tristique et. Mi tempus imperdiet nulla
                      malesuada pellentesque elit eget gravida.
                      <br />
                      <br />
                      Id aliquet risus feugiat in ante metus. Eget mauris
                      pharetra et ultrices neque ornare aenean euismod. Cras
                      tincidunt lobortis feugiat vivamus at augue eget arcu.
                      Aliquet porttitor lacus luctus accumsan tortor posuere ac
                      ut. Adipiscing bibendum est ultricies integer quis auctor.
                      Sit amet risus nullam eget felis. Risus nullam eget felis
                      eget nunc lobortis mattis aliquam faucibus. Quam id leo in
                      vitae. Sodales neque sodales ut etiam. Elit scelerisque
                      mauris pellentesque pulvinar pellentesque habitant morbi
                      tristique senectus. Mollis aliquam ut porttitor leo.
                      Sapien pellentesque habitant morbi tristique senectus et.
                      Vel pharetra vel turpis nunc. Duis at tellus at urna
                      condimentum.
                      <br />
                      <br />
                      Ut eu sem integer vitae justo eget magna fermentum. Odio
                      eu feugiat pretium nibh. Adipiscing enim eu turpis egestas
                      pretium aenean pharetra. Pellentesque diam volutpat
                      commodo sed. Tortor pretium viverra suspendisse potenti
                      nullam ac tortor. Ante metus dictum at tempor commodo.
                      Velit scelerisque in dictum non. Ipsum nunc aliquet
                      bibendum enim facilisis gravida. Aliquam nulla facilisi
                      cras fermentum odio. At elementum eu facilisis sed odio
                      morbi quis commodo odio. Eu ultrices vitae auctor eu
                      augue.
                      <br />
                      <br />
                      Fringilla ut morbi tincidunt augue interdum velit euismod.
                      Risus in hendrerit gravida rutrum quisque. Scelerisque
                      varius morbi enim nunc. Odio tempor orci dapibus ultrices
                      in iaculis nunc sed. Suspendisse sed nisi lacus sed
                      viverra tellus in. Ante in nibh mauris cursus mattis
                      molestie a. Tristique nulla aliquet enim tortor at auctor
                      urna. In cursus turpis massa tincidunt dui. Lorem ipsum
                      dolor sit amet consectetur adipiscing elit. Tellus
                      elementum sagittis vitae et leo duis ut diam. Arcu felis
                      bibendum ut tristique et. Mi tempus imperdiet nulla
                      malesuada pellentesque elit eget gravida.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch pb-20 max-md:mt-10">
                  <div className="flex flex-col justify-center w-full bg-white rounded-3xl">
                    <div className="flex gap-0">
                      <div className="flex flex-col justify-center items-start p-2.5 rounded-3xl max-md:pr-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8785f58434dc2aa64ae5e4af69952c5d655e9676ffa1bf021abf1c4ff0ee7c11?apiKey=db678b7586ac404998e13a78e0473c5d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8785f58434dc2aa64ae5e4af69952c5d655e9676ffa1bf021abf1c4ff0ee7c11?apiKey=db678b7586ac404998e13a78e0473c5d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8785f58434dc2aa64ae5e4af69952c5d655e9676ffa1bf021abf1c4ff0ee7c11?apiKey=db678b7586ac404998e13a78e0473c5d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8785f58434dc2aa64ae5e4af69952c5d655e9676ffa1bf021abf1c4ff0ee7c11?apiKey=db678b7586ac404998e13a78e0473c5d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8785f58434dc2aa64ae5e4af69952c5d655e9676ffa1bf021abf1c4ff0ee7c11?apiKey=db678b7586ac404998e13a78e0473c5d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8785f58434dc2aa64ae5e4af69952c5d655e9676ffa1bf021abf1c4ff0ee7c11?apiKey=db678b7586ac404998e13a78e0473c5d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8785f58434dc2aa64ae5e4af69952c5d655e9676ffa1bf021abf1c4ff0ee7c11?apiKey=db678b7586ac404998e13a78e0473c5d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8785f58434dc2aa64ae5e4af69952c5d655e9676ffa1bf021abf1c4ff0ee7c11?apiKey=db678b7586ac404998e13a78e0473c5d&"
                          className="w-20 aspect-square"
                        />
                      </div>
                      <div className="flex flex-col justify-center px-5 py-2.5 text-sm text-stone-500">
                        <div>May 18, 2024</div>
                        <div className="mt-2.5 text-2xl text-neutral-800">
                          Eva Korn
                        </div>
                        <div className="mt-2.5">Job title</div>
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between p-5 w-full">
                      <div className="justify-center my-auto text-2xl whitespace-nowrap text-neutral-800">
                        Share
                      </div>
                      <div className="flex gap-4">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/34dc2da6578f1fe69fb8b81e98808998b53e775da0fcbc848612716a41299442?apiKey=db678b7586ac404998e13a78e0473c5d&"
                          className="shrink-0 aspect-square w-[46px]"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1635442bb5c0ed46b57109a16811ac5ad4c3d642c6f6b93113dca18de356b62b?apiKey=db678b7586ac404998e13a78e0473c5d&"
                          className="shrink-0 aspect-square w-[46px]"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d8cab87a00aa29ea1309a5c3fdc21c3947d6bb998c800f4dd72e294c093bffc?apiKey=db678b7586ac404998e13a78e0473c5d&"
                          className="shrink-0 aspect-square w-[46px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-16 py-20 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
          <div className="justify-center self-start mt-5 text-6xl text-neutral-800 max-md:max-w-full max-md:text-4xl">
            Similar articles
          </div>
          <div className="flex-wrap content-start mt-10 mb-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center rounded-3xl leading-[140%] max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff2c2a9c1bf034727737eb973e9f6b1e42bc87e0d58e509532668920bfa3c4ea?apiKey=db678b7586ac404998e13a78e0473c5d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff2c2a9c1bf034727737eb973e9f6b1e42bc87e0d58e509532668920bfa3c4ea?apiKey=db678b7586ac404998e13a78e0473c5d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff2c2a9c1bf034727737eb973e9f6b1e42bc87e0d58e509532668920bfa3c4ea?apiKey=db678b7586ac404998e13a78e0473c5d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff2c2a9c1bf034727737eb973e9f6b1e42bc87e0d58e509532668920bfa3c4ea?apiKey=db678b7586ac404998e13a78e0473c5d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff2c2a9c1bf034727737eb973e9f6b1e42bc87e0d58e509532668920bfa3c4ea?apiKey=db678b7586ac404998e13a78e0473c5d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff2c2a9c1bf034727737eb973e9f6b1e42bc87e0d58e509532668920bfa3c4ea?apiKey=db678b7586ac404998e13a78e0473c5d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff2c2a9c1bf034727737eb973e9f6b1e42bc87e0d58e509532668920bfa3c4ea?apiKey=db678b7586ac404998e13a78e0473c5d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff2c2a9c1bf034727737eb973e9f6b1e42bc87e0d58e509532668920bfa3c4ea?apiKey=db678b7586ac404998e13a78e0473c5d&"
                    className="w-full aspect-[1.45]"
                  />
                  <div className="flex flex-col pt-6 rounded-none bg-white bg-opacity-0">
                    <div className="flex flex-col">
                      <div className="flex flex-wrap gap-2.5 content-center text-sm text-center text-emerald-700">
                        <div className="justify-center px-2.5 py-1 rounded-[100px]  bg-gray-200 color-black">
                          Lorem ipsum dolor
                        </div>
                        <div className="justify-center px-2.5 py-1 rounded-[100px]  bg-gray-200 color-black">
                          Lorem ipsum
                        </div>
                      </div>
                      <div className="mt-5 text-3xl text-neutral-800">
                        Lorem ipsum
                      </div>
                      <div className="mt-5 text-lg leading-6 text-stone-500">
                        Ornare arcu dui vivamus arcu felis bibendum ut tristique
                        et tortor condimentum lacinia quis vel eros laoreet id
                        donec ultrices tincidunt arcu id donec ultrices
                        tincidunt arcu ipsum dolor sit amet.
                      </div>
                      <div className="flex gap-2  items-center mt-5 text-base justify-start">
                        <div className="flex gap-2.5 self-stretch text-neutral-800">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dd50b23551ae44b66f6bb8eaa8d38bc8ce50625efbf7030c1668bad0f910d99f?apiKey=db678b7586ac404998e13a78e0473c5d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd50b23551ae44b66f6bb8eaa8d38bc8ce50625efbf7030c1668bad0f910d99f?apiKey=db678b7586ac404998e13a78e0473c5d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd50b23551ae44b66f6bb8eaa8d38bc8ce50625efbf7030c1668bad0f910d99f?apiKey=db678b7586ac404998e13a78e0473c5d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd50b23551ae44b66f6bb8eaa8d38bc8ce50625efbf7030c1668bad0f910d99f?apiKey=db678b7586ac404998e13a78e0473c5d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd50b23551ae44b66f6bb8eaa8d38bc8ce50625efbf7030c1668bad0f910d99f?apiKey=db678b7586ac404998e13a78e0473c5d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd50b23551ae44b66f6bb8eaa8d38bc8ce50625efbf7030c1668bad0f910d99f?apiKey=db678b7586ac404998e13a78e0473c5d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd50b23551ae44b66f6bb8eaa8d38bc8ce50625efbf7030c1668bad0f910d99f?apiKey=db678b7586ac404998e13a78e0473c5d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd50b23551ae44b66f6bb8eaa8d38bc8ce50625efbf7030c1668bad0f910d99f?apiKey=db678b7586ac404998e13a78e0473c5d&"
                            className="shrink-0 w-9 aspect-square"
                          />
                          <div className="my-auto">Eva Korn</div>
                        </div>
                        <div className="shrink-0 self-stretch my-auto bg-stone-500 h-[3px] rounded-[90px] w-[3px]" />
                        <div className="self-stretch my-auto text-stone-500">
                          May 18, 2024
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center rounded-3xl leading-[140%] max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d651d17df4794704e7a270263b4f7f230f7312666aa21cf46655a1f6858b0d25?apiKey=db678b7586ac404998e13a78e0473c5d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d651d17df4794704e7a270263b4f7f230f7312666aa21cf46655a1f6858b0d25?apiKey=db678b7586ac404998e13a78e0473c5d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d651d17df4794704e7a270263b4f7f230f7312666aa21cf46655a1f6858b0d25?apiKey=db678b7586ac404998e13a78e0473c5d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d651d17df4794704e7a270263b4f7f230f7312666aa21cf46655a1f6858b0d25?apiKey=db678b7586ac404998e13a78e0473c5d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d651d17df4794704e7a270263b4f7f230f7312666aa21cf46655a1f6858b0d25?apiKey=db678b7586ac404998e13a78e0473c5d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d651d17df4794704e7a270263b4f7f230f7312666aa21cf46655a1f6858b0d25?apiKey=db678b7586ac404998e13a78e0473c5d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d651d17df4794704e7a270263b4f7f230f7312666aa21cf46655a1f6858b0d25?apiKey=db678b7586ac404998e13a78e0473c5d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d651d17df4794704e7a270263b4f7f230f7312666aa21cf46655a1f6858b0d25?apiKey=db678b7586ac404998e13a78e0473c5d&"
                    className="w-full aspect-[1.45]"
                  />
                  <div className="flex flex-col pt-6 rounded-none bg-white bg-opacity-0">
                    <div className="flex flex-col">
                      <div className="flex flex-wrap gap-2.5 content-center text-sm text-center text-emerald-700">
                        <div className="justify-center px-2.5 py-1 rounded-[100px]  bg-gray-200 color-black">
                          Lorem ipsum dolor
                        </div>
                        <div className="justify-center px-2.5 py-1 rounded-[100px]  bg-gray-200 color-black">
                          Lorem ipsum
                        </div>
                      </div>
                      <div className="mt-5 text-3xl text-neutral-800">
                        Lorem ipsum
                      </div>
                      <div className="mt-5 text-lg leading-6 text-stone-500">
                        Ornare arcu dui vivamus arcu felis bibendum ut tristique
                        et tortor condimentum lacinia quis vel eros laoreet id
                        donec ultrices tincidunt arcu id donec ultrices
                        tincidunt arcu ipsum dolor sit amet.
                      </div>
                      <div className="flex gap-2  items-center mt-5 text-base justify-start">
                        <div className="flex gap-2.5 self-stretch text-neutral-800">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/044181ac36c8d2f157e31809e37965c9258665d7f41e72f320ad0f94868b73ea?apiKey=db678b7586ac404998e13a78e0473c5d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/044181ac36c8d2f157e31809e37965c9258665d7f41e72f320ad0f94868b73ea?apiKey=db678b7586ac404998e13a78e0473c5d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/044181ac36c8d2f157e31809e37965c9258665d7f41e72f320ad0f94868b73ea?apiKey=db678b7586ac404998e13a78e0473c5d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/044181ac36c8d2f157e31809e37965c9258665d7f41e72f320ad0f94868b73ea?apiKey=db678b7586ac404998e13a78e0473c5d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/044181ac36c8d2f157e31809e37965c9258665d7f41e72f320ad0f94868b73ea?apiKey=db678b7586ac404998e13a78e0473c5d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/044181ac36c8d2f157e31809e37965c9258665d7f41e72f320ad0f94868b73ea?apiKey=db678b7586ac404998e13a78e0473c5d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/044181ac36c8d2f157e31809e37965c9258665d7f41e72f320ad0f94868b73ea?apiKey=db678b7586ac404998e13a78e0473c5d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/044181ac36c8d2f157e31809e37965c9258665d7f41e72f320ad0f94868b73ea?apiKey=db678b7586ac404998e13a78e0473c5d&"
                            className="shrink-0 w-9 aspect-square"
                          />
                          <div className="my-auto">Eva Korn</div>
                        </div>
                        <div className="shrink-0 self-stretch my-auto bg-stone-500 h-[3px] rounded-[90px] w-[3px]" />
                        <div className="self-stretch my-auto text-stone-500">
                          May 18, 2024
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center rounded-3xl leading-[140%] max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf93028c0754d0cb4493ab90e32f6625155061f761e5cb9302bb058599bf9fec?apiKey=db678b7586ac404998e13a78e0473c5d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf93028c0754d0cb4493ab90e32f6625155061f761e5cb9302bb058599bf9fec?apiKey=db678b7586ac404998e13a78e0473c5d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf93028c0754d0cb4493ab90e32f6625155061f761e5cb9302bb058599bf9fec?apiKey=db678b7586ac404998e13a78e0473c5d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf93028c0754d0cb4493ab90e32f6625155061f761e5cb9302bb058599bf9fec?apiKey=db678b7586ac404998e13a78e0473c5d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf93028c0754d0cb4493ab90e32f6625155061f761e5cb9302bb058599bf9fec?apiKey=db678b7586ac404998e13a78e0473c5d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf93028c0754d0cb4493ab90e32f6625155061f761e5cb9302bb058599bf9fec?apiKey=db678b7586ac404998e13a78e0473c5d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf93028c0754d0cb4493ab90e32f6625155061f761e5cb9302bb058599bf9fec?apiKey=db678b7586ac404998e13a78e0473c5d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf93028c0754d0cb4493ab90e32f6625155061f761e5cb9302bb058599bf9fec?apiKey=db678b7586ac404998e13a78e0473c5d&"
                    className="w-full aspect-[1.45]"
                  />
                  <div className="flex flex-col pt-6 rounded-none bg-white bg-opacity-0">
                    <div className="flex flex-col">
                      <div className="flex flex-wrap gap-2.5 content-center text-sm text-center text-emerald-700">
                        <div className="justify-center px-2.5 py-1 rounded-[100px]  bg-gray-200 color-black">
                          Lorem ipsum dolor
                        </div>
                        <div className="justify-center px-2.5 py-1 rounded-[100px]  bg-gray-200 color-black">
                          Lorem ipsum
                        </div>
                      </div>
                      <div className="mt-5 text-3xl text-neutral-800">
                        Lorem ipsum
                      </div>
                      <div className="mt-5 text-lg leading-6 text-stone-500">
                        Ornare arcu dui vivamus arcu felis bibendum ut tristique
                        et tortor condimentum lacinia quis vel eros laoreet id
                        donec ultrices tincidunt arcu id donec ultrices
                        tincidunt arcu ipsum dolor sit amet.
                      </div>
                      <div className="flex gap-2  items-center mt-5 text-base justify-start">
                        <div className="flex gap-2.5 self-stretch text-neutral-800">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ee3caa5984979c6305e5405d5a5f3cf5b49f0052c213373e268d9f39e811f1ad?apiKey=db678b7586ac404998e13a78e0473c5d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee3caa5984979c6305e5405d5a5f3cf5b49f0052c213373e268d9f39e811f1ad?apiKey=db678b7586ac404998e13a78e0473c5d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee3caa5984979c6305e5405d5a5f3cf5b49f0052c213373e268d9f39e811f1ad?apiKey=db678b7586ac404998e13a78e0473c5d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee3caa5984979c6305e5405d5a5f3cf5b49f0052c213373e268d9f39e811f1ad?apiKey=db678b7586ac404998e13a78e0473c5d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee3caa5984979c6305e5405d5a5f3cf5b49f0052c213373e268d9f39e811f1ad?apiKey=db678b7586ac404998e13a78e0473c5d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee3caa5984979c6305e5405d5a5f3cf5b49f0052c213373e268d9f39e811f1ad?apiKey=db678b7586ac404998e13a78e0473c5d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee3caa5984979c6305e5405d5a5f3cf5b49f0052c213373e268d9f39e811f1ad?apiKey=db678b7586ac404998e13a78e0473c5d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee3caa5984979c6305e5405d5a5f3cf5b49f0052c213373e268d9f39e811f1ad?apiKey=db678b7586ac404998e13a78e0473c5d&"
                            className="shrink-0 w-9 aspect-square"
                          />
                          <div className="my-auto">Eva Korn</div>
                        </div>
                        <div className="shrink-0 self-stretch my-auto bg-stone-500 h-[3px] rounded-[90px] w-[3px]" />
                        <div className="self-stretch my-auto text-stone-500">
                          May 18, 2024
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col justify-center px-16 py-20 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/36c66e2a35f03be73d46a5df419ca582943c71675b3e63924a6caa43c06401e6?apiKey=db678b7586ac404998e13a78e0473c5d&"
                  alt="Newsletter illustration"
                  className="w-full aspect-[1.27]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <SubscribeSection title="Subscribe to CH newsletter" description="Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. " /> */}
    </div>
  );
}

export default NewsDetails;
