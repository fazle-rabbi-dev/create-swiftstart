import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  isLoggedIn: false,
  isUserLoading: true,
  count: 0,
  
  checkAuth: () => {
    set({ isLoggedIn: true })
  },
  
  increment: () => {
    set((state) => { count: state.count + 1 })
  }
}));
