const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))

app.get('/', function(req,res){
    res.render('index.ejs',{})
})

app.get('/usuarios',function(req,res){
    res.render('usuarios.ejs', { usuarios:[
        {nome:'Samuel',email:'samueldsm100@outlook.com'},
        {nome:'Davi',email:'sdsdavi@gmail.com'},
        {nome:'Rodrigo',email:'rodrigorodr@hotmail.com'},
        {nome:'João',email:'joaoo@outlook.com'},
        {nome:'Maria',email:'maria@gmail.com'},
        {nome:'Ana',email:'anasp@gmail.com'}
    ] })
})

app.listen(3000,function(){
    console.log('Conexão inicializada')
})