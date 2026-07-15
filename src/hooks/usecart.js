import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (id) => setCart(cart.filter(i => i.id !== id));
  const clearCart = () => setCart([]);

  return { cart, addToCart, removeFromCart, clearCart };
}
