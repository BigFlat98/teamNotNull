const Sequelize = require('sequelize');

class Coupons extends Sequelize.Model {
    static initiate(sequelize){
        Coupons.init({
            coupon_name:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            coupon_discount_rate:{
                type: Sequelize.FLOAT,
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Coupons',
            tableName: 'Coupons',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}

module.exports = Coupons;