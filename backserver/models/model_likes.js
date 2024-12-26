const Sequelize = require('sequelize');

class Likes extends Sequelize.Model {
    static initiate(sequelize){
        Likes.init({
            who_liked:{
                type: Sequelize.STRING(20),
                allowNull: false,
                unique:true
            }
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Likes',
            tableName: 'Likes',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}

module.exports = Likes;