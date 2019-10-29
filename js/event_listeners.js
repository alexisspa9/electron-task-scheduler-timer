// work timer
start_day_element.addEventListener("click", function() {
    if (!work_timer_active) {
      startWorkTime();
    }
});



// task manager
printing_element.addEventListener("click", function() {
    if (!work_timer_active) {
        alert("Δέν έχετε ξεκινήσει την ημέρα");
        return;
    }
    if (task_running) {
        stopTask();
        startSpecialTask("printing");
    } else {
        console.log("started")
        startSpecialTask("printing");
    }
});

toilet_element.addEventListener("click", function() {
    if (!work_timer_active) {
        alert("Δέν έχετε ξεκινήσει την ημέρα");
        return;
    }
    if (task_running) {
        stopTask();
        startSpecialTask("toilet");
    } else {
        console.log("started")
        startSpecialTask("toilet");
    }
});

break_element.addEventListener("click", function() {
    if (!work_timer_active) {
        alert("Δέν έχετε ξεκινήσει την ημέρα");
        return;
    }
    if (task_running) {
        stopTask();
        startSpecialTask("break");
    } else {
        console.log("started")
        startSpecialTask("break");
    }
});




resume_element.addEventListener("click", function() {
    if (task_running) {
        console.log("stopped!")
        stopTask();
    }
});


start_task_element.addEventListener("click", function() {
    if (!work_timer_active) {
        alert("Δέν έχετε ξεκινήσει την ημέρα");
        return;
    }
    if (task_running) {
        stopTask();
        startTask();
    } else {
        console.log("started")
        startTask();
    }
});

stop_task_element.addEventListener("click", function() {
    if (task_running) {
        console.log("stopped!")
        stopTask();
    }
});






