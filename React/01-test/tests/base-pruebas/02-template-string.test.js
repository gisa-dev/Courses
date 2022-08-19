import {getGreeting} from '../../src/base-pruebas/base-pruebas/02-template-string';

describe('Test in 02-template-string', () => {
	test('getGreeting should return Hello Gilbert', () => {
		const name = 'Gilbert';
		const message = getGreeting(name);

    expect(message).toBe(`Hello ${name}`)
	});
});
