// work timer
const total_work_time_element = document.getElementById('total_work_time');
const start_day_element = document.getElementById('start_day');
const stop_day_element = document.getElementById('end_day');
const current_time_element = document.getElementById('current_time');


// task manager
const start_task_element = document.getElementById("start");
const stop_task_element = document.getElementById("stop");
const department_element = document.getElementById("department");
const task_element = document.getElementById("task");
const company_element = document.getElementById("company");
const task_time_element = document.getElementById("task_duration");
const resume_timer_element = document.getElementById("resume_timer");
const resume_wrapper_element = document.querySelector(".resume_wrapper");
const resume_title_element = document.getElementById("resume_title");
const parathrhseis_element =  document.getElementById("parathrhseis");


// quick buttons
const printing_element = document.getElementById("printing");
const toilet_element = document.getElementById("toilet");
const break_element = document.getElementById("break");
const resume_element = document.getElementById("resume");

let edit_buttons;
let delete_buttons;

function assign_actions_to_buttons() {
    // edit_buttons = document.querySelectorAll(".editButton");
    delete_buttons =  document.querySelectorAll(".deleteButton");
}

function addListenersToActions() {

    // edit_buttons.forEach(function(button) {
    //     button.addEventListener("click", function(){
    //         console.log(this.parentElement.parentElement.id)
    //     });
    // });

    delete_buttons.forEach(function(button) {
        button.addEventListener("click", function(){
            if(confirm("Η εργασία θα διαγραφή, είστε σίγουρος?")) {
                deleteTask(this.parentElement.parentElement.id);
                removeTaskFromAppState(this.parentElement.parentElement.id);
                render_tasks();
            }
        });
    });
}
    
    
    