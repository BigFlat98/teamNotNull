const Sequelize = require('sequelize');

class Ratings extends Sequelize.Model {
    static initiate(sequelize){
        Ratings.init({
            rating_name:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            saved_money_rate:{
                type: Sequelize.FLOAT,
                allowNull: false,
                defaultValue: 0,
            },
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Ratings',
            tableName: 'Ratings',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}

module.exports = Ratings;