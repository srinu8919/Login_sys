const  express = require('express');
const app = express()
app.set('view engine' ,'ejs');
const bodyparser=require("body-parser");
const fs = require('fs');
app.use(bodyparser.urlencoded({ extended: false}))

var a = JSON.parse(fs.readFileSync("quiz.json"))
app.get('/',function(req,res){
    res.render('index',{"questions": a })
});

app.listen(5000);