import {fireEvent, render, screen} from '@testing-library/react';
import AddCategory from '../../src/components/AddCategory';

describe('Test in <AddCategory/>', () => {
	test('should change the value of the text box', () => {
		render(<AddCategory onNewCategory={() => {}} />);
		const input = screen.getByRole('textbox');

		fireEvent.input(input, {
			target: {value: 'One Piece'},
		});

		expect(input.value).toBe('One Piece');
	});

	test('should call onNewCategory if the input has a value of', () => {
    // variables
		const inputValue = 'One Piece';
    const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

    // events
		fireEvent.input(input, {
			target: {value: inputValue},
		});

		fireEvent.submit(form);

    // expects
		expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
	});

  test('should not call onNewCategory if the input is empty', () => {
    const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const form = screen.getByRole('form');

    // events
		fireEvent.submit(form);

    // expects
    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0)

   })
});
