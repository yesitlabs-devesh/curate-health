'use client';
import { useContext, useState } from 'react';
import * as React from 'react';
import Cart from './cart';
import Link from 'next/link';
import { CartContext } from '@/context/shopContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

// SmartShopComponent starts

const SmartShopComponent: React.FC = () => {
  const cardData = [
    {
      imgSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/23827aacec28b030726e33b2a2ea785a9ff8643dfe7e00ca66a61500d78d6981?apiKey=fac0b9adbf9c43738d3faaf142128124&',
      imgAlt: 'Devices and Diagnostics',
      title: 'Devices & Diagnostics',
      link: '/marketplace#smart-diagnostic-tools',
      subtitle:
        'Complete All Your Essential Appointments in the Same Location.',
    },
    {
      imgSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d2f99a64ebae9df4eb2c981625ddc792f25c4ec26855ed403d2e8c5bb4792051?apiKey=fac0b9adbf9c43738d3faaf142128124&',
      imgAlt: 'Smart Wearables',
      title: 'Smart Wearables',
      link: '/marketplace#smart-wearables',
      subtitle:
        'Complete All Your Essential Appointments in the Same Location.',
    },
  ];

  return (
    <div className="p-2 mt-1 bg-white rounded-xl border border-solid shadow-2xl border-emerald-950 border-opacity-10 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {cardData.map((card, index) => (
          <MenuCard key={index} section={card} />
        ))}
      </div>
    </div>
  );
};
// SmartShopComponent ends

type CurateSection = {
  link?: string;
  title: string;
  subtitle: string;
  imgSrc?: string;
};

const MenuCard: React.FC<{ section: CurateSection }> = ({ section }) => {
  return (
<div className="flex flex-col max-md:ml-0 max-md:w-full">
  <Link
    href={section?.link || ''}
    className="flex flex-col justify-center self-stretch p-3 my-auto w-full text-center rounded-lg max-md:mt-4 hover:bg-gray-100 active:bg-gray-200 min-w-[280px] max-w-[326px]"
  >
    {section.imgSrc ? (
      <div className="flex justify-center items-center px-4 max-md:px-3">
        <img
          loading="lazy"
          src={section.imgSrc}
          alt={`imgAlt`}
          className="max-w-[80px] w-full h-[40px] object-center object-contain"
        />
      </div>
    ) : null}
    
    {/* Title */}
    <div className="flex justify-center items-center px-3 py-1 text-sm font-semibold rounded-[100px] text-emerald-950 max-md:px-4">
      <div className="flex flex-col justify-center max-w-full">
        <div className="justify-center">{section.title}</div>
      </div>
    </div>

    {/* Subtitle */}
    <div className="flex flex-col justify-center px-3 mt-1 text-xs font-light rounded-[100px] text-neutral-600">
      <div className="flex flex-col justify-center">
        <div className="justify-center">{section.subtitle}</div>
      </div>
    </div>
  </Link>
</div>
  );
};

const CareMemeberships: React.FC = () => {
  const sections: CurateSection[] = [
    {
      title: 'Curate Beauty',
      link: '/not-ready',
      subtitle: 'Feel Confident In Your Skin and Smile.',
    },
    {
      title: 'Curate Health',
      link: '/not-ready',
      subtitle:
        'Complete All Your Essential Appointments in the Same Location.',
    },
    {
      title: 'Curate Fit',
      link: '/not-ready',
      subtitle:
        'Fitness & Nutritional Counseling in Coordination With Your Health Action.',
    },
  ];
  return (
    <div className="p-2 mt-1 bg-white rounded-xl border border-solid shadow-2xl border-emerald-950 border-opacity-10 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-2 max-md:flex-col max-md:gap-0">
        {sections.map((section, index) => (
          <MenuCard key={index} section={section} />
        ))}
      </div>
    </div>
  );
};

// MenuItem starts
type MenuItemProps = {
  menuItem: {
    label: string;
    link: string;
    component: React.ReactNode;
  };
};

