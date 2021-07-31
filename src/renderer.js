const electron = require('electron')
const ipcRenderer  = electron.ipcRenderer

function connect() {
                
    console.log("hello");
    
    ipcRenderer.send("connect-to-server", "Connection requested [OK]")
}


