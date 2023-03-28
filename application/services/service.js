class Service {
    constructor(Business) {
        this._business = Business;
    }

    async getAll() {
        const entities = await this._business.getAll();
        return entities;
    }
}

module.exports = Service;