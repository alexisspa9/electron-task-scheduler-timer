let start_day_time;
let stop_day_time = '';
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

  String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    // if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}


  function startWorkTime() {
      if (start_day_time == null) {
      start_day_time = new Date();
      }
      workTime(total_work_time_element);
      work_timer_active = true;
      console.log(start_day_time);
  }

  function stopWorkTime() {
    stop_day_time = new Date();
    clearTimeout(work_timer);
    work_timer_active = false;
    console.log(stop_day_time);
  }
