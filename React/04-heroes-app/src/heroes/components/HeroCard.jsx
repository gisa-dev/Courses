import { Link } from 'react-router-dom';

export const HeroCard = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const heroImageUrl = `/assets/heroes/${id}.jpg`;

	const colorPublisher =
		publisher === 'Marvel Comics' ? 'bg-[#f2161d]' : 'bg-[#0176e7]';

	return (
		<li className='w-full drop-shadow-md'>
			<Link to='#' className='relative block bg-black rounded-lg group'>
				<img
					alt='Developer'
					src={heroImageUrl}
					className='absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ease-in-out rounded-lg opacity-75 group-hover:opacity-50'
					loading='lazy'
				/>
				<div className='relative p-4 sm:p-6 lg:p-8 '>
					<div className='flex flex-col items-start'>
						<span
							className={`p-2 group-hover:opacity-0 transition-opacity duration-300 ease-in-out rounded-lg opacity-70 text-xs font-medium tracking-widest text-white ${colorPublisher} uppercase`}
						>
							{publisher}
						</span>
						<span className='text-xl font-bold text-white sm:text-2xl'>
							{superhero}
						</span>
					</div>
					<div className='mt-32 sm:mt-48 lg:mt-64'>
						<div className='flex flex-col items-start transition-all duration-300 ease-in-out transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>
							<span className='font-semibold text-white'>{alter_ego}</span>
							<span className='font-semibold text-white'>
								{first_appearance}
							</span>
							<span className='font-semibold text-white'>{characters}</span>
						</div>
					</div>
				</div>
			</Link>
		</li>
	);
};
