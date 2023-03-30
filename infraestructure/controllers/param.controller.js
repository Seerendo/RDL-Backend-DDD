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
                payload: params
            }
        );
    }

    async getParamById(req, res) {
        const {body} = req;
        let param = await this._paramService.getItemId(body.paramId);
        param = mapper(ParamData, param);
        return res.send(
            {
                payload: param
            }
        );
    }
}

module.exports = ParamController;