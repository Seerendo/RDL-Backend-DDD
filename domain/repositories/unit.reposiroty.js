const Repository = require("./repository");

class UnitRepository extends Repository {
    constructor({ db }) {
        super(db, 'unit');
    }
}

module.exports = UnitRepository;