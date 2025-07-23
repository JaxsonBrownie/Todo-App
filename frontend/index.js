// get the element we want to change
const dateElement = document.getElementById("date");

// set the current date
const date = new Date();
dateElement.innerHTML = date.toLocaleDateString();

// define backend URL
const backendUrl = "http://localhost:3000/todos"

/*
FUNCTION:   getTodos
PURPOSE:    Sends get request to retrieve todo items.
*/
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

            // create button options
            const buttonDiv = document.createElement("div");
            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Delete";
            deleteBtn.classList.add("btn", "btn-danger", "m-1");

            const updateBtn = document.createElement("button");
            updateBtn.classList.add("btn", "btn-warning", "m-1");
            updateBtn.innerHTML = "Update";

            buttonDiv.appendChild(deleteBtn);
            buttonDiv.appendChild(updateBtn);
            newTodo.appendChild(buttonDiv);

            todoContainer.appendChild(newTodo);
        });
    } catch (err) {
        console.log(err);
    }
}

/*
FUNCTION:   postTodo
PURPOSE:    Sends psot request to upload new todo item.
*/
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
        } else {
            console.log("Post request unsuccessful");
        }
    } catch (err) {
        console.log(err)
    }
}

getTodos();