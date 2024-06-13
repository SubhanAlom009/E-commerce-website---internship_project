import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      console.log("Loading cart from local storage:", savedCart);
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    console.log("Saving cart to local storage:", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleCart = (product) => {
    if (cart.find((pd) => pd.id === product.id)) {
      return alert("Already added to cart");
    }
    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const handleRemove = (pd) => {
    const newCart = cart.filter((item) => item.id !== pd.id);
    setCart(newCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
  
    setCart(prevCart => {
      const updatedCart = prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      // Only update the state if there is a change in the quantity
      if (JSON.stringify(updatedCart) !== JSON.stringify(prevCart)) {
        return updatedCart;
      }
      return prevCart;
    });
  };
  

  return (
    <CartContext.Provider value={{ cart, quantity, updateQuantity, handleCart, setQuantity, handleRemove}}>
      {children}
    </CartContext.Provider>
  );
};
