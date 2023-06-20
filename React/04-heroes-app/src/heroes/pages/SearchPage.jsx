import { useLocation, useNavigate } from 'react-router-dom';
import { HeroCard } from '../components/HeroCard';
import { useForm } from '../hooks/useForm';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);
	const heroes = getHeroesByName(q);

	const showSearch = q.length === 0;
	const showError = q.length > 0 && heroes.length === 0;

	const { searchText, onInputChange } = useForm({
		searchText: q,
	});

	const onSearchSubmit = (event) => {
		event.preventDefault();

		if (searchText.trim().length <= 1) return;

		navigate(`?q=${searchText}`);
	};

	return (
		<>
			<h1 className='title'>Search</h1>

			<section className='grid gap-5 md:grid-cols-2'>
				<div>
					<span className='block pb-3 mb-3 text-2xl border-b-4 border-slate-300 '>
						Searching
					</span>
					<form onSubmit={onSearchSubmit}>
						<label
							htmlFor='SearchText'
							className='relative block px-3 pt-3 overflow-hidden border border-gray-200 rounded-md shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600'
						>
							<input
								className='w-full h-8 p-0 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
								type='text'
								placeholder='Search a hero'
								name='searchText'
								autoComplete='off'
								value={searchText}
								onChange={onInputChange}
							/>

							<span className='absolute text-xs text-gray-700 transition-all duration-300 ease-in-out -translate-y-1/2 start-3 top-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs'>
								Search a hero
							</span>
						</label>

						<button className='inline-block w-full px-8 py-3 mt-5 text-base font-medium text-white transition duration-300 ease-in-out bg-indigo-600 rounded-md hover:bg-indigo-800 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'>
							Search
						</button>
					</form>
				</div>

				<div className='flex flex-col gap-1'>
					<span className='block pb-3 mb-3 text-2xl border-b-4 border-slate-300 '>
						Results
					</span>

					<div
						className='p-4 text-sm text-indigo-800 rounded-lg bg-indigo-50 '
						role='alert'
						style={{ display: showSearch ? '' : 'none' }}
					>
						<span className='font-medium'>Search a hero...</span>
					</div>

					<div
						className='p-4 text-sm text-red-800 rounded-lg bg-red-50 '
						role='alert'
						style={{ display: showError ? '' : 'none' }}
					>
						<span className='font-medium'>
							No hero with <strong>{q}</strong>
						</span>
					</div>

					{heroes.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</section>
		</>
	);
};
