import useFetch from '../hooks/useFetch';

const MultipleCustomHooks = () => {
	const {data, isLoading, hasError} = useFetch(
		'https://api.breakingbadquotes.xyz/v1/quotes',
	);

	const {author, quote} = !!data && data[0];

	return (
		<>
			<h1>BreakingBad Quotes</h1>
			<hr />

			{isLoading ? (
				<div className="alert alert-info text-center">Loading...</div>
			) : (
				<blockquote className="blockquote text-end">
					<p>{quote}</p>
					<footer className="blockquote-footer">{author}</footer>
				</blockquote>
			)}

			<button className="btn btn-primary">Next quote</button>
		</>
	);
};

export default MultipleCustomHooks;
