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
    start_day_element.disabled = true;
    stop_day_element.disabled = false;
}

function stopWorkTime() {
  appState.stop_day_time = new Date();
  clearTimeout(work_timer);
  work_timer_active = false;
  start_day_element.disabled = false;
  stop_day_element.disabled = true;
  console.log(appState);
}
