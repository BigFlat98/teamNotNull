require('dotenv').config();

const express = require('express');
const {sequelize} = require('./models/model_index.js');
const cors = require('cors');
const path = require('path');
const indexRouter = require('./routers/router_index.js');

//서번 생성
const app = express();
app.set('port',process.env.PORT);

//데이터베이스 연결
sequelize.sync({force:false})
.then(()=>{
    console.log('데이터베이스 연결 성공');
})
.catch((error)=>{
    console.log('데이터베이스 연결 실패');
    console.error(error);
});

//미들웨어 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/',express.static(path.join(__dirname,'uploads')));
const corsOptions = {
    origin: process.env.FRONT_URL,
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));




//라우터 
app.use('/',indexRouter);



app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기중');
});

