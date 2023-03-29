const Business = require("./business");
const { SpecEntity } = require('./entities/index');

class SpecBusiness extends Business {
    constructor({ SpecRepository }) {
        super(SpecRepository, SpecEntity);
    }
}

module.exports = SpecBusiness;