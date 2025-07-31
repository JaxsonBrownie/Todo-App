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
        updateBtn.innerHTML = "Update";
        updateBtn.style.margin = "4px";
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.style.margin = "4px";

        // create div
        const buttonDiv = document.createElement("div");
        buttonDiv.appendChild(updateBtn);
        buttonDiv.appendChild(deleteBtn);

        todoListItem.appendChild(buttonDiv);
        todoItemsContainer.appendChild(todoListItem);
    });
}

getTodos();