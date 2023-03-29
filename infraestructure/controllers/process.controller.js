const mapper = require('automapper-js');
const { ProcessData } = require('../data');

class ProcessController {
    constructor({ ProcessService }) {
        this._processService = ProcessService;
    }

    async getProcesses(req, res) {
        let processes = await this._processService.getAll();
        processes = processes.map(process => mapper(ProcessData, process));
        return res.send(
            {
                payload: processes
            }
        )
    }
}

module.exports = ProcessController;