// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// const { ipcRenderer } = require('electron')
// window._saved = false
// window.onbeforeunload = (e) => {
//     confirm("Are you sure?");
//     if (!window.saved) {
//         callSaveAPI(() => {
//             // success? quit the app
//             window._saved = true
//             ipcRenderer.send('app_quit')
//             window.onbeforeunload = null
//         })
//     }
//     e.returnValue = false
// }
const { ipcRenderer } = require('electron')



stop_day_element.addEventListener("click", function() {

    if (work_timer_active) {
    stopWorkTime();
    ipcRenderer.send('save-state', appState)
    }
  });


//   printing_element.addEventListener("click", function() {
//     if (!work_timer_active) {
//         console.log("You have to start the day first")
//         return;
//     }
//     if (task_running) {
//         stopTask();
//         startSpecialTask("printing");
//     } else {
//         console.log("started")
//         startSpecialTask("printing");
//         ipcRenderer.sendSync('open-firefox', null)
//     }
// });
  