import {render, screen} from '@testing-library/react';
import GifItem from '../../src/components/GifItem';

describe('Test in <GifItem/>', () => {
	const title = 'Images';
	const url = 'https://picsum.photos/200';

	test('should match the snapshot', () => {
		const {container} = render(<GifItem title={title} url={url} />);

		expect(container).toMatchSnapshot();
	});

	test('should display the image with the url and alt indicated', () => {
		render(<GifItem title={title} url={url} />);

		const {src, alt} = screen.getByRole('img');

		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('should display the title in the component', () => {
		render(<GifItem title={title} url={url} />);
		expect(screen.getByText(title)).toBeTruthy();
	});
});
