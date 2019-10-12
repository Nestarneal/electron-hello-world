const { app, BrowserWindow } = require('electron')
const path = require('path')

let window = null

const createWindow = () => {
  window = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
  })

  window.loadFile('index.html')
  window.webContents.openDevTools()

  window.on('closed', () => {
    window = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})
