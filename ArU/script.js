// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("newTask");
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // If the input is empty, do nothing

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <span class="checkmark">&#10004;</span>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        <button class="complete-button" onclick="completeTask(this)">Complete</button>
    `;

    document.getElementById("taskList").appendChild(li); // Append the new task to the list
    taskInput.value = ""; // Clear the input field
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove(); // Remove the task's parent element (the entire li)
}

function completeTask(button) {
    const span = button.previousElementSibling.previousElementSibling; // Get the task's text element
    span.classList.toggle("completed"); // Toggle the 'completed' class to add/remove line-through styling
}

//  selectors, methods, and events
let myButton = document.getElementById('myButton');
let myElement = document.getElementById('myElement');

//event listener
myButton.addEventListener('click', function() {
    alert('This house already sold');
});

myElement.addEventListener('mouseover', function() {
    alert('New houses should be in 3 days');
});

myElement.addEventListener('click', function() {
    alert('Element clicked!');
});
function animateElement() {
    myElement.style.transform = 'rotate(360deg)';
}





document.getElementById('instagram').addEventListener('click', function() {
    window.open('https://www.instagram.com/');
});

document.getElementById('twitter').addEventListener('click', function() {
    window.open('https://twitter.com/');
});

document.getElementById('github').addEventListener('click', function() {
    window.open('https://github.com/');
});
document.getElementById('facebook').addEventListener('click', function() {
    window.open('https://facebook.com/');
});



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    ev.target.appendChild(draggedElement);
}

