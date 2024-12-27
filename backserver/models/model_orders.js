const Sequelize = require('sequelize');

class Orders extends Sequelize.Model {
    static initiate(sequelize){
        Orders.init({
            count:{
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            address:{
                type: Sequelize.STRING(300),
                allowNull:false,
            },
            addressNumber:{
                type: Sequelize.INTEGER,
                allowNull: false,

            },
            addressDetail:{
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            orderMessage:{
                type: Sequelize.STRING(200),
                allowNull: true,
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
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Orders',
            tableName: 'Orders',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }   
}

module.exports = Orders;