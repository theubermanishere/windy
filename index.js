const electron = require('electron')
const {app} = electron;
var {BrowserWindow} = electron

app.on('ready', function() {
	var mainWindow = new BrowserWindow({
		width: 700,
		height: 400,
		frame: false
	})
	mainWindow.loadURL('file://' + __dirname + '/index.html')
//	mainWindow.webContents.openDevTools()

});
