const { Op } = require('sequelize');

class ParamRepository {
    constructor({ db }) {
        this._db = db;
    }

    getAllParams() {
        return this._db['param'].findAll();
    }

    getParamById(id) {
        return this._db['param'].findOne({
            where: {
                paramId: id
            }
        });
    }

    getParamByDescription(query) {
        return this._db['param'].findAll({
            where: {
                description: {
                    [Op.like]: '%'+query+'%'
                },
            },
        });
    }

    getParamByField(query) {
        return this._db['param'].findAll({
            where: {
                field: {
                    [Op.like]: '%'+query+'%'
                },
            },
        });
    }

    getParamByFieldAndDescription(description, field) {
        return this._db['param'].findAll({
            where: {
                description: {
                    [Op.like]: '%'+description+'%'
                },
                [Op.and]: [{
                    [Op.like]: '%'+field+'%'
                }],
            },
        });
    }

    getParamByActivated(query) {
        return this._db['param'].findAll({
            where: {
                active: query
            }
        });
    }

    getParamByCuali(query) {
        return this._db['param'].findAll({
            where: {
                cuali: query
            }
        });
    }

    createParam(query) {
        return this._db['param'].create(query);
    }

    updateParam(query, id) {
        return this._db['param'].update(query, {
            where: {
                paramId: id
            }
        });
    }
}

module.exports = ParamRepository;