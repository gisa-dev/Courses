export const todoReducer = (initialState = [], action) => {
	switch (action.type) {
		case 'abc':
			throw new Error('Action.type = ABC no esta implementado');

		default:
			return initialState;
	}
};
