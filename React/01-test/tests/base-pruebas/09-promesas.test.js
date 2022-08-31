import {getHeroeByIdAsync} from '../../src/base-pruebas/base-pruebas/09-promesas';

describe('Test in 09-promesas', () => {
	test('getHeroeByIdAsync should return a hero', (done) => {
		const id = 1;

		getHeroeByIdAsync(id).then((hero) => {
			expect(hero).toEqual({
				id: 1,
				name: 'Batman',
				owner: 'DC',
			});
			done();
		});
	});

	test('getHeroeByIdAsync should get an error if the hero does not exist', (done) => {
		const id = 100;

		getHeroeByIdAsync(id).catch((error) => {
			expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
			done();
		});
	});
});
