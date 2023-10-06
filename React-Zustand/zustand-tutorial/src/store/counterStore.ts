import { create } from 'zustand';

interface Post {
	id: number;
	title: string;
	body: string;
}

interface CounterState {
	count: number;
	title: string;
	increment: (value: number) => void;
	decrement: (value: number) => void;
	posts: Post[];
	getPosts: () => Promise<Post[]>;
}

export const useCounterStore = create<CounterState>((set) => ({
	count: 10,
	title: 'Some Title',
	increment: (value: number) =>
		set((state) => ({
			...state,
			count: state.count + value,
		})),
	decrement: (value: number) =>
		set((state) => ({
			...state,
			count: state.count - value,
		})),
	posts: [],
	getPosts: async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await res.json();

		set((state) => ({
			...state,
			posts: data,
		}));

		return data as Post[];
	},
}));
