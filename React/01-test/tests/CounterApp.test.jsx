import {render, screen} from '@testing-library/react';
import {CounterApp} from '../src/CounterApp';

describe('Test in <CounterApp/>', () => {
	const initialValue = 20;

	test('should match the snapshot', () => {
		const {container} = render(<CounterApp value={initialValue} />);
		expect(container).toMatchSnapshot();
	});

	test('should show the initial value of 100', () => {
		render(<CounterApp value={100} />);
		expect(screen.getByText(100)).toBeTruthy();
	});
});
