const Service = require('./service');

class SpecService extends Service {
    constructor({ SpecBusiness }) {
        super(SpecBusiness);
    }
}

module.exports = SpecService;