const Business = require("./business");
const { UnitEntity } = require('./entities/index');

class UnitBusiness extends Business {
    constructor({ UnitRepository }) {
        super(UnitRepository, UnitEntity);
    }
}

module.exports = UnitBusiness;