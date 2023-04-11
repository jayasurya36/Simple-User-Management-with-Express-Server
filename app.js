require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const app = express();
const routes = require('./routes/user.route');

app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , ejs);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/' , routes);
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Connected to Database Successfully");
}).catch(err =>{
    console.log(err.message);
})

app.listen(process.env.PORT , ()=>{
    console.log(`Server listening to the port ${process.env.PORT}`);
})