const Sequelize = require('sequelize');
const Accounts = require('./model_accounts.js');
const Buckets = require('./model_buckets.js');
const Coupons = require('./model_coupons.js');
const Likes = require('./model_likes.js');
const Orders = require('./model_orders.js');
const Postes = require('./model_postes.js');
const ProductLocations = require('./model_productLocations.js');
const Products = require('./model_products.js');
const Ratings = require('./model_ratings.js');
const RecommendTags = require('./model_recommendTags.js');
const Replies = require('./model_replies.js');
const Searched = require('./model_searched.js');
const SupplyFactory = require('./model_supplyFactory.js');




//환경변수 설정
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

//db 연결
const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

//테이블 생성
db.Accounts = Accounts;
Accounts.initiate(sequelize);

db.Buckets = Buckets;
Buckets.initiate(sequelize);

db.Coupons = Coupons;
Coupons.initiate(sequelize);

db.Likes = Likes;
Likes.initiate(sequelize);

db.Orders = Orders;
Orders.initiate(sequelize);

db.Postes = Postes;
Postes.initiate(sequelize);

db.ProductLocations = ProductLocations;
ProductLocations.initiate(sequelize);

db.Products = Products;
Products.initiate(sequelize);

db.Ratings = Ratings;
Ratings.initiate(sequelize);

db.RecommendTags = RecommendTags;
RecommendTags.initiate(sequelize);

db.Replies = Replies;
Replies.initiate(sequelize);

db.Searched = Searched;
Searched.initiate(sequelize);

db.SupplyFactory = SupplyFactory;
SupplyFactory.initiate(sequelize);


//테이블 관계 설정
//Products
db.Products.belongsTo(db.ProductLocations,{foreignKey: { name: 'product_location_id', allowNull: true }, targetKey:'id'});
db.ProductLocations.hasMany(db.Products,{foreignKey: { name: 'product_location_id', allowNull: true }, sourceKey:'id'});
db.Products.belongsTo(db.SupplyFactory,{foreignKey: { name: 'supply_factory_id', allowNull: true }, targetKey:'id'});
db.SupplyFactory.hasMany(db.Products,{foreignKey: { name: 'supply_factory_id', allowNull: true }, sourceKey:'id'});
// N:M
db.Products.belongsToMany(db.RecommendTags, { through: 'ProductsRecommendTags', foreignKey: 'product_id' });
db.RecommendTags.belongsToMany(db.Products, { through: 'ProductsRecommendTags', foreignKey: 'recommend_tag_id' });
db.Products.belongsToMany(db.Accounts, { through: 'Wishes', foreignKey: 'product_id' }); //Wishes -> 찜 테이블 명
db.Accounts.belongsToMany(db.Products, { through: 'Wishes', foreignKey: 'account_id' });



//orders
db.Orders.belongsTo(db.Accounts,{foreignKey: { name: 'account_id'}, targetKey:'id'});
db.Accounts.hasMany(db.Orders,{foreignKey: { name: 'account_id'}, sourceKey:'id'});
db.Orders.belongsTo(db.Products,{foreignKey: { name: 'product_id',allowNull: true}, targetKey:'id'});
db.Products.hasMany(db.Orders,{foreignKey: { name: 'product_id',allowNull: true}, sourceKey:'id'});

//Buckets
db.Buckets.belongsTo(db.Accounts,{foreignKey: { name: 'account_id'}, targetKey:'id'});
db.Accounts.hasMany(db.Buckets,{foreignKey: { name: 'account_id'}, sourceKey:'id'});
db.Buckets.belongsTo(db.Products,{foreignKey: { name: 'product_id',allowNull: true}, targetKey:'id'});
db.Products.hasMany(db.Buckets,{foreignKey: { name: 'product_id',allowNull: true}, sourceKey:'id'});

//HaveCoupons
db.Coupons.belongsToMany(db.Accounts, { through: 'HaveCoupons', foreignKey: 'coupon_id' }); //HaveCoupons -> 쿠폰 테이블 명
db.Accounts.belongsToMany(db.Coupons, { through: 'HaveCoupons', foreignKey: 'account_id' });  

//Postes
db.Postes.belongsTo(db.Accounts,{foreignKey: { name: 'account_id'}, targetKey:'id'});
db.Accounts.hasMany(db.Postes,{foreignKey: { name: 'account_id'}, sourceKey:'id'});

//Likes
db.Likes.belongsTo(db.Postes,{foreignKey: { name: 'post_id'}, targetKey:'id'});
db.Postes.hasMany(db.Likes,{foreignKey: { name: 'post_id'}, sourceKey:'id'});
db.Likes.belongsTo(db.Replies,{foreignKey: { name: 'reply_id'}, targetKey:'id'});
db.Replies.hasMany(db.Likes,{foreignKey: { name: 'reply_id'}, sourceKey:'id'});

//Replies
db.Replies.belongsTo(db.Postes,{foreignKey: { name: 'post_id'}, targetKey:'id'});
db.Postes.hasMany(db.Replies,{foreignKey: { name: 'post_id'}, sourceKey:'id'});
db.Replies.belongsTo(db.Accounts,{foreignKey: { name: 'account_id'}, targetKey:'id'});
db.Accounts.hasMany(db.Replies,{foreignKey: { name: 'account_id'}, sourceKey:'id'});
db.Replies.belongsTo(db.Products,{foreignKey: { name: 'product_id'}, targetKey:'id'});
db.Products.hasMany(db.Replies,{foreignKey: { name: 'product_id'}, sourceKey:'id'});

//account
db.Accounts.belongsTo(db.Ratings,{foreignKey: { name: 'rating_id'}, targetKey:'id'});
db.Ratings.hasMany(db.Accounts,{foreignKey: { name: 'rating_id'}, sourceKey:'id'});

module.exports = db;
