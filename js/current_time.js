const current_time_element = document.getElementById('current_time');


function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

function startTime(ele) {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  ele.innerHTML = h + ":" + m;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime(current_time_element);