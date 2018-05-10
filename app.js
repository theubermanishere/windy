var req = require('request');

var temp = null;
var pressure = null;
var time = null;
var wind = null;
var min = null;
var max = null;

req("http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&APPID=9ab57704db7e4b0bb44c785878cd6e7b", (err, res, body) => {
	var data = JSON.parse(body);
	temp = data.list[0].main.temp;
	wind = data.list[0].main.wind;
	min = data.list[0].main.temp_min;
	max = data.list[0].main.temp_max;
	wind = data.list[0].main.wind;
});

var d = new Date();
var hours = d.getHours():
var min = d.getMinutes();
time = hours.toString() + ":" + min.toString();

var tempE = document.getElementById("tempE");
var pressE = document.getElementById("pressure");
var windE = document.getElementById("wind");
var minE = document.getElementeById("min");
var maxE = document.getElementById("max");

minE.innerHTML = "Firue boy";

document.write('fire')
