const taskInput = document.querySelector(".task-input input"),
    filters = document.querySelectorAll(".filters span"),
    clearAll = document.querySelector(".clear-btn"),
    taskBox = document.querySelector(".task-box");

let editId,
isEditTask = false;

// localStorage object stores key-value pairs in the browser. The localStorage object stores data with no expiration date. So to store a entire javascript object we need to serialize it first (with JSON.stringify, for example): localStorage.setItem('user', JSON.stringify(user));
//Then to retrieve it from the store and convert to an object again: var user = JSON.parse(localStorage.getItem('user'));
//If we need to delete all entries of the store we can simply do: localStorage.clear();
todos = JSON.parse(localStorage.getItem("todo-list"));

filters.forEach(btn => {
    btn.addEventListener("click", ()=>{
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active")
        showTodo(btn.id)
    });
})