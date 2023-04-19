export default class Validator {
	constructor(name) {
		this.data = { names: name };
	}

	validateUsername() {
		const r = /(^[a-zA-Z])([a-zA-Z_\-]+[0-9]{0,3})([a-zA-Z]$)/gi;
		return r.test(this.data.names);
	}
}
