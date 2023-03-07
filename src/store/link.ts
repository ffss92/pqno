import { create } from "zustand";
import { Link } from "@prisma/client";

type Actions = {
  add: (link: Link) => void;
  clear: (id: string) => void;
  clearAll: () => void;
};

interface LinkStore {
  links: Link[];
  actions: Actions;
}

export const useLinkStore = create<LinkStore>((set) => ({
  links: [],
  actions: {
    add(link) {
      set((state) => ({
        links: [...state.links, link],
      }));
    },
    clearAll: () => set(() => ({ links: [] })),
    clear: (id) =>
      set((state) => ({ links: state.links.filter((link) => link.id !== id) })),
  },
}));

export const useLinkActions = () => useLinkStore((state) => state.actions);
