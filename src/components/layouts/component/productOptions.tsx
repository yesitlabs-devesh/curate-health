'use client';
import { CartContext } from '@/context/shopContext';
import React, { useState, useContext } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface VariantEdge {
  node: SelectedVariant;
}
interface Variant {
  id: string;
  title: string;
  priceV2: {
    amount: string;
  };
}
interface Product {
  handle: string;
  title: string;
  description: string;
}

interface SelectedVariant {
  id: string;
  title: string;
  priceV2: {
    amount: string;
  };
  image?: {
    url: string;
  };
}

interface Props {
  product: Product;
  variants: {
    edges: VariantEdge[];
  };
  originalPrice: string;
}

type SizeSelectorProps = {
  label: string;
  options: string[];
};

const SizeSelector: React.FC<SizeSelectorProps> = ({ label, options }) => (
  <div className="flex flex-col grow justify-center whitespace-nowrap text-neutral-600">
    <label
      htmlFor={`${label.toLowerCase()}-select`}
      className="text-xl font-medium mb-5"
    >
      {label}
    </label>
    <Select>
      <SelectTrigger className="flex gap-5 px-5 py-6 text-lg font-light tracking-normal leading-7 bg-white rounded-xl border border-gray-100 border-solid">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
);

type ButtonProps = {
  text: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
};
const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  onClick = () => {},
}) => {
  const baseClasses =
    'flex flex-col flex-1 justify-center tracking-normal capitalize rounded-[100px]';
  const variantClasses =
    variant === 'primary'
      ? 'bg-emerald-900 text-white uppercase'
      : 'bg-gray-100 text-neutral-600';

  return (
    <button
      onClick={onClick}
      className={`justify-center items-center px-6 py-3.5 border border-solid ${variant === 'primary' ? 'bg-teal-700 border-[#519085]' : 'border-emerald-950 border-opacity-30'} rounded-[100px] max-md:px-5 ${baseClasses} ${variantClasses}`}
    >
      {text}
    </button>
  );
};

const ProductOptions: React.FC<Props> = ({
  product,
  variants,
  originalPrice,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<SelectedVariant>(
    variants.edges[0].node
  );

  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="flex flex-col max-md:max-w-full">
      <div className="mt-11 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <SizeSelector label="Size" options={['Small', 'Medium', 'Large']} />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <SizeSelector label="Color" options={['Black', 'Silver', 'Gold']} />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <SizeSelector
              label="Quantity"
              options={['1', '2', '3', '4', '5']}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-20 text-lg max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <Button
          onClick={() =>
            addToCart({
              id: selectedVariant.id,
              handle: product.handle,
              title: product.title,
              description: product.description,
              image: selectedVariant.image?.url,
              variantTitle: selectedVariant.title,
              variantPrice: parseFloat(selectedVariant.priceV2.amount),
              priceRange: {
                minVariantPrice: {
                  amount: originalPrice,
                },
              },
              variantQuantity: quantity,
            })
          }
          text="Add to Cart"
          variant="secondary"
        />
        <Button
          onClick={() => {
            addToCart({
              id: selectedVariant.id,
              handle: product.handle,
              title: product.title,
              description: product.description,
              image: selectedVariant.image?.url,
              variantTitle: selectedVariant.title,
              variantPrice: parseFloat(selectedVariant.priceV2.amount),
              priceRange: {
                minVariantPrice: {
                  amount: originalPrice,
                },
              },
              variantQuantity: quantity,
            });
            window.location.href = '/cart';
          }}
          text="Buy it now"
          variant="primary"
        />
      </div>
    </div>
  );
};

export default ProductOptions;
