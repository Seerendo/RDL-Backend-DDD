const { Op } = require('sequelize');

class ParamRepository {
    constructor({ db }) {
        this._db = db;
    }

    //Listar todo
    getAll() {
        return this._db['param'].findAll();
    }

    //Buscar por ID
    getItemId(id) {
        return this._db['param'].findOne({
            where: {
                paramId: id
            }
        });
    }

    //Buscar por nombre
    getItemsName(query) {
        return this._db['param'].findAll({
            where: {
                description: {
                    [Op.like]: '%'+query+'%'
                }
            }
        });
    }

    //Crear Parámetro
    createParam(query) {
        return this._db['param'].create(query);
    }

    //Acutalizar Parámetro
    updateParam(query, id) {
        return this._db['param'].update(query, {
            where: {
                paramId: id
            }
        });
    }

    //Eliminar parámetro por id
    deleteParam(id) {
        return this._db['param'].destroy({
            where: {
                paramId: id
            }
        });
    }

}

module.exports = ParamRepository;