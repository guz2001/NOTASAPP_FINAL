const todoform=document.querySelector('form');
const todoinput=document.getElementById('todo-input');
const todoListUL=document.getElementById('todo-list');
 let allTodos=[];
todoform.addEventListener('submit',function(e){
    e.preventDefault();
    addTodo();

})
function addTodo(){
    const todoText=todoinput.value;


    //funcion para evitar tareas vacias
    if(todoText.trim()==="") return;


    // creacion de lista 
    const newLi=document.createElement('li');
    
    
    newLi.innerText =todoText;
    
    // agregamos a la lista

    newLi.innerText= todoText;
    
    //limpiar input "entrada"
    todoListUL.appendChild(newli);
    todoinput.value= " ";
}
// variable para crear el boton de borrar elemento
const borrarBoton=document.createElement('button');

borrarBoton.innerText = 'X';//boton visual para borrar
newLi.appendChild(borrarBoton);

// funcionalidad para cuando se haga click se tache la tarea

newLi.addEventListener('click',function(){

    newLi.classList.toggle('completed')
});




