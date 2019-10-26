// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const { ipcMain } = require('electron')
const fs = require('fs');
const storage = require('electron-storage');
ipcMain.on('save-state', (event, arg) => {
  let data = JSON.stringify(arg);
  let current_date = new Date();
  let file_name = "./data/" + current_date.getDay() + "_" + current_date.getMonth() + "_" + current_date.getFullYear() + ".json";
  fs.writeFileSync(file_name, data);
  storage.set(file_name, data, (err) => {
    if (err) {
      console.error(err)
    }
  });
});


// var child = require('child_process').execFile;
// var executablePath = "C:\\Program Files\\Mozilla Firefox\\firefox.exe";
// ipcMain.on('open-firefox', (event, arg) => {
//   child(executablePath, function(err, data) {
//       if(err){
//         console.error(err);
//         return;
//       }
  
//       console.log(data.toString());
//   });
// });

// var ps = require('ps-node');

// A simple pid lookup 
// ps.lookup({
//     command: 'node',
//     psargs: 'ux'
//     }, function(err, resultList ) {
//     if (err) {
//         throw new Error( err );
//     }

//     resultList.forEach(function( process ){
//         if( process ){
//             console.log( 'PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments );
//         }
//     });
// });



// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 300,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  })

  //mainWindow.maximize()

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  mainWindow.on('close', (e) => {
    if (mainWindow) {
      mainWindow.webContents.executeJavaScript("alert('Παρακαλώ τερμάτιστε την τρέχουσα ημέρα!');");
      e.preventDefault();
      console.log( mainWindow.webContents);
      mainWindow.webContents.send('app-close');
    }
  });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
