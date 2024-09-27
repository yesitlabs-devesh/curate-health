'use client';
import { createContext, useState, useEffect, ReactNode } from 'react';
import { createCheckout, updateCheckout } from '../lib/shopify';

// Define interfaces for cart item and context values
interface CartItem {
  id: string;
  title: string;
  description: string;
  handle: string;
  variantTitle?: string;
  variantQuantity: number;
  variantPrice: number;
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
  options?: {
    name: string;
    value: string;
  }[];
  image?: string;
  images?: {
    edges: {
      node: {
        url: string;
        altText: string | null;
      };
    }[];
  };
}

interface CartContextValue {
  cart: CartItem[];
  whishlist: CartItem[];
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (addedItem: CartItem) => Promise<any>;
  addToWhishlist: (addedItem: CartItem) => Promise<any>;
  checkoutUrl: string;
  removeCartItem: (itemToRemove: string) => Promise<void>;
  removeWishItem: (itemToRemove: string) => Promise<void>;
  clearCart: () => Promise<void>;
  cartLoading: boolean;
  incrementCartItem: (item: CartItem) => Promise<void>;
  decrementCartItem: (item: CartItem) => Promise<void>;
}

// Create context with default value
const CartContext = createContext<CartContextValue>({
  cart: [],
  whishlist: [],
  removeWishItem: async () => {},
  cartOpen: false,
  setCartOpen: () => {},
  addToCart: async () => {},
  addToWhishlist: async () => {},
  checkoutUrl: '',
  removeCartItem: async () => {},
  clearCart: async () => {},
  cartLoading: false,
  incrementCartItem: async () => {},
  decrementCartItem: async () => {},
});

interface ShopProviderProps {
  children: ReactNode;
}

export default function ShopProvider({ children }: ShopProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [whishlist, setWhishlist] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutId, setCheckoutId] = useState('');
  const [checkoutUrl, setCheckoutUrl] = useState('');
  const [cartLoading, setCartLoading] = useState(false);

  useEffect(() => {
    const storedCheckout = localStorage.getItem('checkout_id');
    if (storedCheckout) {
      const cartObject = JSON.parse(storedCheckout);
      if (cartObject && cartObject[0].length && cartObject[1].checkout) {
        if (cartObject[0].length > 0) {
          setCart(cartObject[0]);
        }
        setCheckoutId(cartObject[1].checkout.id);
        setCheckoutUrl(cartObject[1].checkout.webUrl);
      }
    }
  }, []);

  async function addToCart(addedItem: CartItem) {
    const newItem = { ...addedItem };
    setCartOpen(true);
    if (cart.length === 0) {
      setCart([newItem]);
      const checkout = await createCheckout(newItem.id, 1);
      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);
      localStorage.setItem('checkout_id', JSON.stringify([newItem, checkout]));
      return checkout;
    } else {
      let newCart: CartItem[] = [];
      let added = false;

      cart.forEach((item) => {
        if (item.id === newItem.id) {
          item.variantQuantity++;
          newCart = [...cart];
          added = true;
        }
      });

      if (!added) {
        newCart = [...cart, newItem];
      }

      setCart(newCart);

      const newCheckout = await updateCheckout(checkoutId, newCart);
      localStorage.setItem(
        'checkout_id',
        JSON.stringify([newCart, newCheckout])
      );
      return newCheckout;
    }
  }

  async function addToWhishlist(addedItem: CartItem) {
    const newItem = { ...addedItem };
    setCartOpen(true);

    if (whishlist.length === 0) {
      setWhishlist([newItem]);
      localStorage.setItem('whishlist_id', JSON.stringify([newItem]));
    } else {
      let newWishlist: CartItem[] = [];
      let added = false;

      whishlist.forEach((item) => {
        if (item.id === newItem.id) {
          newWishlist = [...whishlist];
          added = true;
        }
      });

      if (!added) {
        newWishlist = [...whishlist, newItem];
      }

      setWhishlist(newWishlist);

      localStorage.setItem('whishlist_id', JSON.stringify(newWishlist));
    }
  }

  async function removeWishItem(itemToRemove: string) {
    const updatedWshlist = whishlist.filter((item) => item.id !== itemToRemove);
    setWhishlist(updatedWshlist);
    if (updatedWshlist.length === 0) {
      localStorage.removeItem('checkout_id');
    } else {
      localStorage.setItem('checkout_id', JSON.stringify(updatedWshlist));
    }
  }

  async function removeCartItem(itemToRemove: string) {
    console.log('itemToRemove', itemToRemove);
    console.log('checkoutId', checkoutId);
    const updatedCart = cart.filter((item) => item.id !== itemToRemove);
    setCartLoading(true);

    setCart(updatedCart);

    const newCheckout = await updateCheckout(checkoutId, updatedCart);

    if (updatedCart.length === 0) {
      localStorage.removeItem('checkout_id');
    } else {
      localStorage.setItem(
        'checkout_id',
        JSON.stringify([updatedCart, newCheckout])
      );
    }
    setCartLoading(false);

    if (cart.length === 1) {
      setCartOpen(false);
    }
  }

  async function incrementCartItem(item: CartItem) {
    setCartLoading(true);

    let newCart: CartItem[] = [];

    cart.forEach((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.variantQuantity++;
        newCart = [...cart];
      }
    });

    setCart(newCart);
    const newCheckout = await updateCheckout(checkoutId, newCart);

    localStorage.setItem('checkout_id', JSON.stringify([newCart, newCheckout]));
    setCartLoading(false);
  }

  async function decrementCartItem(item: CartItem) {
    setCartLoading(true);

    if (item.variantQuantity === 1) {
      removeCartItem(item.id);
    } else {
      let newCart: CartItem[] = [];
      cart.forEach((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem.variantQuantity--;
          newCart = [...cart];
        }
      });

      setCart(newCart);
      const newCheckout = await updateCheckout(checkoutId, newCart);

      localStorage.setItem(
        'checkout_id',
        JSON.stringify([newCart, newCheckout])
      );
    }
    setCartLoading(false);
  }

  async function clearCart() {
    const updatedCart: CartItem[] = [];

    setCart(updatedCart);

    const newCheckout = await updateCheckout(checkoutId, updatedCart);

    localStorage.setItem(
      'checkout_id',
      JSON.stringify([updatedCart, newCheckout])
    );
  }

  return (
    <CartContext.Provider
      value={{
        whishlist,
        addToWhishlist,
        removeWishItem,
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        checkoutUrl,
        removeCartItem,
        clearCart,
        cartLoading,
        incrementCartItem,
        decrementCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };
