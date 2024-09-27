import { SVGProps } from 'react-html-props';

const UserCog = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M10.6663 14V12.6667C10.6663 11.9594 10.3854 11.2811 9.88529 10.781C9.3852 10.281 8.70692 10 7.99967 10H3.99967C3.29243 10 2.61415 10.281 2.11406 10.781C1.61396 11.2811 1.33301 11.9594 1.33301 12.6667V14M12.6663 8.66667C13.4027 8.66667 13.9997 8.06971 13.9997 7.33333C13.9997 6.59695 13.4027 6 12.6663 6M12.6663 8.66667C11.93 8.66667 11.333 8.06971 11.333 7.33333C11.333 6.59695 11.93 6 12.6663 6M12.6663 8.66667V9.33333M12.6663 6V5.33333M14.3997 6.33333L13.8197 6.66667M11.513 8L10.933 8.33333M14.3997 8.33333L13.8197 8M11.513 6.66667L10.933 6.33333M8.66634 4.66667C8.66634 6.13943 7.47243 7.33333 5.99967 7.33333C4.52692 7.33333 3.33301 6.13943 3.33301 4.66667C3.33301 3.19391 4.52692 2 5.99967 2C7.47243 2 8.66634 3.19391 8.66634 4.66667Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserCog;
