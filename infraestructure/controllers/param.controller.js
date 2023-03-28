const mapper = require('automapper-js');
const { ParamData } = require('../data');

class ParamController {
    constructor({ ParamService }) {
        this._paramService = ParamService;
    }

    async getParams(req, res) {
        let params = await this._paramService.getAll();
        params = params.map(param => mapper(ParamData, param));
        return res.send(
            {
                data: params
            }
        )
    }
}

module.exports = ParamController;