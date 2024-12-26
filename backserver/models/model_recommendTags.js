const Sequelize = require('sequelize');

class RecommendTags extends Sequelize.Model {
    static initiate(sequelize){
        RecommendTags.init({
            tag_name:{
                type: Sequelize.STRING(20),
                allowNull: false,
            }
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'RecommendTags',
            tableName: 'RecommendTags',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}

module.exports = RecommendTags;