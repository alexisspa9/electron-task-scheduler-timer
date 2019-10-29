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
        startSpecialTask("Εκτυπώσεις/Φωτοτυπίες");
    } else {
        console.log("started")
        startSpecialTask("Εκτυπώσεις/Φωτοτυπίες");
    }
});

toilet_element.addEventListener("click", function() {
    if (!work_timer_active) {
        alert("Δέν έχετε ξεκινήσει την ημέρα");
        return;
    }
    if (task_running) {
        stopTask();
        startSpecialTask("Τουαλέτα");
    } else {
        console.log("started")
        startSpecialTask("Τουαλέτα");
    }
});

break_element.addEventListener("click", function() {
    if (!work_timer_active) {
        alert("Δέν έχετε ξεκινήσει την ημέρα");
        return;
    }
    if (task_running) {
        stopTask();
        startSpecialTask("Διάλειμμα");
    } else {
        console.log("started")
        startSpecialTask("Διάλειμμα");
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






