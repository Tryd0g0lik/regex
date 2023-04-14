import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

	const response = new loadUser(1);
  expect(response).toEqual({});
	expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('The function saveUser will tsting', () => {
	expect(() => { new saveUser('Vasya')(); }).toThrow();
});
