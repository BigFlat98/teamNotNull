const Sequelize = require('sequelize');

class Replies extends Sequelize.Model {
    static initiate(sequelize){
        Replies.init({
            reply_content:{
                type: Sequelize.TEXT,
                allowNull: false,
            },
            created_at:{
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            }, 
            updated_at:{
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
            like_count:{
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            }
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Replies',
            tableName: 'Replies',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}

module.exports = Replies;