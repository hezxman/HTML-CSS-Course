let addBtn = document.getElementById("addToDo");
let container = document.getElementById("toDoContainer");
let inField = document.getElementById("inputField");

addBtn.addEventListener('click', (e) => {
    var paragrapgh = document.createElement('p');
    paragrapgh.classList.add('paragraph-styling');
    paragrapgh.innerText = inField.value;
    container.appendChild(paragrapgh);
    inField.value = "";
    paragrapgh.addEventListener('click', (e) => {
        paragrapgh.style.textDecoration = "line-through";
    })
    paragrapgh.addEventListener('dblclick', (e) => {
        container.removeChild(paragrapgh);
    })
    
}) 






