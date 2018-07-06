const express = require('express');
const app = express();
const bodyParser = require('body-parser');


//引入mongoose数据库驱动
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/express-api');
const db = mongoose.connection;

const Movie = require('./models/movie');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

db.on('error', console.log);

db.once('open', () => {
    let movie = new Movie({title: '齐天大圣'});

    movie.save(function (error) {
        if (error) {
            console.log(error)
        }
    });
    console.log('success!')
});

app.get('/', (req, res) => {
    res.send('hello World')
});

app.get('/api',(req,res)=>{
    res.json({message:'get request'})
});

app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json({message:'post request'})
});



app.listen(3300, () => {
    console.log('port: 3300')
});


