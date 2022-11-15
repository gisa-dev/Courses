import {render, screen} from '@testing-library/react';
import {FirstApp} from '../src/FirstApp';

describe('Test in <FirstApp/>', () => {
	const title = 'Hola, Soy Goku';

	test('should match the snapshot', () => {
		const {container} = render(<FirstApp title={title} />);

		expect(container).toMatchSnapshot();
	});

	test('should display the title in h1', () => {
		render(<FirstApp title={title} />);

		expect(screen.getByText(title)).toBeTruthy();

		// expect(getByTestId('test-title').innerHTML).toContain(title);
	});

	// test('should display the subtitle sent by props', () => {
	// 	const title = 'Hola, Soy Goku';
	// 	const subTitle = 'Hola, Soy un subtitulo';
	// 	const {getAllByText} = render(<FirstApp title={title} subTitle={subTitle} />);

	// 	expect(getAllByText(subTitle).length).toBe(2);
	// });
});
