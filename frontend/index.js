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
    todos.forEach((todo) => {
        // create the list item element
        const todoListItem = document.createElement("li");
        todoListItem.innerHTML = todo.text;

        // create buttons
        const updateBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");

        todoListItem.appendChild(updateBtn);
        todoListItem.appendChild(deleteBtn);

        todoItemsContainer.appendChild(todoListItem);
    });
}

getTodos();