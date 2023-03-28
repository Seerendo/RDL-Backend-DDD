const Business = require("./business");
const { ParamEntity } = require('./entities/index');

class ParamBusiness extends Business {
    constructor({ ParamRepository }) {
        super(ParamRepository, ParamEntity);
    }
}

module.exports = ParamBusiness;