import { create } from "zustand";

const useTheme = create((set) => ({
  isLightTheme: true,
  setIsLightTheme: (value) => set(() => ({ isLightTheme: value })),
}));

export default useTheme;
