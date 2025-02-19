import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useGradientStore = create<GradientStore>()(
  persist(
    (set) => ({
      selectedGradientId: 'blue',
      setSelectedGradientId: (id: string) => set({ selectedGradientId: id }),
    }),
    {
      name: 'gradient-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