const MenuItem: React.FC<MenuItemProps> = ({ menuItem }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
    setHovering(true);
  };
  const handleMouseLeave = () => setHovering(false);

  React.useEffect(() => {
    if (!hovering) {
      setIsOpen(false);
    }
  }, [hovering]);

  return (
    <div
      className="flex flex-col justify-center px-2.5 py-2 rounded-[100px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        onClick={toggleMenu}
        onMouseEnter={handleMouseEnter}
        className="flex gap-2.5 justify-center cursor-pointer"
      >
        <span className="justify-center">{menuItem.label}</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/850139a5fdd3090d15421126d551584d600c2ca702f1525b1d786df1fdc75a7e?apiKey=fac0b9adbf9c43738d3faaf142128124&"
          alt="altText"
          className="shrink-0 w-5 aspect-square"
        />
      </div>
      {isOpen && (
        <div className={`absolute top-full ${menuItem.label === "Discover" ? "" : "left-1/2"} -translate-x-1/2 z-50`}>
          {menuItem.component}
        </div>
      )}
    </div>
  );
};

type CategoryProps = {
  title: string;
  items: string[];
};

const Category: React.FC<CategoryProps> = ({ title, items }) => {
  return (
    <section className="flex flex-col justify-center">
      <h2 className="flex flex-col justify-center px-2.5 py-2 whitespace-nowrap rounded-[100px] text-emerald-950">
        {title}
      </h2>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center px-2.5 py-2 mt-2 rounded-lg text-emerald-950 text-opacity-50"
        >
          <p className="flex flex-col justify-center">
            <span className="justify-center">{item}</span>
          </p>
        </div>
      ))}
    </section>
  );
};

// RouteCenter starts
const RouteCenter: React.FC = () => {
  const categories = [
    { title: 'Fitness', items: ['Mobility', 'Strength', 'Endurance'] },
    {
      title: 'Recovery',
      items: ['Sleep', 'Heat, Cold, & Aromatherapy', 'Percussion Therapy'],
    },
    {
      title: 'Nutrition',
      items: ['Indoor Garden', 'Natural Supplements', 'Pre, Post-Workout'],
    },
    { title: 'Skin Care', items: ['Cleanse', 'Moisturize', 'Protect'] },
    { title: 'Oral Hygiene', items: ['Clean', 'Whiten', 'Protect'] },
  ];

  return (
    <div className="flex gap-4 justify-center self-start p-3 mt-2 text-sm bg-white rounded-lg border border-solid shadow-lg border-emerald-950 border-opacity-10 text-emerald-950 text-opacity-50 max-md:flex-wrap max-md:mt-6">
  {categories.map((category, index) => (
    <div key={index} className="flex flex-col justify-center">
      {/* Category Title */}
      <div className="flex flex-col justify-center px-2 py-1 rounded-full whitespace-nowrap text-emerald-950">
        <Link href="/catalog" className="flex justify-normal">
          <div className="text-center">{category.title}</div>
        </Link>
      </div>

      {/* Category Items */}
      {category.items.map((item, idx) => (
        <Link
          href="/catalog"
          key={idx}
          className="flex justify-normal hover:bg-gray-100 hover:text-black px-2 py-1 mt-1 rounded-md whitespace-nowrap"
        >
          <div className="text-center">{item}</div>
        </Link>
      ))}
    </div>
  ))}
</div>
  );
};

