import {create} from 'zustand';

export interface counterState {
  counter: number;
  incrementBy: (value: number) => void;
}

export const useCounterStore = create<counterState>()((set, get) => ({
  counter: 0,
  incrementBy: value => {
    set({counter: get().counter + value});
  },
}));
