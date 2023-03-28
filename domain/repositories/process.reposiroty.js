const Repository = require("./repository");

class ProcessRepository extends Repository {
    constructor({ db }) {
        super(db, 'process');
    }
}

module.exports = ProcessRepository;