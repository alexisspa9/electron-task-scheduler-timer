let appState = {
    start_day_time: '',
    stop_day_time: '',
    tasks_list: [],
};


function removeTaskFromAppState(id) {
    appState.tasks_list = appState.tasks_list.filter(function(task) {
       return task.id !== parseInt(id);
    });
}