const DiscoverComponent = () => {
  const sections = [
    {
      title: 'Company',
      items: [
        { label: 'Vision', link: '/about-us' },
        { label: 'Careers', link: '/jobs' },
        { label: 'The Knowledge Center', link: '/knowledge-center' },
      ],
    },

    {
      title: 'Get In Touch',
      items: [
        { label: 'Become a Health Coach', link: '/become-a-coach' },
        { label: 'Primary Care Physicians', link: '/for-providers' },
        { label: 'Employers', link: '/for-employers' },
      ],
    },
  ];

  return (
    <div className="justify-center p-3 mt-2 bg-white rounded-lg border border-solid shadow-lg border-emerald-950 border-opacity-10 max-md:mt-6 max-md:max-w-full min-width-[400px]">
  <div className="flex gap-3 max-md:flex-col max-md:gap-2">
    {sections.map((section, index) => (
      <div
        key={index}
        className="flex flex-col ml-4 max-md:ml-0 max-md:w-full"
      >
        <div className="flex flex-col grow justify-start text-sm max-md:mt-3">
          {/* Title */}
          <div className="flex flex-col justify-center text-emerald-950">
            <div className="flex flex-col justify-center items-start px-2 py-1 rounded-lg max-md:pr-4">
              <div className="flex flex-col justify-center w-[120px]">
                <div className="text-left">{section.title}</div>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="flex flex-col justify-center text-emerald-950 text-opacity-50">
            {section.items.map((item, idx) => (
              <Link
                href={item.link || ''}
                key={idx}
                className="hover:bg-gray-100 hover:text-black flex flex-col justify-center items-start px-2 py-1 mt-1 rounded-md max-md:pr-4"
              >
                <div className="flex flex-col justify-center max-w-full">
                  <div className="text-center">{item.label}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

function LandingNavbar() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext) as any;
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const menuItems = [
    {
      label: 'Smart Shop',
      link: '/marketplace',
      component: <SmartShopComponent />,
    },
    {
      label: 'Routine Center',
      link: '/catalog',
      component: <RouteCenter />,
    },
    { label: 'Discover', link: '/discover', component: <DiscoverComponent /> },
  ];

  let cartQuantity = 0;
  cart.length > 0 &&
    cart?.map((item: any) => {
      return (cartQuantity += item?.variantQuantity);
    });
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="sticky top-0 left-0 z-20 border-b border-[#E6EAEA]">
      <header className="relative flex items-center px-5 py-2 w-full text-sm bg-[#FEFBF9] text-emerald-950 shadow-md">
        {/* Logo */}
        <Link href="/" className="shrink-0 z-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9116340201d41b865fcd9a1dfe89374047a6675ebccb411c0bf8231b9f2687fc?apiKey=fac0b9adbf9c43738d3faaf142128124&"
            alt="Company Logo"
            className="w-[100px] h-auto aspect-auto"
          />
        </Link>

        {/* Centered Navigation (Visible on larger screens) */}
        <nav className="hidden md:flex absolute inset-x-0 justify-center items-center z-0">
          <div className="flex gap-4">
            <Link
              href="/coaches"
              className="flex flex-col justify-center px-2.5 py-2 rounded-[100px] cursor-pointer"
            >
              Find Your Health Coach
            </Link>
            {menuItems.map((item, index) => (
              <MenuItem key={index} menuItem={item} />
            ))}
          </div>
        </nav>

        {/* Right Section */}
        <div className="ml-auto flex gap-3 items-center text-neutral-600 z-10">
          <Link
            href="/auth/login"
            className="px-4 py-1 border border-emerald-950 border-opacity-30 rounded-full hidden md:flex"
          >
            Sign Up / Log In
          </Link>

          {/* Cart Icon */}
          <div className="relative">
            <img
              onClick={toggleCart}
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/db90eef0381b398d24cdf13c8b471b3ba69873b83519f9f58f18fa311657468c?"
              className="w-6 h-6 cursor-pointer"
            />
            {cart.length > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-white text-black border border-black rounded-full flex items-center justify-center text-xs">
                {cart.length}
              </div>
            )}
          </div>

          {/* Wishlist Icon */}
          <Link href="/wishlist">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/97ab496ce075244c7fb99ad047b9de8a92526c61304e451ee2202bbfff7ea8b0?"
              className="w-6 h-6"
            />
          </Link>

          {/* Radix Dropdown for smaller screens */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="block md:hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/side-menu-icon?"
                  className="w-6 h-6 cursor-pointer"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <DropdownMenuItem>
                <Link href="/coaches">Find Your Health Coach</Link>
              </DropdownMenuItem>
              {menuItems.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <MenuItem menuItem={item} />
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem>
                <Link href="/auth/login">Sign Up / Log In</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Cart Overlay */}
      {cartOpen && (
        <div className="fixed inset-0 bg-[#00000078] z-50 flex justify-end items-start overflow-scroll">
          <div className="shadow-lg">
            <Cart cart={cart} />
          </div>
        </div>
      )}
    </div>
  );
}
export default LandingNavbar;
