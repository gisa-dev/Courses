import {getImagen} from '../../src/base-pruebas/base-pruebas/11-async-await';

describe('test in 11-async-await', () => {
	test('getImagen should return error if we do not have api key', async () => {
		const resp = await getImagen();

		expect(resp).toBe('No se encontro la imagen');
	});
});
