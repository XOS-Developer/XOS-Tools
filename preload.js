const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {

    toggleAlwaysOnTop() {

        return ipcRenderer.invoke("toggleAlwaysOnTop");

    },

    notify(title, body) {

        ipcRenderer.invoke("showNotification", title, body);

    }

});