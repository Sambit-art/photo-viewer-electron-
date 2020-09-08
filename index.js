const path = require("path");
const { app, BrowserWindow, remote } = require("electron");

function createWindow() {
  const windowOptions = {
    width: 700,
    // maxWidth: 450,
    height: 800,
    title: "SAMBIT",
    webPreferences: {
      nodeIntegration: true,
      devTools: false,
    },
    // frame: false
  };

  mainWindow = new BrowserWindow(windowOptions);
  mainWindow.loadURL(path.join("file://", __dirname, "/index.html"));
}

app.on("ready", () => {
  createWindow();
});
