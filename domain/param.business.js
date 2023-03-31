const { ParamEntity } = require('./entities/index');
const mapper = require('automapper-js');

class ParamBusiness {
    constructor({ ParamRepository }) {
        this._repository = ParamRepository;
        this.entity = ParamEntity;
    }

    async getAllParams() {
        let params = await this._repository.getAllParams();
        let mapEntities = mapper(this.entity, params);
        return mapEntities;
    }

    async getParamById(id) {
        let param = await this._repository.getParamById(id);
        let mapEntities = mapper(this.entity, param);
        return mapEntities;
    }

    async getParamByDescription(query) {
        let param = await this._repository.getParamByDescription(query);
        let mapEntities = mapper(this.entity, param);
        return mapEntities;
    }

    async getParamByField(query) {
        let param = await this._repository.getParamByField(query);
        let mapEntities = mapper(this.entity, param);
        return mapEntities;
    }

    async getParamByFieldAndDescription(description, field) {
        let param = await this._repository.getParamByFieldAndDescription(description, field);
        let mapEntities = mapper(this.entity, param);
        return mapEntities;
    }

    async getParamByActivated(query) {
        let param = await this._repository.getParamByActivated(query);
        let mapEntities = mapper(this.entity, param);
        return mapEntities;
    }

    async getParamByCuali(query) {
        let param = await this._repository.getParamByCuali(query);
        let mapEntities = mapper(this.entity, param);
        return mapEntities;
    }

    async createParam(query) {
        let param = await this._repository.createParam(query);
        let mapEntities = mapper(this.entity, param.dataValues);
        return mapEntities;
    }

    async updateParam(query) {
        let param = await this._repository.getParamByCuali(query);
        let mapEntities = mapper(this.entity, param);
        return mapEntities;
    }
}

module.exports = ParamBusiness;