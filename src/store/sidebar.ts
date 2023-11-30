import create from 'zustand';

interface ISidebar {
  activeItem: string;
  changeActiveItem: (activeItem: string) => void;
}

export const useSidebarStore = create<ISidebar>((set) => ({
  activeItem: 'Chats',
  changeActiveItem: (newActiveItem: string) => set({ activeItem: newActiveItem }),
}));
