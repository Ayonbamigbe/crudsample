const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/emp')
var app = express();

app.use('/emp', router)

app.get('/', (req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('sup y\'all')
})

 mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true});
 mongoose.connection.once('open',()=>{
     console.log('Database connected Successfully');
 }).on('error', (err)=>{
     console.log('Error', err);
 })

app.listen(8000, ()=>{console.log('server is up on port 8k')});