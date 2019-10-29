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


function formatDate(date_to_format) {
var dd = date_to_format.getDate();
var mm = date_to_format.getMonth() + 1; //January is 0!
var yyyy = date_to_format.getFullYear();
var hh = date_to_format.getHours();
var minutes = date_to_format.getMinutes();
var seconds = date_to_format.getSeconds();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
return mm + '-' + dd + '-' + yyyy + ' ' + hh + ':' + minutes + ':' + seconds;
}