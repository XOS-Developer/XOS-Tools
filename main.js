const { app, BrowserWindow, Tray, Menu } = require("electron");
const path = require("path");

let mainWindow;
let tray;
let trayWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, "icon.ico"),
        show: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true
        }
    });

    mainWindow.loadFile("full_window.html");


    // Hide instead of closing
    mainWindow.on("close", (event) => {
        if (!app.isQuiting) {
            event.preventDefault();
            mainWindow.hide();
        }
    });
}


function createTray() {

    tray = new Tray(path.join(__dirname, "icon.ico"));

    tray.setToolTip("XOS Tools");


    tray.on("click", () => {

        if (trayWindow) {
            trayWindow.close();
            trayWindow = null;
            return;
        }


        trayWindow = new BrowserWindow({
    width: 500,
    height: 600,
    frame: false,
    resizable: false,
    show: false,
    alwaysOnTop: true,
    icon: path.join(__dirname, "icon.ico"),
    webPreferences: {
        preload: path.join(__dirname, "preload.js"),
        contextIsolation: true
    }
});


        trayWindow.loadFile("system_tray.html");


        trayWindow.once("ready-to-show", () => {
            const cursor = require("electron").screen.getCursorScreenPoint();

trayWindow.setPosition(
    cursor.x - 250,
    cursor.y - 600
);
            trayWindow.show();
        });


        trayWindow.on("blur", () => {
            trayWindow.close();
            trayWindow = null;
        });

    });
}


app.whenReady().then(() => {

    createWindow();
    createTray();


    // Windows startup
    app.setLoginItemSettings({
        openAtLogin: true,
        path: process.execPath
    });

});


app.on("before-quit", () => {
    app.isQuiting = true;
});


app.on("window-all-closed", () => {
    // Keep tray app alive
});