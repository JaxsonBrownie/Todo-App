// get the element we want to change
const dateElement = document.getElementById("date");

// set the current date
const date = new Date();
dateElement.innerHTML = date.toLocaleDateString();

// define backend URL
const backendUrl = "http://localhost:3000/todos/"

/* =================================================
FUNCTION:   getTodos
PURPOSE:    Sends get request to retrieve todo items.
================================================= */
async function getTodos() {
    try {
        // define GET options
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }

        // send GET request
        const response = await fetch(backendUrl, options);
        
        // handle the response
        const todos = await response.json();
        
        // create list items in the DOM
        const todoContainer= document.getElementById("todo-items");
        todos.forEach((todo) => {
            // create the new todo item element
            const newTodo = document.createElement("li");
            newTodo.innerHTML = todo.text;

            // create delete button
            const buttonDiv = document.createElement("div");
            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Delete";
            deleteBtn.classList.add("btn", "btn-danger", "m-1");
            deleteBtn.addEventListener("click", () => {
                deleteTodo(todo._id);
            });

            // create update button
            const updateBtn = document.createElement("button");
            updateBtn.innerHTML = "Update";
            updateBtn.classList.add("btn", "btn-warning", "m-1");
            updateBtn.addEventListener("click", () => {
                updateTodo(todo._id);
            });

            // create full element
            buttonDiv.appendChild(deleteBtn);
            buttonDiv.appendChild(updateBtn);
            newTodo.appendChild(buttonDiv);

            // add todo element to the list
            todoContainer.appendChild(newTodo);
        });
    } catch (err) {
        console.log(err);
    }
}

/* =================================================
FUNCTION:   postTodo
PURPOSE:    Sends psot request to upload new todo item.
================================================= */
async function postTodo() {
    // get the input element and value
    const todoInput = document.getElementById("new-todo");
    const todoText = todoInput.value;

    try {
        // define POST options
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: todoText,
            })
        }

        // send POST request
        const response = await fetch(backendUrl, options);

        // handle response
        if (response.ok) {
            console.log("Successfully added todo item");
            location.reload();
        } else {
            console.log("Post request unsuccessful");
        }
    } catch (err) {
        console.log(err)
    }
}

/* =================================================
FUNCTION:   deleteTodo
PURPOSE:    Deletes a todo item based on a given id
================================================= */
async function deleteTodo(id) {
    // set URL parameters
    const deleteUrl = backendUrl + id;

    try {
        // define DELETE options
        const options = {
            method: "DELETE"
        };

        // send DELETE request
        const response = await fetch(deleteUrl, options);

        // handle response
        if (response.ok) {
            console.log("Successfully deleted todo item");
            location.reload();
        } else {
            console.log("Delete request unsuccessful");
        }
    } catch (err) {
        console.log(err);
    }
}

/* =================================================
FUNCTION:   updateTodo
PURPOSE:    Updates a todo item based on a given id
================================================= */
async function updateTodo(id) {
    // set URL parameters
    const updateUrl = backendUrl + id;

    // get the input element and value
    const todoInput = document.getElementById("new-todo");
    const todoText = todoInput.value;

    try {
        // define UPDATE options
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: todoText
            })
        };

        // send UPDATE request
        const response = await fetch(updateUrl, options);
        console.log(response);

        // handle response 
        if (response.ok) {
            console.log("Successfully updated item");

            // refresh todo list
            const todoContainer= document.getElementById("todo-items");
            todoContainer.innerHTML = "";
            getTodos();
        } else {
            console.log("Update request failed");
        }
    } catch (err) {
        console.log(err);
    }
}

// get the todo items on initial page load
getTodos();