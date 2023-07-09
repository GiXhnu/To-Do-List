const arr1 = [];

renderTodo();

const todayDate = document.getElementById("todayDate");
todayDate.valueAsDate = new Date();


const addButton = document.querySelector('.jsAddButton')
addButton.addEventListener('click',()=>{
  addTodo();
});


function addTodo(){
    const inputElement = document.querySelector('.jsAdd');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.jsdate');
    const dueDate = dateInputElement.value;
    arr1.push({
      name,
      dueDate
    });
    inputElement.value = '';
    renderTodo();

}
function renderTodo(){
    let toDoList = '';
    arr1.forEach((val1, index) => {
      const { name, dueDate } = val1; 
      const htmlVal = `
      <div>${name}</div> 
      <div>${dueDate}</div> 
      <button onclick="
          arr1.splice(${index},1);
          renderTodo(); 
      " class="delete-todo-button">Delete</button>
      `;
      toDoList += htmlVal;
    });
   
     document.querySelector('.jsPara').innerHTML = toDoList;
       
   }
