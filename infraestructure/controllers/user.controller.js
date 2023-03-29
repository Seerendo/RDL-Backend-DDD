const mapper = require('automapper-js');
const { UserData } = require('../data');

class UserController {
    constructor({ UserService }) {
        this._userService = UserService;
    }

    async getUsers(req, res) {
        let users = await this._userService.getAll();
        users = users.map(user => mapper(UserData, user));
        return res.send(
            {
                payload: users
            }
        )
    }
}

module.exports = UserController;