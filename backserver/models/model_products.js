const Sequelize = require('sequelize');

class Products extends Sequelize.Model {
    static initiate(sequelize){
        Products.init({
            product_name:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            product_price:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            product_description:{
                type: Sequelize.TEXT,
                allowNull: false,
            },
            product_stock:{//재고
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            product_image:{
                type: Sequelize.STRING(300),
                allowNull: true,
            },
            drink_type:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            product_kind:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Products',
            tableName: 'Products',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}

module.exports = Products;