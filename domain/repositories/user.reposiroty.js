const Repository = require("./repository");

class UserRepository extends Repository {
    constructor({ db }) {
        super(db, 'user');
    }
}

module.exports = UserRepository;