const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug');

RequestTime = (req,res,next) => {
    let requestHour = new Date().getHours();
    let requestDay = new Date().getUTCDay();
    if (requestDay <=5 && requestDay >=1 && requestHour >=9 && requestHour <=17) {
        next();
    }else {
        res.render('closed')
    }
    }

app.get('/home', RequestTime, function (req, res) {
    res.render('home');
});

app.get('/services', RequestTime, function (req, res) {
    res.render('services');
    });

app.get('/contact', RequestTime, function (req, res) {
    res.render('contact');
    });  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/home`)
})