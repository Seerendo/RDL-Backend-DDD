const Repository = require("./repository");

class SpecRepository extends Repository {
    constructor({ db }) {
        super(db, 'spec');
    }
}

module.exports = SpecRepository;