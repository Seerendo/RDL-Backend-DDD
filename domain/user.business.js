const Business = require("./business");
const { UserEntity } = require('./entities/index');

class UserBusiness extends Business {
    constructor({ UserRepository }) {
        super(UserRepository, UserEntity);
    }
}

module.exports = UserBusiness;