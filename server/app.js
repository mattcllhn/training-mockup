var express = require('express');
var app = express();
var path = require ('path');
// var sass = require('node-sass');
app.use(express.static('public'));
app.listen(3000,function(){

  console.log('listening on 3000');
});
app.get('/', function(req,res){
  res.send(path.resolve('index.html'));

});
// sass.render({
//   file: path.resolve('style.scss');
// }, function(err, res) {
//   console.log('successfully rendering sass, yo');
//   res.send(path.resolve('main.css'));
// });
