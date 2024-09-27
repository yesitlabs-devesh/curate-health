'use client';
import { useParams } from 'next/navigation';

const CoachProfilePage = () => {
  const mockData = [
    {
      id: '1',
      name: 'Kathleen Shoel',
      title: 'MS, RDN',
      rating: 4.96,
      certifications: [
        'National Board of Health and Wellness Coaching',
        'American Council on Exercise',
        'NASM Certified Nutrition Coach',
        'National Board of Health and Wellness Coaching (NNBHWC)',
      ],
      approaches: ['Intuitive Eating', 'Research-Based', 'Sleep', 'Exercise'],
      description: 'adsfasfadffadslfajdskfahdskf',
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
      certifications: [
        'National Board of Health and Wellness Coaching',
        'American Council on Exercise',
        'NASM Certified Nutrition Coach',
        'National Board of Health and Wellness Coaching (NNBHWC)',
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
  const params = useParams();
  const { id } = params;

  // Find the coach by ID from the mock data
  const coach = mockData.find((coach: any) => coach.id === id);

  if (!coach) return <p>Coach not found</p>;

  return (
    <section className="flex my-6 flex-col p-4 bg-white rounded-[20px] max-md:px-3 max-md:max-w-full min-w-[400px] max-w-[600px] mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-20 h-20 bg-gray-300 rounded-full !aspect-square relative shrink-0"></div>
          <div>
            <p className="text-xl text-neutral-800">
              <b>{coach.name}</b>{' '}
              <span className="text-xs text-neutral-800 align-baseline break-words tracking-wide">
                {coach.title}
              </span>
            </p>
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
                {coach.rating}
              </span>
              <span className="text-xs text-neutral-500">
                ({coach.reviews.length})
              </span>
            </div>
          </div>
        </div>

        {/* Right-aligned section */}
        <div className="flex flex-col items-end text-right">
          <button className="px-2 py-1 mt-2 text-xs text-white bg-[#056B5C] rounded-lg hover:bg-[#044d44] justify-end">
            Book A Free Consultation
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mt-2">
        <h3 className="text-base font-semibold">
          About {coach.name.split(' ')[0]}
        </h3>
        <p className="mt-1 text-xs text-neutral-600">{coach.description}</p>
      </div>

      {/* Certifications */}
      <div className="mt-2">
        <h3 className="text-xs font-semibold">Certifications</h3>
        <ul className="flex flex-wrap gap-1">
          {coach.certifications.map((cert: any) => (
            <li
              key={cert}
              className="px-1.5 py-0.5 text-xs font-medium bg-[#036C5F26] rounded-full"
            >
              {cert}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-2">
        <h3 className="text-xs font-semibold">Focus Areas</h3>
        <ul className="flex flex-wrap gap-1">
          {coach.approaches.map((approach: any) => (
            <li
              key={approach}
              className="px-1.5 py-0.5 text-xs font-medium bg-[#036C5F26] rounded-full"
            >
              {approach}
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-t border-gray-300 my-4" />

      {/* Packages */}
      <div>
        <h3 className="text-base font-semibold">Packages</h3>
        <div className="mt-2 flex gap-2 overflow-x-auto flex-nowrap scrollbar-hide">
          {coach.packages.map((pkg: any) => (
            <div
              key={pkg.name}
              className="w-48 bg-white shadow rounded-lg p-2 shrink-0"
            >
              <p className="font-semibold">{pkg.name}</p>
              <p className="text-xs text-neutral-600 mt-1">{pkg.description}</p>
              <p className="text-xs text-neutral-600 mt-1">
                Price: ${pkg.price}
              </p>
              <p className="text-xs text-neutral-600">
                Duration: {pkg.duration} minutes
              </p>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-gray-300 my-4" />

      {/* Reviews */}
      <div>
        <h3 className="pb-0.5 text-base font-semibold mb-3">Reviews</h3>
        {coach.reviews.map((review: any) => {
          const stars = [];
          for (let i = 0; i < review.rating; i++) {
            stars.push(
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="#056B5C"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 .587l3.668 7.431L23.327 9.91l-5.659 5.514L19.762 23 12 19.425 4.238 23l2.094-7.576L.673 9.91l7.659-1.892L12 .587z" />
              </svg>
            );
          }
          return (
            <div key={review.name}>
              <div className="flex items-center space-x-1 mb-1 mt-4">
                {stars}
              </div>
              <p className="text-xs font-semibold mb-1">{review.name}</p>
              <p className="text-xs text-neutral-600 mb-1">{review.review}</p>
              <p className="text-xs text-neutral-500">{review.date}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoachProfilePage;
