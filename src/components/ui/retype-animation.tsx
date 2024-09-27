'use client';
import { TypeAnimation } from 'react-type-animation';

const RetypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Primary Care',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Dermatology',
        1000,
        'Dentistry',
        1000,
        'Physical Therapy',
        1000,
        'Wellness',
        1000,
      ]}
      speed={50}
      repeat={Infinity}
    />
  );
};
export default RetypeAnimation;
