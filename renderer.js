// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')

var iconChangers = document.querySelectorAll('.icon-changer')

iconChangers.forEach(function (button) {
  button.addEventListener('click', function () {
    var type = this.dataset.type
    ipcRenderer.send('change-icon', { type: type })
  })
})