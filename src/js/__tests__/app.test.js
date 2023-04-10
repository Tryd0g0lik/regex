import app from '../app';

describe('the test Constructor', () => {
	test('#1', () => {
		const r = new app('Pe_t504-y242e');
		expect(r.data.names).toBe('Pe_t504-y242e');
	});
});

describe('Testing Throw', () => {
	const dataTest = test.each([
		['taest 01', 'Pe_t50400000000000-y242e', 'function did not throw'],
		['taest 02', 'Pe_t5042-y242e', Error],
		['taest 03', 'Pe_t5055_4-y242e', Error],
		['taest 04', 'Pe_t5042-y21_42e', Error],
		['taest 05', '0Petye', Error],
		['taest 06', 'Pety2', Error],
	]);

	dataTest('RegExp => %s, %s', (a, b, expected) => {
		expect(() => {
			const answerTes = new app(b);
			answerTes.validateUsername();
		}).toThrow();
	});
});
