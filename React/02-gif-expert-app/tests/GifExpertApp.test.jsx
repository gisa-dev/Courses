import {fireEvent, render, screen} from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

describe('Test in <GifExpertApp/>', () => {
	test('should first', () => {

    const onAddCategory = jest.fn();
		render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

    fireEvent.input(input, {
			target: {value: 'One Piece'},
		});

		fireEvent.submit(form);

    expect(input.value).toBe('');
    // expect(onAddCategory).toHaveBeenCalled();
    
	});
});
