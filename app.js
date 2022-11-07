// Get items from the html document


const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const fireIcon=document.querySelector('.fa-fire');

const colors= ['#003663','#090b16','linear-gradient(120deg,#1f4037,#99f2c8)','linear-gradient(120deg,#FF0099,#493240)']; //adding multiple background colors

//EVENT LISTNERS//
// create a click event to the buttons 
todoButton.addEventListener('click',addTodo);

todoList.addEventListener('click',deleteCheck);

fireIcon.addEventListener('click',changeColor)
//FUNCTIONS//
// Add tasks implementation
function addTodo(e){
    e.preventDefault() // prevents page from refreshing after submitting
    
    const todoDiv= document.createElement('div'); //create a div tag
    todoDiv.classList.add('todo'); //add a class todo to the div class

    //LI//

    const newTodo=document.createElement('li'); //create a list tag

    newTodo.innerHTML=todoInput.value; //set value of list to user input value

    newTodo.classList.add('todo-item'); 
    
    todoDiv.appendChild(newTodo); //add list data to todDiv

    // BUTTONS//
// Completed tasks implementation
    const completeBtn = document.createElement('button');

    completeBtn.innerHTML='<i class="fas fa-check"></i>';

    completeBtn.classList.add('complete-btn');

    todoDiv.appendChild(completeBtn);


    const trashBtn = document.createElement('button');

    trashBtn.innerHTML='<i class="fas fa-trash"></i>';

    trashBtn.classList.add('trash-btn');

    todoDiv.appendChild(trashBtn);

    // APPEND TO LIST//

    todoList.appendChild(todoDiv);
    console.log(todoList);

    todoInput.value=''; //set value of the input to empty after adding todo


    
}


function deleteCheck(e){
    const itemh=e.target;
    // DELETE BUTTON
    if (itemh.classList[0]=='trash-btn'){
        const itemParent=itemh.parentElement;

        //Transition animation
        itemParent.classList.add('fall');
        itemParent.addEventListener('transitionend',function(){
            itemParent.remove()
        })
      
    }

    // COMPLETED BUTTON

    if(itemh.classList[0]==='complete-btn'){
        const itemParent= itemh.parentElement;
        itemParent.classList.toggle('completed');
    }
}
// background colors implementation
var i=0;
function changeColor(e){
i=i<colors.length-1?++i:0;

document.querySelector('body').style.background=colors[i];

}