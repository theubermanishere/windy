var req = require('request');
var keys = require('./key');

// initialize variables
var temp = null;
var pressure = null;
var time = null;
var wind = null;
var min = null;
var max = null;
var loc = null;
var tempAdd = " ºC"

if (keys.units == "imperial") tempAdd = " ºF";

// grab the tags
var tempE = document.getElementById("temp");
var pressE = document.getElementById("pressure");
var windE = document.getElementById("wind");
var minE = document.getElementById("min");
var maxE = document.getElementById("max");
var locE = document.getElementById("loc");

var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + keys.city + "&units=" + keys.units + "&APPID=" + keys.APPID
console.log(keys)

req(url, (err, res, body) => {
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


	minE.innerHTML = "TEMP MIN <br> " + min + tempAdd
	maxE.innerHTML = "TEMP MAX <br> " + max + tempAdd
	tempE.innerHTML = temp + tempAdd
	pressE.innerHTML = "PRESSURE <br> " + pressure + " hPa"
	windE.innerHTML = "WIND <br> " + wind + " km/h"
	locE.innerHTML = time + " | " + loc
});
