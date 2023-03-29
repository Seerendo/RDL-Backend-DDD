const mapper = require('automapper-js');
const { UnitData } = require('../data');

class UnitController {
    constructor({ UnitService }) {
        this._unitService = UnitService;
    }

    async getUnits(req, res) {
        let units = await this._unitService.getAll();
        units = units.map(unit => mapper(UnitData, unit));
        return res.send(
            {
                payload: units
            }
        )
    }
}

module.exports = UnitController;