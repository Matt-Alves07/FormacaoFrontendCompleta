/* Elements */
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#input-todo");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#input-edit");
const cancelBtn = document.querySelector("#cancel-edit");

/* Functions */

/* Events */
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (todoInput.value === "") {
        console.error("Bad request");
        return;
    }

    console.log("Ha");
});