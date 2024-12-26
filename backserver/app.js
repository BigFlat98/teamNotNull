require('dotenv').config();

const express = require('express');
const {sequelize} = require('./models/model_index.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();
app.set('port',process.env.PORT || 3000);

//데이터베이스 연결
sequelize.sync({force:false})
.then(()=>{
    console.log('데이터베이스 연결 성공');
})
.catch((error)=>{
    console.log('데이터베이스 연결 실패');
    console.error(error);
})

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기중');
});

