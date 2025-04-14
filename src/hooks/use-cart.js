import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (i) => i.id === item.id
        );

        if (existingItemIndex !== -1) {
          // If the item already exists, update its quantity
          const updatedItems = [...currentItems];
          updatedItems[existingItemIndex].quantity += item.quantity;
          set({ items: updatedItems });
        } else {
          // Otherwise, add the new item
          set({ items: [...currentItems, item] });
        }
      },
      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },
      updateQuantity: (id, quantity) => {
        const currentItems = get().items;
        const updatedItems = currentItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        set({ items: updatedItems });
      },
      clearCart: () => {
        set({ items: [] });
      },
      totalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "ideal-cafe-cart",
    }
  )
);
