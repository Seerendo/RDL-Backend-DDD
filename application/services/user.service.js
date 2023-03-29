const Service = require('./service');

class UserService extends Service {
    constructor({ UserBusiness }) {
        super(UserBusiness);
    }
}

module.exports = UserService;