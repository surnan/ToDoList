let toDoList = [{
  myName: 'cat',
  dueDate: '2023-10-19'
}, {
  myName: 'dog',
  dueDate: '2023-10-30'
}];

function addToDo() {
  let temp = document.querySelector('.js-name-input');
  let temp2 = document.querySelector('.js-input-date');
  let myName = temp.value;
  let dueDate = temp2.value;

  let newHTMLDiv = document.querySelector('.js-list-todo-array-div');
  let newHTML = "";

  toDoList.push({ myName, dueDate })

  for (i = 0; i < toDoList.length; i++) {
    let newElement = toDoList[i];
    newHTML += `<p class="name-toDo">${newElement.myName}</p>`;
    newHTML += `<p class="due-date">${newElement.dueDate}</p>`;
    newHTML += `   <button class="remove-todo-button jsRemoveButtonClick"
                    onclick="removeToDo()">
                      Delete
                  </button>`;
  }
  newHTMLDiv.innerHTML = newHTML;
}

function removeToDo() {
  console.log('remove ToDo called');
}
