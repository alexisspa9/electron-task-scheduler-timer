let task_running = false;
let start_task_time = '';
let stop_task_time = '';
let task_time_secs = 0;
let current_task = {};
let ul_element = document.createElement('ul');
let listWrapper = document.getElementById("task_list");
listWrapper.appendChild(ul_element);



function startSpecialTask(task_name) {
    current_task.task_name = task_name;
    current_task.start_time = new Date();
    task_running = true;
    taskDuration(task_time_element);
    resume_wrapper_element.style.display = "block";
}

function render_tasks() {
    ul_element.innerHTML = "";
    for(let i = 0; i<appState.tasks_list.length; i++) {
        let li = document.createElement('li');
        ul_element.appendChild(li);
        li.innerHTML = appState.tasks_list[i].task_name;
    }
}

function taskDuration(ele) {
    task_time_secs++
    ele.innerHTML = task_time_secs.toString().toHHMMSS();
    resume_timer_element.innerHTML = task_time_secs.toString().toHHMMSS();
    task_timer = setTimeout(function() {
        taskDuration(task_time_element);
    }, 1000);
}

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
    appState.tasks_list.push(current_task);
    current_task = {};
    render_tasks();
    task_running = false;
    clearTimeout(task_timer);
    task_time_secs = 0;
    resume_wrapper_element.style.display = "none";
}

render_tasks();


