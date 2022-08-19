describe('Test in <DemoComponent/>', () => {
	test('This test must not fail', () => {
		// 1. Initialization
		const message1 = 'Hello World';

		// 2. Stimulus
		const message2 = message1.trim();

		// 3. Observing behavior... expected
		expect(message1).toBe(message2);
	});
});
