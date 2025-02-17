import { create } from 'zustand';

interface ImageExportState {
  handleSaveAsImage: () => Promise<void>;
  setHandleSaveAsImage: (fn: () => Promise<void>) => void;
}

export const useImageExportStore = create<ImageExportState>((set) => ({
  handleSaveAsImage: async () => {},
  setHandleSaveAsImage: (fn) => set({ handleSaveAsImage: fn }),
}));
