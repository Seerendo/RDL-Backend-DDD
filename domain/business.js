const mapper = require('automapper-js');

class Business {
    constructor(Repository, Entity) {
        this._repository = Repository,
        this.entity = Entity;
    }

    async getAll() {
        let enities = await this._repository.getAll();
        let mapEntities = mapper(this.entity, enities);
        return mapEntities;
    }
}

module.exports = Business;