const todoform=document.querySelector('form');
const todoinput=document.getElementById('todo-input');
const todoListUL=document.getElementById('todo-list');
 let allTodos=[];


todoform.addEventListener('submit',function(e){ //esta funcion lo que hace es que en vez de recargar la pagina sencillamente agrega la nueva tarea
    e.preventDefault();
    addTodo();// llama la funcion que agrega tareas

})
function addTodo(){
    const todoText=todoinput.value;


    //funcion para evitar tareas vacias
    if(todoText.trim()==="") return;

    //Crear objeto  para guardar tareas
    const todoObjt={
        text: todoText,
        completed:false

    };

    allTodos.push(todoObjt);// se guardan todas la tareas en el lista

    saveToLocalStorage();//se guarda la lista completa en storage


    renderTodos();//se dibuja toda la lista creadas
    
    // creacion de lista 
    const newLi=document.createElement('li');
    
    
    newLi.innerText =todoText;
    
    // agregamos a la lista

    newLi.innerText= todoText;
    
    //limpiar input "entrada"
    todoListUL.appendChild(newLi);
    todoinput.value= " ";

    function saveToLocalStorage(){
        localStorage.setItem('todos',JSON.stringify(allTodos))//el JSON.stringfy convierte la lista en un texto para guardarlo y localStorage.setItem guarda la info en el navegaor
    };
    // variable para crear el boton de borrar elemento
    const borrarBoton=document.createElement('button');

    borrarBoton.innerText = 'X';//boton visual para borrar
    newLi.appendChild(borrarBoton);

    // funcionalidad para cuando se haga click se tache la tarea

    newLi.addEventListener('click',function(){

    newLi.classList.toggle('completed')
});

    // creamos la funcion del evento para borrar

    newLi.addEventListener('clicl',function(){


    });


}





