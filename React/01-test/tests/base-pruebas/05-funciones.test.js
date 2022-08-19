import {
	getUser,
	getUsuarioActivo,
} from '../../src/base-pruebas/base-pruebas/05-funciones';

describe('Test in 05-funciones', () => {
	test('getUser should return an object', () => {
		const testUser = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		};

		const user = getUser();

		expect(user).toEqual(testUser);
	});

	test('getActiveUser should return an object', () => {
		const name = 'Gilbert';
		const user = getUsuarioActivo(name);

		expect(user).toEqual({
			uid: 'ABC567',
			username: name,
		});
	});
});
