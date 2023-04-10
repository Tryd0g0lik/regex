// ТЕст eslint app webpack
export default class Validator {
	constructor(name) {
		this.data = { names: name };
	}

	validateUsername() {
		const datas = { ...this.data };
		const r = /(^[a-zA-Z])([a-zA-Z0-9_\-]+)([a-zA-Z]$)/gi;
		const rFilter = /([0-9]{4,})/gi;
		const stringOfDatas = datas.names;
		// const result = rFilter.test(stringOfDatas);
		if (r.test(stringOfDatas) === true && rFilter.test(stringOfDatas) === false) {
			return stringOfDatas;
		}

		throw new Error(`Строка "${stringOfDatas}" не должна содержать более трёх цифр подряд`);
	}
}

// const r = new Validator('Pe_t504-y242e');
// r.validateUsername();
