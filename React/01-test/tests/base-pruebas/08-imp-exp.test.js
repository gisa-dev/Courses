import {
	getHeroeById,
	getHeroesByOwner,
} from '../../src/base-pruebas/base-pruebas/08-imp-exp';

describe('Test in 08-imp-exp', () => {
	test('getheroebyid should return a hero for the id', () => {
		const id = 1;
		const hero = getHeroeById(id);

		expect(hero).toEqual({
			id: 1,
			name: 'Batman',
			owner: 'DC',
		});
	});

	test('getheroebyid should return undefined if not exists the id', () => {
		const id = 100;
		const hero = getHeroeById(id);

		expect(hero).toBeFalsy();
	});

	test('should return an array with dc heroes', () => {
		const owner = 'DC';
		const heroes = getHeroesByOwner(owner);

		expect(heroes.length).toBe(3);
		expect(heroes).toEqual([
			{id: 1, name: 'Batman', owner: 'DC'},
			{id: 3, name: 'Superman', owner: 'DC'},
			{id: 4, name: 'Flash', owner: 'DC'},
		]);
	});
	test('should return an array with marvel heroes', () => {
		const owner = 'Marvel';
		const heroes = getHeroesByOwner(owner);

		expect(heroes.length).toBe(2);
		expect(heroes).toEqual([
			{id: 2, name: 'Spiderman', owner: 'Marvel'},
			{id: 5, name: 'Wolverine', owner: 'Marvel'},
		]);
	});
});
