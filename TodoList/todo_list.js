const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

document.addEventListener('keydown', function() {
    if (event.key === 'Enter') {
       addTask();
    }
});

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function(){
    const input = searchInput.value.trim();

    if(input !== ''){
        const task = tasks.find(task => task.text === input);

        searchInput.value = '';

        if(task){
            alert(`Task ${input} is available`);
        }else{
            alert('Task is undefined');
        }
    }
});

const clearTask = document.getElementById('clearAllTask');
clearTask.addEventListener('click', function(){
    tasks = [];
    alert('All task is cleared!');
    displayTasks();
});