import { fireEvent, render, screen } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';


jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {


	test('debe de mostrar el componente por defecto', () => {
		const mockIncrementCounter = jest.fn();
		useCounter.mockReturnValue({
			counter: 1,
			incrementCounter: mockIncrementCounter,
		});

		useFetch.mockReturnValue({
			data: null,
			isLoading: true,
			hasError: null,
			totalTime: 0,
		});

		render(<MultipleCustomHooks />);

		expect(screen.getByText('Loading...'));
		expect(screen.getByText('BreakingBad Quotes'));

		const nextButton = screen.getByRole('button', { name: 'Next quote' });
		expect(nextButton.disabled).toBeTruthy();
		// screen.debug();
	});

	test('debe de mostrar un Quote', () => {
		const mockIncrementCounter = jest.fn();
		useCounter.mockReturnValue({
			counter: 1,
			incrementCounter: mockIncrementCounter,
		});

		const returnedValue = { author: 'Fernando', quote: 'Texto del quote' };
		useFetch.mockReturnValue({
			data: [returnedValue],
			isLoading: false,
			hasError: null,
			totalTime: 0,
		});

		render(<MultipleCustomHooks />);
		expect(screen.getByText('Hola Mundo')).toBeTruthy();
		expect(screen.getByText('Fernando')).toBeTruthy();

		const nextButton = screen.getByRole('button', { name: 'Next quote' });
		expect(nextButton.disabled).toBeFalsy();
	});

	test('debe de llamar la función de incrementar', () => {
		 const mockIncrementCounter = jest.fn();
			useCounter.mockReturnValue({
				counter: 1,
				incrementCounter: mockIncrementCounter,
			});

			const returnedValue = {
				author: 'Fernando',
				quote: 'Texto del quote',
			};

			useFetch.mockReturnValue({
				data: [returnedValue],
				isLoading: false,
				hasError: null,
				totalTime: 0,
			});

		render(<MultipleCustomHooks />);
		const nextButton = screen.getByRole('button', { name: 'Next quote' });
		fireEvent.click(nextButton);

		expect(mockIncrement).toHaveBeenCalled();
	});
});
