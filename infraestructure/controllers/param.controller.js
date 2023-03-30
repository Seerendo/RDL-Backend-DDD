const mapper = require('automapper-js');
const { ParamData } = require('../data');

class ParamController {
    constructor({ ParamService }) {
        this._paramService = ParamService;
    }

    async getAllParams(req, res) {
        let params = await this._paramService.getAllParams();
        params = params.map(param => mapper(ParamData, param));
        return res.status(200).send({ payload: params});
    }

    async getParamById(req, res) {
        const {body} = req;
        let param = await this._paramService.getParamById(body.paramId);
        param = mapper(ParamData, param);
        return res.status(200).send({ payload: param});
    }

    async getParamByDescription(req, res) {
        const {body} = req;
        let param = await this._paramService.getParamById(body.description);
        param = mapper(ParamData, param);
        return res.status(200).send({ payload: param});
    }

    async getParamByField(req, res) {
        const {body} = req;
        let param = await this._paramService.getParamByField(body.field);
        param = mapper(ParamData, param);
        return res.status(200).send({ payload: param});
    }

    async getParamByFieldAndDescription(req, res) {
        const {body} = req;
        let param = await this._paramService.getParamByFieldAndDescription(body.description,body.field);
        param = mapper(ParamData, param);
        return res.status(200).send({ payload: param});
    }

    async getParamByActivated(req, res) {
        const {body} = req;
        let param = await this._paramService.getParamByActivated(body.active);
        param = mapper(ParamData, param);
        return res.status(200).send({ payload: param});
    }

    async getParamByCuali(req, res) {
        const {body} = req;
        let param = await this._paramService.getParamByCuali(body.cuali);
        param = mapper(ParamData, param);
        return res.status(200).send({ payload: param});
    }

    async createParam(req, res) {
        const {body} = req;
        let param = await this._paramService.createParam(body);
        param = mapper(ParamData, param);
        return res.status(201).send({ payload: param});
    }

    async createParam(req, res) {
        const {body} = req;
        let param = await this._paramService.getParamByCuali(body);
        param = mapper(ParamData, param);
        return res.status(201).send({ payload: param});
    }

    async updateParam(req, res) {
        const {body} = req;
        let param = await this._paramService.updateParam(body);
        param = mapper(ParamData, param);
        return res.status(201).send({ payload: param});
    }
}

module.exports = ParamController;