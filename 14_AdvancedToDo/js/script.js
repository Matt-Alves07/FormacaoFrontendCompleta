/* Elements */
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#input-todo");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#input-edit");
const cancelBtn = document.querySelector("#cancel-edit");
const searchBtn = document.querySelector("#search-input");
const eraseSearchBtn = document.querySelector("#erase-button");
const filterSelect = document.querySelector("#filter-select");

let oldInputValue;

/* Functions */
const saveTask = (task, done = 0, save = 1) => {
    let todo = getTaskDiv();
    const todoTitle = getTaskTitle(task);

    todo.appendChild(todoTitle);
    todo = getDivWithTaskButtons(todo, done);

    /* Saving in local storage */
    if (done)
        todo.classList.add("done");

    if (save)
        saveTodoInLocalStorage({text: task, done});
    /* End of saving in local storage */

    todoList.appendChild(todo);
}

const updateTask = (task) => {
    const todos = document.querySelectorAll(".todo");
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if (oldInputValue === todoTitle.innerText) {
            todoTitle.innerText = task;
            updateTitleTodoInLocalStorage(oldInputValue, task);
        }
    });
}

const searchTodos = (search) => {
    const todos = document.querySelectorAll(".todo");
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3").innerText.toLowerCase();

        todo.style.display = "flex"

        if (!todoTitle.includes(search.toLowerCase()))
            todo.style.display = "none";
    });
}

const showAllTodos = () => {
    const todos = document.querySelectorAll(".todo");
    todos.forEach((todo) => {
        todo.style.display = "flex"
    });
}

const filterTodos = (option) => {
    const todos = document.querySelectorAll(".todo");
    todos.forEach((todo) => {
        let shouldDisplay = false;

        switch (option) {
            case "all":
                shouldDisplay = true;
                break;
            case "done":
                shouldDisplay = todo.classList.contains("done");
                break;
            case "pending":
                shouldDisplay = !todo.classList.contains("done");
                break;
            default:
                break;
        }

        todo.style.display = shouldDisplay ? "flex" : "none";
    });
}

const getTaskDiv = () => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    return todo;
}

const getTaskTitle = (task) => {
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = task;

    return todoTitle;
}

const getDivWithTaskButtons = (element, done = 0) => {
    /* Done button */
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");

    done
        ? doneBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        : doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

    element.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

    element.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    element.appendChild(deleteBtn);

    return element;
}

const toggleEditForm = () => {
    todoForm.classList.toggle("hide");
    editForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

/* Events */
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;
    if (inputValue) {
        saveTask(inputValue);

        todoInput.value = "";
        todoInput.focus();
    }
});

todoList.addEventListener("click", (e) => {
    e.preventDefault();

    const targetElement = e.target;
    const parentElement = targetElement.closest("div");

    let todoTitle;
    if ((parentElement) && (parentElement.querySelector("h3")))
        todoTitle = parentElement.querySelector("h3").innerText;

    if (targetElement.classList.contains("finish-todo")) {
        updateStatusTodoInLocalStorage(todoTitle);
        parentElement.classList.toggle("done");

        parentElement.classList.contains("done")
            ? targetElement.innerHTML = '<i class="fa-solid fa-xmark"></i>'
            : targetElement.innerHTML = '<i class="fa-solid fa-check"></i>';
    }
    else if (targetElement.classList.contains("edit-todo")) {
        toggleEditForm();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
    else if (targetElement.classList.contains("remove-todo")) {
        parentElement.remove();
        removeTodoInLocalStorage(todoTitle);
    }
});

cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleEditForm();
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editInputValue = editInput.value;
    if (editInputValue)
        updateTask(editInputValue);

    toggleEditForm();
});

searchBtn.addEventListener("keyup", (e) => {
    if (!e.target.value){
        showAllTodos();
        return;
    }

    const searchContent = e.target.value;
    searchTodos(searchContent);
});

eraseSearchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchBtn.value = "";
    showAllTodos();
});

filterSelect.addEventListener("change", (e) => {
    if (!e.target.value)
        return;

    const filterValue = e.target.value;
    filterTodos(filterValue);
});

/* Local storage */
const getTodosInLocalStorage = () => {
    const todos = localStorage.getItem("todos");
    return JSON.parse(todos) || [];
}

const loadTodos = () => {
    const todos = getTodosInLocalStorage();
    todos.forEach((todo) => {
        saveTask(todo.text, todo.done, 0);
    });
}

const saveTodoInLocalStorage = (todo) => {
    const todos = getTodosInLocalStorage();

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));
}

const removeTodoInLocalStorage = (todoText) => {
    const todos = getTodosInLocalStorage();
    const filteredTodos = todos.filter((todo) => todo.text !== todoText);

    localStorage.setItem("todos", JSON.stringify(filteredTodos));
}

const updateStatusTodoInLocalStorage = (todoText) => {
    const todos = getTodosInLocalStorage();
    todos.map((todo) => {
        todo.text === todoText
            ? todo.done = !todo.done
            : null;
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

const updateTitleTodoInLocalStorage = (oldText, newText) => {
    const todos = getTodosInLocalStorage();
    todos.map((todo) => {
        todo.text === oldText
            ? todo.text = newText
            : null;
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

loadTodos();