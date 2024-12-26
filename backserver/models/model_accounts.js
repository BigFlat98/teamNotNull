const Sequelize = require('sequelize');

class Accounts extends Sequelize.Model {
  static initiate(sequelize) {
    Accounts.init({
        email:{
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        password:{
            type: Sequelize.STRING(200),
            allowNull: true,
        },
        name:{
            type: Sequelize.STRING(20),
            allowNull: true,
        },
        birth:{
            type: Sequelize.DATEONLY,
            allowNull: true,
        },
        nickname:{
            type: Sequelize.STRING(25),
            allowNull: true,
        },
        phone_number:{
            type: Sequelize.STRING(15),
            allowNull: true,
        },
        address:{
            type: Sequelize.STRING(100),
            allowNull: true,
        },
        addressNumber:{
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        addressDetail:{
            type: Sequelize.STRING(100),
            allowNull: true,
        },
        delete_time:{
            type: Sequelize.DATE,
            allowNull: true,
        },
        ratingPoint:{
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        savedMoney:{
            type: Sequelize.INTEGER,
            allowNull: true,
        }
    },{
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Accounts',
        tableName: 'Accounts',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    })
  }
}
//관계 설정은 index에서 한번에 진행.
module.exports = Accounts;