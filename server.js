var express = 			require('express');
var app = 				express();

app.get('/', function (req,res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/libs', express.static(__dirname + '/public/libs')); 

// REST API
app.listen(3000, function() {
	console.log('listening on port 3000');
});