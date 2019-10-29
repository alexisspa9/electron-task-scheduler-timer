let task_running = false;
let start_task_time = '';
let stop_task_time = '';
let task_time_secs = 0;
let current_task = {};
let table_element = document.createElement('table');
let table_body = document.createElement('tbody');
let listWrapper = document.getElementById("task_list");
listWrapper.appendChild(table_element);
table_element.appendChild(table_body);




function startSpecialTask(task_name) {
    current_task.task_name = task_name;
    current_task.start_time = new Date();
    task_running = true;
    taskDuration(task_time_element);
    resume_wrapper_element.style.display = "block";
}

function render_tasks() {
    table_body.innerHTML = "";

    for(let i = 0; i<appState.tasks_list.length; i++) {
        let row = document.createElement('tr');
        row.setAttribute("id", appState.tasks_list[i].id );
        table_body.appendChild(row);
        let task_name = document.createElement('td');
        row.appendChild(task_name);
        task_name.innerText = appState.tasks_list[i].task_name;
        let start_time = document.createElement('td');
        row.appendChild(start_time);
        start_time.innerText = appState.tasks_list[i].start_time.toLocaleTimeString();
        let duration = document.createElement('td');
        row.appendChild(duration);
        duration.innerText = appState.tasks_list[i].duration;
        let parathrhseis = document.createElement('td');
        row.appendChild(parathrhseis);
        parathrhseis.innerText = appState.tasks_list[i].parathrhseis;
        let actions = document.createElement('td');
        row.appendChild(actions);
        actions.innerHTML = "<button id='editButton'>edit</button><button id='deleteButton'>delete</button>";
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
    current_task.company_id = 1;
    current_task.company = company_element.value;
    current_task.task_name = task_element.value;
    current_task.start_time = new Date();
    current_task.parathrhseis = parathrhseis_element.value;
    task_running = true;
    taskDuration(task_time_element);
}

function stopTask() {
    current_task.stop_time = new Date();
    current_task.duration = durationFormat(task_time_secs);
    appState.tasks_list.push(current_task);
    saveTask(current_task);
    current_task = {};
    render_tasks();
    task_running = false;
    clearTimeout(task_timer);
    task_time_secs = 0;
    resume_wrapper_element.style.display = "none";
}

render_tasks();


