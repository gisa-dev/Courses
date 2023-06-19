import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

	return (
		<ul className='grid gap-3 sm:grid-cols-2 md:grid-cols-3 place-items-center animate-fade-down'>
			{heroes.map((hero) => (
				<HeroCard key={hero.id} {...hero} />
			))}
		</ul>
	);
};
