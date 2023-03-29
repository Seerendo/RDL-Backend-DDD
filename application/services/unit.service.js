const Service = require('./service');

class UnitService extends Service {
    constructor({ UnitBusiness }) {
        super(UnitBusiness);
    }
}

module.exports = UnitService;