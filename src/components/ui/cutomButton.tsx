import * as React from 'react';

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: 'white' | 'black';
}

const Button: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  className,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      className={`justify-center self-start px-12 py-6 mt-10 text-xl font-light leading-7 text-center uppercase rounded-2xl bg-[#04554A] text-neutral-100 max-md:px-6 ${type === 'white' ? '!bg-neutral-100 !text-neutral-800 border !border-neutral-800' : ''} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
