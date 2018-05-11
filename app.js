var req = require('request');

// initialize variables
var temp = null;
var pressure = null;
var time = null;
var wind = null;
var min = null;
var max = null;
var loc = null;
var tempAdd = " ºC"

// grab the tags
var tempE = document.getElementById("temp");
var pressE = document.getElementById("pressure");
var windE = document.getElementById("wind");
var minE = document.getElementById("min");
var maxE = document.getElementById("max");
var locE = document.getElementById("loc");

req("http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&APPID=9ab57704db7e4b0bb44c785878cd6e7b", (err, res, body) => {
	var data = JSON.parse(body);
	temp = data.list[0].main.temp;
	min = data.list[0].main.temp_min;
	max = data.list[0].main.temp_max;
	wind = data.list[0].wind.speed;
	pressure = data.list[0].main.pressure;
	loc = data.city.name;

	var d = new Date();
	var hours = d.getHours();
	var mins = d.getMinutes();
	time = hours.toString() + ":" + mins.toString();


	minE.innerHTML = "TEMP MAX <br> " + min + tempAdd
	maxE.innerHTML = "TEMP MIN <br> " + max + tempAdd
	tempE.innerHTML = temp + tempAdd
	pressE.innerHTML = "PRESSURE <br> " + pressure + " hPa"
	windE.innerHTML = "WIND <br> " + wind + " km/h"
	locE.innerHTML = time + " | " + loc
});
