# 🛠️ XOS-Tools

**XOS-Tools** is a Windows customization and utility toolbox built with **Electron, HTML, CSS, and JavaScript**.

It provides a modern interface for accessing useful Windows tools, customization options, and productivity features in one place.

---

## ✨ Features

* 🖥️ Modern Windows-style interface
* ⚙️ System customization tools
* 🧰 Utility toolbox
* 🔍 OCR support powered by Tesseract.js
* 🌙 Dark-themed UI
* 📌 System tray support
* 🚀 Windows startup support
* 📦 MSI installer support

---

## 📁 Project Structure

```
XOS-Tools
│
├── full_window.html     # Main application interface
├── system_tray.html     # System tray interface
├── main.js              # Electron main process
├── preload.js           # Secure Electron bridge
├── package.json         # Project configuration
├── package-lock.json    # Dependency lock file
├── icon.ico             # Application icon
└── logo.png             # Application logo
```

---

## 🚀 Running From Source

### Requirements

* Node.js
* npm
* Windows operating system

---

### Install Dependencies

Clone the repository or download the source code.

Open a terminal inside the project folder:

```bash
npm install
```

---

### Start XOS-Tools

Run:

```bash
npm start
```

---

## 📦 Building XOS-Tools

Create the Windows installer:

```bash
npm run build
```

The output will be created inside:

```
dist/
```

---

## 🏗️ Supported Builds

XOS-Tools supports:

* ✅ Windows x64
* ✅ Windows ARM64
* ⚠️ Windows x86 (depends on Electron version support)

---

## 🖥️ Technologies Used

* Electron
* HTML5
* CSS3
* JavaScript
* Node.js
* Tesseract.js

---

## 🔒 Privacy

XOS-Tools is designed to run locally on your device.

No unnecessary data collection is included.

---

## 📜 License

This project is licensed under the ISC License.

---

## 👤 Developer

Created by **XOS Developer**

Part of the XOS ecosystem.
