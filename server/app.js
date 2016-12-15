var express = require('express');
var app = express();
var path = require ('path');
var sass = require('node-sass');


app.use(express.static('public'));

app.use('/bootstrap', express.static(path.resolve ('./node_modules/bootstrap/dist')));
app.use('/angular', express.static(path.resolve ('./node_modules/angular')));
app.use('/jquery', express.static(path.resolve ('./node_modules/jquery')));
app.use('/font-awesome', express.static(path.resolve ('./node_modules/font-awesome')));




app.listen(3000,function(){

  console.log('listening on 3000');
});

app.get('/', function(req,res){
  res.send(path.resolve('index.html'));

});





