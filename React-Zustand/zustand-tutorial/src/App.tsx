import { useEffect } from 'react';
import { useCounterStore } from './store/counterStore';

const App = () => {
	const { count, title, increment, decrement, getPosts, posts } =
		useCounterStore();

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div>
			<h1>
				{title}: {count}
			</h1>

			<div>
				<button onClick={() => increment(1)}>+1</button>
				<button onClick={() => decrement(1)}>-1</button>
			</div>

			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<span>{post.id} </span>
						<span>{post.title}</span>
						<span>{post.body}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
