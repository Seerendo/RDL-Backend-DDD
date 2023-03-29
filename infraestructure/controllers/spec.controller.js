const mapper = require('automapper-js');
const { SpecData } = require('../data');

class SpecController {
    constructor({ SpecService }) {
        this._specService = SpecService;
    }

    async getSpecs(req, res) {
        let specs = await this._specService.getAll();
        specs = specs.map(spec => mapper(SpecData, spec));
        return res.send(
            {
                payload: specs
            }
        )
    }
}

module.exports = SpecController;