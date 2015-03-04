var express = require('express');
//var gcm = require('node-gcm');
var multer = require('multer');
var bodyParser = require("body-parser");
var app = express();
var done = false;
var PORT = 80;
//app.configure(function(){
//	app.use(express.bodyParser());
//});

app.use(bodyParser.urlencoded({extended:false}));
app.use(
	multer(
	{ 
		dest: './uploads/',
		rename: function (fieldname, filename) {
		    return filename+Date.now();
		},
		onFileUploadStart: function(file){
		},
		onFileUploadComplete: function (file) {
			console.log('anything?')
			console.log(file.fieldname + ' uploaded to  ' + file.path)
			done = true;
		}
	}
	)
);

app.get('/api/ping', function(req, res){
	console.log('Bot connected with IP address ' + req.ip)
	res.send('pong');
});

app.post('/api/scan', function(req, res){
	var results = req.body.results;
	console.log(results)
		res.status(204).end();
//	res.send('Got it');
});

app.post('/api/drop',function(req,res){
//	if (done==true){
		console.log(req.files);
		res.status(204).end();
//	}
});


app.listen(PORT, function(){
	console.log('Listening on port ' + PORT);
});
