const express = require("express");
const app = express();
const puerto = process.env.PORT;
const path = require('path');            
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views','/app/views');
app.use(express.static("/app/public"))

app.get('/', (req,res)=>{
    res.render('formulario');
});

app.post('/', (req,res)=>{
    res.render('formulario');
});

app.listen(puerto, () => {
    console.log("Ejecutando programa");
});