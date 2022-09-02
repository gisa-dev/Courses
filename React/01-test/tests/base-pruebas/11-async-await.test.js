import {getImagen} from '../../src/base-pruebas/base-pruebas/11-async-await';

describe('test in 11-async-await', () => {
	test('getImagen should return a URL of the image', async () => {
		const url = await getImagen();


		expect(typeof url).toBe('string');
	});
});
