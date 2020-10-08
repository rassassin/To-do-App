//selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);
toDoList.addEventListener('click', deleteCheck);

//functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create LI
    const newTodo = document.createElement('li') 
    newTodo.innerText = 'todoInput.value';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo)
    //Chech mark button
    const completedButton = document.createElement('button');
    completedButton.innerTextHTML = '<i> class = "fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
        //Chech trash button
        const trashButton = document.createElement('button');
        trashButton.innerTextHTML = '<i> class = "fas fa-trash"></i>'
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        //append to list
        toDoList.appendChild(todoDiv);
        //clear tidi INPUT VALUE
            toDoInput.value = '';
}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation 
            todo.classList.add('fall');
            todo.addEventListener('transitionend', function(){
                todo.remove()
            });       
    }
    //check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
