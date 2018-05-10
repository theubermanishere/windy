var req = require('request');

var temp = null;
var pressure = null;
var time = null;
var wind = null;
var min = null;
var max = null;

req("http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=9ab57704db7e4b0bb44c785878cd6e7b", (err, res, body) => {
	var data = JSON.parse(body);
});

document.write('fire')
