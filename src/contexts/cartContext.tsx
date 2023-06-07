

import { ProductCartAdd, ProductInCart } from "@/types/productsResponse";
import { ReactNode, createContext, useEffect, useState } from "react";

const cartLocalName =  'cartItems' as string;
const cartLimit = 5 as number ;


interface ICartContext{
    cartItems: ProductInCart[];
    addToCart: (item: ProductCartAdd) => void;
    updateQuant: (id:string, quantity: number) => void;
    removeFromCart: (item: ProductInCart) => void;
    clearCart: () => void;
}

interface ICartProvider {
  children: ReactNode;
}

export const CartContext = createContext<ICartContext>({
    cartItems: [],
    addToCart: () => {},
    updateQuant: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
  });

export const CartProvider = ({ children }: ICartProvider) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
    useEffect(() => {
      const storedCartItems = localStorage.getItem(cartLocalName);
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem(cartLocalName, JSON.stringify(cartItems));
    }, [cartItems]);
  
    const addToCart = (item: ProductInCart) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
          // Item already exists in the cart, increase the quantity
          return prevItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          // Item doesn't exist in the cart, add it with quantity = 1
          return [...prevItems, { ...item, quantity: 1 }];
        }
      });
    };

    const updateQuant = (id:string, quantity: number) => {
      const newValue = cartItems.map(item => {
          if( item.id !== id ) return item
          if(quantity <= cartLimit ){
            return  { ...item, quantity: quantity}
          }else{
            return item
          }
          
      })      
      setCartItems(newValue);
      localStorage.setItem(cartLocalName,JSON.stringify(newValue));
    } 
  
    const removeFromCart = (item: ProductInCart) => {
      const confir = confirm('Deseja Excluir o Item do Carrinho?');
      if(confir){
        setCartItems((prevItems) =>
        prevItems.filter((cartItem) => cartItem.id !== item.id)
        );
      }
      
    };
  
    const clearCart = () => {
      setCartItems([]);
    };
  
    return (
      <CartContext.Provider
        value={{ 
            cartItems, 
            addToCart, 
            updateQuant,
            removeFromCart, 
            clearCart }}
      >
        {children}
      </CartContext.Provider>
    );
  };

