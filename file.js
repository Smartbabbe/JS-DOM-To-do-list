// // Getting the inputted task 
let inputField = document.querySelector("#input");

// // Getting the add button
let additionButton = document.querySelector("#addButton");

// Getting the div that stores all the list of tasks
let addItemsPlace = document.querySelector("#tasks")

// CREATING FUNCTION THAT ADDS THE TASKS

function toAddItem (){
// Getting the inputted task 
// let inputField = document.querySelector("#input");
let tasks = inputField.value;

// NOT ADDING EMPTY INPUT FIELD TO THE ARRAY
    if (tasks.length <= 0){
        inputField.setAttribute("placeholder", "Please input a task")
    } else {
        // creating the div that holds the specific task
    let divOfTask = document.createElement("div")
    divOfTask.classList.add("firsttask")

// Creating child div of each task
// Creating first div, adding class to it and the input type
    let subDiv1 = document.createElement("div")
    subDiv1.classList.add("inputs_first")
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.classList.add("input1")
    let task = document.createElement("p")
    task.innerText = tasks


// Appending the input and p tag into the first div
subDiv1.appendChild(checkbox)
subDiv1.appendChild(task)

// // Creating second div
    let subDiv2 = document.createElement("div")
    subDiv2.classList.add("operations")
    subDiv2.setAttribute("id", "operation")
    let editbutton = document.createElement("button")
    let deletebutton = document.createElement("button")
    editbutton.classList.add("buttons")
    deletebutton.classList.add("buttons")
    editbutton.setAttribute("id", "editbutton")
    deletebutton.setAttribute("id", "deletebutton")
    // editbutton.append("Edit")
    deletebutton.append("Delete")

// // Appending the buttons into the second div
    // subDiv2.appendChild(editbutton)
    subDiv2.appendChild(deletebutton)

// // Appending the divs into the task holder
    divOfTask.appendChild(subDiv1)
    divOfTask.appendChild(subDiv2)

    addItemsPlace.appendChild(divOfTask)
}

// function strikeThrough(task){
//         task[i].style.text-decoration = "line-through";
//     return task
}

// checkbox.addEventListener("click", strikeThrough)



// CREATING FUNCTION THAT EDIT THE TASKS
function toEditItem (){

}

// CREATING FUNCTION THAT DELETES THE TASKS
function toDeleteItem (){

}

// FUNCTION THAT CLEARS THE INPUT ON ADDING
function resetInput(){
    document.getElementById("input").value = "";
}



// Adding event listener to the add button
additionButton.addEventListener("click", toAddItem)
additionButton.addEventListener("click", resetInput)