import { createContext, ReactNode, useContext } from "react";

type TrolleyProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const TrolleyContext = createContext({});

export const useTrolley = () => {
  return useContext(TrolleyContext);
};

export const TrolleyProvider = ({ children }: TrolleyProviderProps) => {
  return (
    <TrolleyContext.Provider value={{}}>{children}</TrolleyContext.Provider>
  );
};
