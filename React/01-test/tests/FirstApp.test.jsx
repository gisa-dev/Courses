import {render} from '@testing-library/react';
import {FirstApp} from '../src/FirstApp';

describe('Test in <FirstApp/>', () => {
	// test('should match the snapshot', () => {
	// 	const title = 'Hola, soy Goku';

	// 	const {container} = render(<FirstApp title={title} />);

	// 	expect(container).toMatchSnapshot();
	// });

	test('should display the title in h1', () => {
		const title = 'Hola, Soy Goku';
		const {container, getByText, getByTestId} = render(
			<FirstApp title={title} />,
		);

		expect(getByText(title)).toBeTruthy();

		// const h1 = container.querySelector('h1')
		// expect(h1.innerHTML).toContain(title);

		expect(getByTestId('test-title').innerHTML).toContain(title);
	});

	test('should display the subtitle sent by props', () => {
		const title = 'Hola, Soy Goku';
		const subTitle = 'Hola, Soy un subtitulo';
		const {getByText} = render(<FirstApp title={title} subTitle={subTitle} />);

		expect(getByText(subTitle)).toBeTruthy();
	});
});
