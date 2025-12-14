const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: "AutoPrompt",
    icon: path.join(__dirname, "icon.ico"),
    webPreferences: {
      contextIsolation: true,
    },
  });

  // Ẩn menu File/Edit/View
  win.setMenu(null);

  if (!app.isPackaged) {
    win.loadURL("http://localhost:5173");
    win.webContents.openDevTools();
  } else {
    const indexPath = path.join(__dirname, "dist", "index.html");
    win.loadURL(
      url.format({
        pathname: indexPath,
        protocol: "file:",
        slashes: true,
      })
    );
  }
}

app.whenReady().then(() => createWindow());
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
