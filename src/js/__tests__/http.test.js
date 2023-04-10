import { httpGet, httpPost } from '../http';

describe('test for a Throw', () => {
	test('a httpGet function Tests on to toThrow', () => {
		expect(new httpGet('https://eslint.org/docs/latest/rules/')).toThrow();
	});

	test('a httpPost function Tests on to toThrow', () => {
		expect(new httpPost('https://eslint.org/docs/latest/rules/')).toThrow();
	});
});
