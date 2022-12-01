import {fireEvent, render, screen} from '@testing-library/react';
import {CounterApp} from '../src/CounterApp';

describe('Test in <CounterApp/>', () => {
	const initialValue = 10;

	test('should match the snapshot', () => {
		const {container} = render(<CounterApp value={initialValue} />);
		expect(container).toMatchSnapshot();
	});

	test('should show the initial value of 100', () => {
		render(<CounterApp value={100} />);
		expect(screen.getByText(100)).toBeTruthy();
	});

	test('should be incremented with the +1 button', () => {
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('+1'));

		expect(screen.getByText('11')).toBeTruthy();
	});

	test('should be decremented with the -1 button', () => {
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('-1'));

		expect(screen.getByText('9')).toBeTruthy();
	});

	test('should reset the value to 10', () => {
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		// fireEvent.click(screen.getByText('Reset'));
		fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));

		expect(screen.getByText('10')).toBeTruthy();
	});
});
