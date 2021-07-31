const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { stdout, stderr } = require('process');
//const Sudoer = require('electron-sudo').default;

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 375,
    height: 550,
    frame: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }

  });
  mainWindow.setMenuBarVisibility(false)

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));


};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

ipcMain.on("connect-to-server", (event, args) => {
  // Option 1: sudo-prompt, tests throw error running
  // openvpn, but can run echo hello without an issue
  //
  //  sudo.exec('', options,
  //    function (error, stdout, stderr) {
  //      if (error) throw error;
  //      console.log(args, 'stdout: ' + stdout);
  //    }
  //  );
  //
  // Option 2: electron-sudo, not yet tested
  //
  // sudoer.spawn('openvpn', '--config client.ovpn');
  
  const { spawn } = require('child_process');
const ls = spawn('openvpn', ['--config', 'resources\\app\\src\\client.ovpn']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

})
  
  // Handle creating/removing shortcuts on Windows when installing/uninstalling.
  if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
  } 