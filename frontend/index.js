const dateElement = document.getElementById("date");

// set the date
const date = new Date();
dateElement.innerHTML = date.toLocaleDateString();

const backendURL = "http://localhost:2000";

// ================================================
async function getTodos() {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };

    // sending the http request
    const response = await fetch(backendURL + "/todos", options);

    // handle http response
    const todos = await response.json();

    // render HTML
    const todoItemsContainer = document.getElementById("todo-items");
    todos.forEach((todoEntry) => {
        // create the list item element
        const todoListItem = document.createElement("li");
        todoListItem.innerHTML = todoEntry.text;

        // create buttons
        const updateBtn = document.createElement("button");
        updateBtn.innerHTML = "Update";
        updateBtn.style.margin = "4px";

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.style.margin = "4px";
        deleteBtn.addEventListener("click", () => {
            deleteTodo(todoEntry._id);
        });

        // create div
        const buttonDiv = document.createElement("div");
        buttonDiv.appendChild(updateBtn);
        buttonDiv.appendChild(deleteBtn);

        todoListItem.appendChild(buttonDiv);
        todoItemsContainer.appendChild(todoListItem);
    });
}

async function postTodo() {
    // get todo input value
    const todoInput = document.getElementById("todo-input");
    let todoValue = todoInput.value;

    // define http request options
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: todoValue
        })
    };

    // send http request and wait for response
    const response = await fetch(backendURL + "/todos", options);

    // handle response
    if (response.ok) {
        console.log("Todo item added successfully");
        location.reload();
    } else {
        console.log("Todo item could not be added");
    }
}

async function deleteTodo(id) {
    // define http request options
    const options = {
        method: "DELETE"
    }

    // send http request
    const response = await fetch(backendURL + "/todos/" + id, options);

    // handle response
    if (response.ok) {
        console.log("Delete successful");
        location.reload();
    } else {
        console.log("Delete unsuccessful");
    }
}

getTodos();