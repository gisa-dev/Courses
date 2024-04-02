import {create} from 'zustand';

export interface CounterState {
  // Properties
  count: number;

  // Methods
  increaseBy: (value: number) => void;
}

export const useCounterStore = create<CounterState>()((set, get) => ({
  // Properties
  count: 1,
  // Methods
  increaseBy: (value: number) => {
    set(state => ({count: state.count + value}));
  },
}));
