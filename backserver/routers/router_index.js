const express = require('express');
const router = express.Router();
const {sequelize} = require('../models/model_index');
const Orders = require('../models/model_orders');
const Products = require('../models/model_products');
const RecommendTags = require('../models/model_recommendTags');

router.get('/',async(req,res)=>{
    //판매량,싼 가격, 비싼 가격, 추천태그 별(연령별), 신상품(지금 기준 한달 전 까지 나온 상품)
    const mainData = {};

    //판매량
    const bestSeller = await Orders.findAll({
        // SELECT 할 컬럼 지정
        attributes: [
          'product_id',
          // SUM(quantity) AS totalQuantity
          [sequelize.fn('sum', sequelize.col('count')), 'totalQuantity']
        ],
        include: [{
            model: Products,  // Products 모델과 연결
            attributes: [
              'product_name',
              'product_price',
              'product_description',
              'product_stock',
              'product_image',
              'drink_type'
            ],
            where: {
              product_kind: 'drink'
            },
            required: true  // INNER JOIN 사용
          }],
        
        // GROUP BY productId와 동일
        group: [
            'product_id',
            'product_name',
            'product_price',
            'product_description',
            'product_stock',
            'product_image',
            'drink_type'
        ],
        
        // ORDER BY SUM(quantity) DESC와 동일
        order: [
          [sequelize.fn('sum', sequelize.col('count')), 'DESC']
        ],

        // 상위 10개만 조회
        limit: 10,
        // Sequelize 모델 인스턴스가 아닌 순수 데이터 객체 반환
        raw: true
    });
    const formatBestSeller = bestSeller.map(item => ({
    product_id: item.product_id,
    totalQuantity: item.totalQuantity,
    product_name: item['Product.product_name'],
    product_price: item['Product.product_price'],
    product_description: item['Product.product_description'],
    product_stock: item['Product.product_stock'],
    product_image: item['Product.product_image'],
    drink_type: item['Product.drink_type']
    }));
    mainData.bestSeller = formatBestSeller;

    //비싼 가격
    const expensive = await Products.findAll({
        attributes: [
            'id',
            'product_name',
            'product_price',
            'product_description',
            'product_stock',
            'product_image',
            'drink_type'
        ],
        where:{
            product_kind: 'drink'
        },
        order:[
            ['product_price','DESC']
        ],
        limit: 10,
        raw:true
    });
    mainData.expensive = expensive;
   
    //싼 가격
    const cheap = await Products.findAll({
        attributes: [
            'id',
            'product_name',
            'product_price',
            'product_description',
            'product_stock',
            'product_image',
            'drink_type'
        ],
        where:{
            product_kind: 'drink'
        },
        order:[
            ['product_price','ASC']
        ],
        limit: 10,
        raw:true
    });
    mainData.cheap = cheap;

    //추천태그
    const recommend = {
        '20대 베스트': await Products.findAll({
            attributes: [
                'id',
                'product_name',
                'product_price',
                'product_description',
                'product_stock',
                'product_image',
                'drink_type'
            ],
            include: [{
                model: RecommendTags,
                where: {
                    tag_name: '20대 베스트'
                },
                through: {
                    attributes: []  // 중간에 두 테이블을 연결하는 테이블 속성은 제외.
                }
            }],
            where: {
                product_kind: 'drink'
            },
            raw: true
        }),
        '30대 베스트': await Products.findAll({
            attributes: [
                'id',
                'product_name',
                'product_price',
                'product_description',
                'product_stock',
                'product_image',
                'drink_type'
            ],
            include: [{
                model: RecommendTags,
                where: {
                    tag_name: '30대 베스트'
                },
                through: {
                    attributes: []  // 중간에 두 테이블을 연결하는 테이블 속성은 제외.
                }
            }],
            where: {
                product_kind: 'drink'
            },
            raw: true
        })
    };
    mainData.recommend = recommend;
    
    //신상품
    const newProduct = await Products.findAll({
        attributes: [
            'id',
            'product_name',
            'product_price',
            'product_description',
            'product_stock',
            'product_image',
            'drink_type'
        ],
        where:{
            product_kind: 'drink'
        },
        order:[
            ['created_at','DESC']
        ],
        limit: 10,
        raw:true
    })
    mainData.newProduct = newProduct;
  

    res.json(mainData);
});

module.exports = router;
