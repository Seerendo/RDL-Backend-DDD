class ParamService {
    constructor({ ParamBusiness }) {
        this._business = ParamBusiness;
    }

    async getAllParams() {
        const params = await this._business.getAllParams();
        return params;
    }

    async getParamById(id) {
        const param = await this._business.getParamById(id);
        return param;
    }

    async getParamByDescription(query) {
        const param = await this._business.getParamByDescription(query);
        return param;
    }

    async getParamByField(query) {
        const param = await this._business.getParamByField(query);
        return param;
    }

    async getParamByFieldAndDescription(description, field) {
        const param = await this._business.getParamByFieldAndDescription(description,field);
        return param;
    }

    async getParamByActivated(query) {
        const param = await this._business.getParamByActivated(query);
        return param;
    }

    async getParamByCuali(query) {
        const param = await this._business.getParamByCuali(query);
        return param;
    }

    async createParam(query) {
        const param = await this._business.createParam(query);
        return param;
    }

    async updateParam(query) {
        const param = await this._business.updateParam(query);
        return param;
    }
}

module.exports = ParamService;