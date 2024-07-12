import { create } from 'zustand'

export const useStore = create((set) => ({
	screen: '',
	updateScreen: (newScreen) => set({ screen: newScreen }),
}))