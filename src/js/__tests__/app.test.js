import app from '../app';

describe('the test Constructor', () => {
	test('#1', () => {
		const r = new app('Pe_t504-y242e');
		expect(r.data.names).toBe('Pe_t504-y242e');
	});
});

describe('Testing Throw', () => {
	const dataTest = test.each([
		['taest 01', 'Pe_t50400000000000-y242e', false],
		['taest 02', 'Pe_t5042-y242e', false],
		['taest 03', 'Pe_kj,le', false],
		['taest 04', 'Pe_t5042-y21_42e', false],
		['taest 05', '0Petye', false],
		['taest 06', 'Pety2', false],
	]);

	dataTest('RegExp => %s, %s', (a, b, expected) => {
		const answerTes = new app(b);
		expect(answerTes.validateUsername()).toBe(expected);
	});
});
