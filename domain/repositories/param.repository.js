const Repository = require("./repository");

class ParamRepository extends Repository {
    constructor({ db }) {
        super(db, 'param');
    }
}

module.exports = ParamRepository;