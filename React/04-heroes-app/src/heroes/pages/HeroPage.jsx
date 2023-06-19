import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
	const { id } = useParams();

	const navigate = useNavigate();

	const hero = useMemo(() => getHeroById(id), [id]);

	const onNavigateBack = () => {
		navigate(-1);
	};

	if (!hero) {
		return <Navigate to='/marvel' />;
	}

	return (
		<section className='grid gap-3 md:grid-cols-2 animate-fade-down'>
			<div>
				<img
					src={`/assets/heroes/${id}.jpg`}
					alt={hero.superhero}
					className='rounded-md'
				/>
			</div>
			<div className='flex flex-col items-start justify-between'>
				<div>
					<h1 className='text-5xl font-semibold'>{hero.superhero}</h1>

					<ul className='mt-10'>
						<li className='mb-2 text-2xl border-b-2'>
							<strong>Publisher: </strong>
							{hero.publisher}
						</li>
						<li className='mb-2 text-2xl border-b-2'>
							<strong>First appearance: </strong>
							{hero.first_appearance}
						</li>
						<li className='mb-2 text-2xl border-b-2'>
							<strong>Alter ego: </strong>
							{hero.alter_ego}
						</li>
					</ul>

					<h2 className='mt-10 text-4xl font-semibold'>Characters</h2>
					<span className='mt-2 text-2xl'>{hero.characters}</span>
				</div>

				<button
					className='inline-block px-8 py-3 text-base font-medium text-white transition duration-300 ease-in-out bg-indigo-600 rounded-md hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'
					onClick={onNavigateBack}
				>
					Back
				</button>
			</div>
		</section>
	);
};
