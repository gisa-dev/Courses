import { useQuery } from '@tanstack/react-query';

const getRandomNumberApi = async (): Promise<number> => {
	const resp = await fetch(
		'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new',
	);

	const numberString = await resp.text();

	// throw new Error('Auxilio!!');

	return Number(numberString);
};

export const useRandom = () => {
	const query = useQuery(['randomNumber'], getRandomNumberApi);

	return query;
};
