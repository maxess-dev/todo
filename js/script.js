// Selectionne bouton validation
const addButton = document.querySelector('.add'); 
// Sélectionne texte du textarea
const texte = document.querySelector('#hello'); 
// Sélectionne todo-list
const todoList = document.querySelector('.todo-list'); 


// Créer une todo-list lors du click sur la touche entrée
texte.addEventListener('keydown',function(e){
    if (event.isComposing || event.keyCode === 13) {
        addTodo();   
    }
})

// --  Créer une todo-list lors du click sur le bouton de validation 
addButton.addEventListener("click",addTodo);
// --  Supprimer une todo-list lors du click sur le bouton de delete 
todoList.addEventListener("click",removeTodo);

// -- Barre la todo-list lors du click sur le bouton de check
todoList.addEventListener("click",validateTodo);


function addTodo(e) { // --  Fonction Ajouter Todo List

    // Désactive le rafraichissement
    e.preventDefault();
    
    var valueText = texte.value;
    
    if (valueText.length >= 1) {

        // Crée la div de la Todo List
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        // Crée une liste dans la div
        const newTodo = document.createElement('li');
        newTodo.innerText = texte.value; 
        todoDiv.appendChild(newTodo);

        // Crée un bouton checked dans la div
        const checkedButton = document.createElement('button');
        checkedButton.classList.add('checked');
        checkedButton.innerHTML = '<i class="fa fa-check" style="font-size: 1.4em;"></i>';
        todoDiv.appendChild(checkedButton);

        // Crée un bouton remove dans la div
        const removeButton = document.createElement('button');
        removeButton.classList.add('delete');
        removeButton.innerHTML = '<i class="fa fa-trash" style="font-size: 1.4em;"></i>';
        todoDiv.appendChild(removeButton);

        // Ajoute le contenu de la todolist dans la div
        todoList.appendChild(todoDiv);
        
        // Clear le textarea apres validation
        texte.value = ""; 

    }
   
    
}

function removeTodo(e){
    // Cible l'élement sélectionné
    const item = e.target; 
    // Si le premier élement est selectionnée > supprime le parent
    if (item.classList[0] === 'delete') {
        const todo = item.parentElement;  
        todo.remove();
    }
    
}

function validateTodo(e){
    // Cible l'élement sélectionné
    const item = e.target; 
    // Si le premier élement est selectionnée > toggle la classe validate
   if (item.classList[0] === 'checked') {
       const todo = item.parentElement;
       todo.classList.toggle('validate')
   }

}
