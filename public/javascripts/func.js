var taskToSave = [];
function loadTasks() {
    var loadJSON = localStorage.getItem("tasksJSON");
    taskToSave = JSON.parse(loadJSON);
    if (taskToSave != null) {
        for (var i = 0; i < taskToSave.length; i++) {
            document.getElementById('notesBoard').innerHTML += "<div class='col-xs-3 showX' id='" + i + "' ><div  class='stickynote' id='" + i + "'><span onclick='deleteTask(this.id)' id='" + i + "' class='glyphicon glyphicon-remove glyp'></span></br><div class='outText'>" + taskToSave[i].Text + " </div></br><span class='outkDate'>" + taskToSave[i].Date + "</span></br><span class='outTime'>" + taskToSave[i].Time + "</span></div></div>";
        }
    } else {
        taskToSave = [];
    }
}

function populateTasks() {
    var i = 0;
    var taskText = document.getElementById('taskText').value;
    var taskDate = document.getElementById('taskDate').value;
    var taskTime = document.getElementById('taskTime').value;
    if (taskToSave.length > 0) {
        i = taskToSave.length;
    }
    taskToSave[i] = {
        Order: i,
        Text: taskText,
        Date: taskDate,
        Time: taskTime
    };
    document.getElementById('notesBoard').innerHTML += "<div class='col-xs-3 showX' id='" + i + "' ><div class='stickynote' id='" + i + "'><span onclick='deleteTask(this.id)' id='" + i + "' class='glyphicon glyphicon-remove glyp'></span></br><div class='outText'>" + taskToSave[i].Text + " </div></br><span class='outkDate'>" + taskToSave[i].Date + "</span></br><span class='outTime'>" + taskToSave[i].Time + "</span></div></div>";
    var taskJSON = JSON.stringify(taskToSave);
    localStorage.setItem("tasksJSON", taskJSON);
    i++;
    resetForm();
}

function deleteTask(idd) {
    var answer = confirm('Are you sure you want to remove this task?');
    if (answer) {
        document.getElementById(idd).innerHTML = "";
        taskToSave.splice(idd, 1);
        localStorage.removeItem("tasksJSON");
        var taskJSON = JSON.stringify(taskToSave);
        localStorage.setItem("tasksJSON", taskJSON);
    }
}

function resetForm() {
    document.getElementById('taskForm').reset();
    return false;
}
