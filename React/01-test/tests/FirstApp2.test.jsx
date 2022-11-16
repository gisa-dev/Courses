import {render, screen} from '@testing-library/react';
import {FirstApp} from '../src/FirstApp';

describe('Test in <FirstApp/>', () => {
	const title = 'Hola, Soy Goku';
	const subTitle = 'Hola, Soy un subtitulo';

	test('should match the snapshot', () => {
		const {container} = render(<FirstApp title={title} />);

		expect(container).toMatchSnapshot();
	});

	test('should display the message "Hola, Soy Goku"', () => {
		render(<FirstApp title={title} />);

		expect(screen.getByText(title)).toBeTruthy();
		// screen.debug();
	});

	test('should display the title in the h1', () => {
		render(<FirstApp title={title} />);
		expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
	});

	test('should display the subtitle sent by props', () => {
		render(<FirstApp title={title} subTitle={subTitle} />);

		expect(screen.getAllByText(subTitle).length).toBe(2);
	});
});
