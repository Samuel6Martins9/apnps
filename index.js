const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Olá Samuel')
})

app.get('/mensagem', function(req,res){
    res.send('Essa mensagem é automática')
})

app.get('/layout', function(req,res){
    res.send('Layout')
})

app.listen(3000,function(){
    console.log('Conexão inicializada')
})