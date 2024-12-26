const Sequelize = require('sequelize');

class SupplyFactory extends Sequelize.Model {
    static initiate(sequelize){
        SupplyFactory.init({
            factory_name:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            factory_location:{
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            factory_call_number:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            representative:{//담당자
                type: Sequelize.STRING(20),
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'SupplyFactory',
            tableName: 'SupplyFactory',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}

module.exports = SupplyFactory;