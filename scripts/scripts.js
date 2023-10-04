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

  let newHTMLDiv = document.querySelector('.list-todo-array-div');
  let newHTML = "";

  toDoList.push({ myName, dueDate })

  for (i = 0; i < toDoList.length; i++) {
    let newElement = toDoList[i];
    newHTML += `<p>${newElement.myName}</p>`;
    newHTML += `<p>${newElement.dueDate}</p>`;
  }
  newHTMLDiv.innerHTML = newHTML;
}
