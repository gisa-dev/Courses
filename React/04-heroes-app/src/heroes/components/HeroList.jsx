import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
	const heroes = getHeroesByPublisher(publisher);

	return (
		<ul className='grid gap-3 sm:grid-cols-2 md:grid-cols-3 place-items-center'>
			{heroes.map((hero) => (
				<HeroCard key={hero.id} {...hero} />
			))}
		</ul>
	);
};
