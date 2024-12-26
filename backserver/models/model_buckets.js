const Sequelize = require('sequelize');

class Buckets extends Sequelize.Model {
    static initiate(sequelize){
        Buckets.init({
            count:{
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            total_price:{
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Buckets',
            tableName: 'Buckets',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}

module.exports = Buckets;