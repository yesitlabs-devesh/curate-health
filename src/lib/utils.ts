import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getApiUrl = () => {
  // Ensure the environment variable is set
  const baseUrl = process.env.API_URL || 'http://localhost:3000';
  if (!baseUrl) {
    console.error('NEXT_PUBLIC_API_URL is not defined');
    return ''; // Return a default or an error as per your error handling strategy
  }
  return baseUrl;
};

export const getBillingApiUrl = () => {
  // Ensure the environment variable is set
  const baseUrl = process.env.API_BILLING_URL || 'http://localhost:3001';
  if (!baseUrl) {
    console.error('NEXT_PUBLIC_API_URL is not defined');
    return ''; // Return a default or an error as per your error handling strategy
  }
  return baseUrl;
};
