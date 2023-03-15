import {render, screen} from '@testing-library/react';
import GifGrid from '../../src/components/GifGrid';
import useFetchGifs from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test in <GifGrid/>', () => {
	const category = 'One Piece';

	test('should initially display the loading', () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		});

		render(<GifGrid category={category} />);

		expect(screen.getByText('Loading...'));
		expect(screen.getByText(category));
	});

	test('should display items when loading images useFetchGifs', () => {
		const gifs = [
			{
				id: '01',
				title: 'One Piece',
				url: 'https://localhost/one-piece.jpg',
			},
			{
				id: '02',
				title: 'Fairy Tail',
				url: 'https://localhost/fairy-tail.jpg',
			},
		];

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		});
		render(<GifGrid category={category} />);


    expect(screen.getAllByRole('img').length).toBe(2)
	});
});
