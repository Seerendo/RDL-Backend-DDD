class ParamService {
    constructor({ ParamBusiness }) {
        this._business = ParamBusiness;
    }

    async getAll() {
        const params = await this._business.getAll();
        return params;
    }

    async getItemId(id) {
        const param = await this._business.getItemId(id);
        return param;
    }
}

module.exports = ParamService;