let work_timer;
let work_timer_active = false;
let work_time_secs = 0;

function workTime(ele) {
  work_time_secs++
  ele.innerHTML = work_time_secs.toString().toHHMMSS();
  work_timer = setTimeout(function() {
      workTime(total_work_time_element);
  }, 1000);
}

function startWorkTime() {
    if (appState.start_day_time == '') {
    appState.start_day_time = new Date();
    }
    workTime(total_work_time_element);
    work_timer_active = true;
}

function stopWorkTime() {
  appState.stop_day_time = new Date();
  clearTimeout(work_timer);
  work_timer_active = false;
  console.log(appState);
}
