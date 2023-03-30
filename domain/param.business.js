const { ParamEntity } = require('./entities/index');
const mapper = require('automapper-js');

class ParamBusiness {
    constructor({ ParamRepository }) {
        this._repository = ParamRepository;
        this.entity = ParamEntity;
    }

    async getAll() {
        let params = await this._repository.getAll();
        let mapEntities = mapper(this.entity, params);
        return mapEntities;
    }

    async getItemId(id) {
        let param = await this._repository.getItemId(id);
        let mapEntities = mapper(this.entity, param);
        return mapEntities;
    }
}

module.exports = ParamBusiness;