'use client';
import { SetStateAction, useState } from 'react';
import '@radix-ui/themes/styles.css';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import * as Toggle from '@radix-ui/react-toggle';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { ToggleLeft } from 'lucide-react';

function CoachesPage() {
  const [selectedCertification, setSelectedCertification] = useState<
    string | null
  >(null);
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedMasterCoach, setSelectedMasterCoach] = useState<
    boolean | null
  >(null); // Boolean for toggle
  const [currentPage, setCurrentPage] = useState<number>(1);

  const coachesPerPage = 20;

  const mockData = [
    {
      id: '1',
      name: 'Kathleen Shoel',
      title: 'MS, RDN',
      rating: 4.96,
      state: 'Washington',
      certifications: [
        'National Board of Health and Wellness Coaching',
        'American Council on Exercise',
        'NASM Certified Nutrition Coach',
      ],
      approaches: ['Intuitive Eating', 'Research-Based', 'Sleep', 'Exercise'],
      description: 'adsfasfadf',
      bookingLink: 'https://www.google.com',
      packages: [
        {
          name: 'Initial Consultation',
          price: 150,
          duration: 60,
          description:
            'Initial consultation to discuss your health goals and create a plan to achieve them.',
        },
        {
          name: 'Follow-up Consultation',
          price: 100,
          duration: 30,
          description:
            'Follow-up consultation to check in on your progress and make any necessary adjustments.',
        },
      ],
      reviews: [
        {
          name: 'John Doe',
          rating: 5,
          review:
            'Kathleen is amazing! She helped me lose 20 pounds and keep it off. I highly recommend her services.',
          date: 'Jan 14, 2024',
        },
        {
          name: 'Jane Doe',
          rating: 4,
          review:
            'Kathleen is great! She helped me improve my eating habits and feel better overall.',
          date: 'Jan 14, 2024',
        },
      ],
    },
    {
      id: '2',
      name: 'Robert Smith',
      title: 'MD',
      rating: 4.98,
      state: 'California',
      certifications: [
        'National Board of Health and Wellness Coaching',
        'National Board of Health and Wellness Coaching (NNBHWC)',
      ],
      approaches: ['Intuitive Eating', 'Research-Based'],
      description: 'adsfasfadf',
      bookingLink: 'https://www.google.com',
      packages: [
        {
          name: 'Initial Consultation',
          price: 150,
          duration: 60,
          description:
            'Initial consultation to discuss your health goals and create a plan to achieve them.',
        },
      ],
      reviews: [
        {
          name: 'Jane Doe',
          rating: 4,
          review:
            'Kathleen is great! She helped me improve my eating habits and feel better overall.',
          date: 'Jan 14, 2024',
        },
      ],
    },
  ];

  // Extract unique certifications, concerns, and states from mockData
  const certifications = Array.from(
    new Set(mockData.flatMap((coach) => coach.certifications))
  );

  const concerns = Array.from(
    new Set(mockData.flatMap((coach) => coach.approaches))
  );

  const states = Array.from(new Set(mockData.map((coach) => coach.state)));

  // Create dropdownItems dynamically
  const dropdownItems = [
    {
      trigger: 'Certifications',
      items: certifications,
      setSelected: setSelectedCertification,
      selected: selectedCertification,
    },
    {
      trigger: 'Concerns',
      items: concerns,
      setSelected: setSelectedConcern,
      selected: selectedConcern,
    },
    {
      trigger: 'State',
      items: states,
      setSelected: setSelectedState,
      selected: selectedState,
    },
  ];

  const handleFilterSelect = (
    selected: string,
    setSelected: (value: SetStateAction<string | null>) => void,
    currentSelected: string | null
  ) => {
    setSelected(currentSelected === selected ? null : selected);
  };

  const filteredData = mockData.filter((coach) => {
    const matchesCertification = selectedCertification
      ? coach.certifications.includes(selectedCertification)
      : true;

    const matchesConcern = selectedConcern
      ? coach.approaches.includes(selectedConcern)
      : true;
    const matchesState = selectedState ? coach.state === selectedState : true;
    const matchesMasterCoach =
      selectedMasterCoach !== null
        ? selectedMasterCoach === coach.title.includes('Master')
        : true;

    return (
      matchesCertification &&
      matchesConcern &&
      matchesState &&
      matchesMasterCoach
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / coachesPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * coachesPerPage,
    currentPage * coachesPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      {/* Sticky Filter Bar */}
      <div className="fixed flex px-20 py-3 bg-[#FEFBF9] gap-4 max-md:flex-wrap max-md:px-5 shadow-md w-full">
        {dropdownItems.map((item) => (
          <div key={item.trigger} className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-2 py-1 text-xs font-medium text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition inline-flex items-center justify-center">
                  <span className="truncate max-w-[100px]">
                    {item.selected ? item.selected : item.trigger}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                {item.items.map((menuItem) => (
                  <DropdownMenuItem
                    key={menuItem}
                    className="px-2 py-1 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
                    onClick={() =>
                      handleFilterSelect(
                        menuItem,
                        item.setSelected,
                        item.selected
                      )
                    }
                  >
                    {menuItem}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}

        {/* Master Coach Toggle using Radix Toggle */}
        <Toggle.Root
          pressed={!!selectedMasterCoach}
          onPressedChange={(pressed) =>
            setSelectedMasterCoach(pressed ? true : null)
          }
          className={`px-2 py-1 text-xs font-medium text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 transition inline-flex items-center justify-center h-full ${
            selectedMasterCoach ? 'ring-2 ring-emerald-500' : ''
          }`}
          aria-label="Toggle Master Coach"
        >
          <span className="truncate max-w-[100px] flex">
            Master Coach <ToggleLeft className="pl-2 text-gray-400 h-4 w-4" />
          </span>
        </Toggle.Root>
      </div>

      {/* Coaches Section */}
      <section className="flex flex-col justify-center px-6 py-10 max-md:px-3 min-w-[600px] max-w-[756px] mx-auto">
        <header className="flex flex-col max-md:mt-6">
          <div className="text-3xl text-neutral-800 max-md:text-3xl text-center pb-4 mt-8">
            Find a Health Coach Near You
          </div>
          <div className="text-sm text-neutral-800 max-md:text-2xl text-center">
            Showing {paginatedData.length} of {filteredData.length} Coaches With
            Openings Soon.
          </div>
        </header>

        {/* Render Paginated Coaches */}
        {paginatedData.map((data) => (
          <section
            key={data.id}
            className="flex mt-6 flex-col p-6 bg-white rounded-[20px] max-md:px-3 min-w-[400px] max-w-[600px] mx-auto"
          >
            <div className="flex items-center space-x-2">
              <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
              <p className="text-xl text-neutral-800">
                <b>{data.name}</b>{' '}
                <span className="text-xs text-neutral-800 align-baseline">
                  {data.title}
                </span>
                <div className="flex items-center space-x-1 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="#056B5C"
                    viewBox="0 0 24 24"
                    stroke="none"
                  >
                    <path d="M12 .587l3.668 7.431L23.327 9.91l-5.659 5.514L19.762 23 12 19.425 4.238 23l2.094-7.576L.673 9.91l7.659-1.892L12 .587z" />
                  </svg>
                  <span className="font-bold text-xs text-neutral-800">
                    {data.rating}
                  </span>
                  <span className="text-xs text-neutral-500">
                    ({data.reviews.length})
                  </span>
                </div>
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-600 mt-3 ml-3">
                Certifications
              </p>
              <ul className="flex flex-wrap gap-1 ml-3">
                {data.certifications.map((certification) => (
                  <li
                    key={certification}
                    className="px-2 py-0.5 text-xs font-medium text-neutral-800 bg-[#036C5F26] rounded-full"
                  >
                    {certification}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-neutral-600 mt-3 ml-3">Focus Areas</p>
              <ul className="flex flex-wrap gap-1 ml-3">
                {data.approaches.map((approach) => (
                  <li
                    key={approach}
                    className="px-2 py-0.5 text-xs font-medium text-neutral-800 bg-[#036C5F26] rounded-full"
                  >
                    {approach}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Link href={`/coaches/${data.id}`}>
                <button className="px-2 py-1 mt-6 ml-3 text-xs text-white bg-[#056B5C] rounded-lg hover:bg-[#044d44] justify-end">
                  View Profile
                </button>
              </Link>
            </div>
          </section>
        ))}

        <Pagination className="mt-6">
          <PaginationContent>
            {/* Previous Button */}
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                className={
                  currentPage === 1 ? 'opacity-50 pointer-events-none' : ''
                }
              />
            </PaginationItem>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={page === currentPage}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            {/* Next Button */}
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
                className={
                  currentPage === totalPages
                    ? 'opacity-50 pointer-events-none'
                    : ''
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </div>
  );
}

export default CoachesPage;
