const Sequelize = require('sequelize');

class Searched extends Sequelize.Model {
    static initiate(sequelize){
        Searched.init({
            search_keyword:{
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            search_time:{
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            }
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Searched',
            tableName: 'Searched',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}

module.exports = Searched;