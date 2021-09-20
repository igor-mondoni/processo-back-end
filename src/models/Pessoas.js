const { Model, DataTypes } = require('sequelize');

class Pessoas extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            surname: DataTypes.STRING,
            email: DataTypes.STRING,
            zip_code: DataTypes.STRING,
            state: DataTypes.STRING,
            city: DataTypes.STRING,
            street: DataTypes.STRING,
            doc_number: DataTypes.STRING,
            cellphone: DataTypes.STRING,
            nationality: DataTypes.STRING,
            createdAt: {
                field: 'created_at',
                type: DataTypes.DATE,
            },
            updatedAt: {
                field: 'updated_at',
                type: DataTypes.DATE,
            },
        }, {
            sequelize,
            tableName: 'tb_people',
        })
    }
}

module.exports = Pessoas;