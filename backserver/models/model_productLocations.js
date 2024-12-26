const Sequelize = require('sequelize');

class ProductLocations extends Sequelize.Model {
    static initiate(sequelize){
        ProductLocations.init({
            country:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            city:{
                type: Sequelize.STRING(20),
                allowNull: false,
            }
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'ProductLocations',
            tableName: 'product_locations',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}

module.exports = ProductLocations;