const start_task_element = document.getElementById("start");
const stop_task_element = document.getElementById("stop");
const department_element = document.getElementById("department");
const task_element = document.getElementById("task");
const company_element = document.getElementById("company");
const task_time_element = document.getElementById("task_duration");




// quick buttons
const printing_element = document.getElementById("printing");
const toilet_element = document.getElementById("toilet");
const break_element = document.getElementById("break");
const resume_element = document.getElementById("resume");











let task_running = false;
let start_task_time = '';
let stop_task_time = '';
let task_time_secs = 0;
let tasks_list = [];
let ul_element = document.createElement('ul');
let listWrapper = document.getElementById("task_list");
listWrapper.appendChild(ul_element);
function render_tasks() {
    ul_element.innerHTML = "";
    for(let i = 0; i<tasks_list.length; i++) {
        let li = document.createElement('li');
        ul_element.appendChild(li);
        li.innerHTML = tasks_list[i].task_name;
    }
}
render_tasks();

function taskDuration(ele) {
    task_time_secs++
    ele.innerHTML = task_time_secs.toString().toHHMMSS();
    task_timer = setTimeout(function() {
        taskDuration(task_time_element);
    }, 1000);
  }

let current_task = {};

function startTask() {
    current_task.company = company_element.value;
    current_task.task_name = task_element.value;
    current_task.start_time = new Date();
    task_running = true;
    taskDuration(task_time_element);
}

function stopTask() {
    current_task.stop_time = new Date();
    current_task.duration = "5 minutes";
    tasks_list.push(current_task);
    current_task = {};
    render_tasks();
    task_running = false;
    clearTimeout(task_timer);
    task_time_secs = 0;
}


start_task_element.addEventListener("click", function() {
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


