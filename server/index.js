const express = require('express');
const app = express();


//引入mongoose数据库驱动
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/express-api');
const db = mongoose.connection;
db.on('error',console.log);

db.once('open',()=>{console.log('success!')});

app.get('/',(req,res)=>{
    res.send('hello World')
});


app.listen(3300,()=>{
    console.log('port: 3300')
});


