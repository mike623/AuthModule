var express = require('express');
var jwt = require('express-jwt');
var jsonwebtoken = require('jsonwebtoken');
const bearerToken = require('express-bearer-token');

var app = express();

app.use(bearerToken());
app.use(jwt({ secret: precess.env.SECRET}).unless({path: ['/token']}));


app.get("/",function(req, res){
	console.log(jsonwebtoken.decode(req.token,{complete: true}).payload)
	console.log(jsonwebtoken.decode(req.token,{complete: true}).header)
	res.status(200).json({});
})

app.listen(3090 , function () {
  console.log('ready');
});