'use strict';
const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const defaultSeconds = 120;
const ipc = electron.ipcMain
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
var barWidth;

var timeSeconds = process.argv.length > 2? parseInt(process.argv[2])*60:defaultSeconds;
function createWindow () {
  console.log(timeSeconds,JSON.stringify(process.argv))
  var size = electron.screen.getPrimaryDisplay().workAreaSize;
  var barWidth = size.width;
  var windowOpts = {
    hasShadow:false,
    transparent: true,
    frame: false,
    alwaysOnTop:true,
    y:0 ,
    x:0,
    // 'skip-taskbar':true,
    height:4,
    width:size.width,
    // type:"desktop",
    // enableLargerThanScreen:true
    // titleBarStyle:"hidden"
  };

  mainWindow = new BrowserWindow(windowOpts);

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
  setTimeout(function(){
      mainWindow.webContents.send('startCountdown', {seconds:timeSeconds,width:barWidth});
  },500)

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function (event) {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  console.log("Activate")
  mainWindow.webContents.send('activate', event);

  if (mainWindow === null) {
    createWindow();
  }


});
