"use client";

import { createContext, useContext, useState } from "react";

type Food = {
  name: string;
  price: number;
  image: string;
};

type CartContextType = {
  cart: Food[];
  addToCart: (food: Food) => void;
  removeFromCart: (index: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);


export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [cart, setCart] = useState<Food[]>([]);


  function addToCart(food: Food) {
    setCart([...cart, food]);
  }


  function removeFromCart(index:number){
    setCart(cart.filter((_,i)=>i!==index));
  }


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}



export function useCart(){

const context = useContext(CartContext);

if(!context){
throw new Error("useCart must be inside CartProvider");
}

return context;

}
