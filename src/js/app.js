// ТЕст eslint app webpack
export default class Validator {
	constructor(name) {
		this.data = { names: name };
	}

	validateUsername() {
		const r = /(^[a-zA-Z])([a-zA-Z_\-]+[0-9]{0,3})([a-zA-Z]$)/gi;
		const stringOfDatas = this.data.names;
		// console.error(`Строка "${stringOfDatas}" не должна содержать более трёх цифр подряд`);
		function newError() {
			throw new Error`Строка "${stringOfDatas}" не должна содержать более трёх цифр подряд`();
		}
		const answer = r.test(stringOfDatas) ? stringOfDatas
			: newError();

		return answer;
	}
}

// const r = new Validator('Pe_t-ye56s');
// r.validateUsername();
