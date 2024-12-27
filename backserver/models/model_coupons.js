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
            modelName: 'Coupons',
            tableName: 'Coupons',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}

module.exports = Coupons;