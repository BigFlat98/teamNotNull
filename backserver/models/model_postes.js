const Sequelize = require('sequelize');

class Postes extends Sequelize.Model {
    static initiate(sequelize){
        Postes.init({
            title:{
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            post_image:{
                type: Sequelize.STRING(300),
                allowNull: true,
            },
            post_content:{
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
                allowNull: true,
            },
            latitude:{
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            longitude:{
                type: Sequelize.FLOAT,
                allowNull: true,
            },
            post_kind:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Postes',
            tableName: 'Postes',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}

module.exports = Postes; 