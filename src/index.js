document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create_task_form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo(e.target.new_task_description.value)
    form.reset()
  })

});

function addTodo(todo) {
  let p = document.createElement('li')
  let btn = document.createElement('button')
  let edit = document.createElement('button')
  btn.addEventListener('click', deleteTodo)
  btn.textContent = 'Done!'
  edit.addEventListener('click', editTodo)
  edit.textContent = 'Edit'
  p.textContent = `${todo}  `
  p.appendChild(btn)
  p.appendChild(edit)
  document.querySelector('#tasks').appendChild(p)
}

function myFunction(c) 
{
    document.getElementById("new_task_description").style.color = c;
}


function deleteTodo(e) {
  e.target.parentNode.remove()
}

function editTodo(e) {
  e.target.parentNode.innerHTML = "<form id='changeNewTodo' action method='POST'><input type='text' editTodo name=editTodo><input type='submit' id='confirmEditedTodo' value='Confirm'><input type='submit' id='cancelEdit' value='Cancel'></form>"
  let newTodo = document.querySelector('#confirmEditedTodo')
  newTodo.addEventListener('submit', (e) => {
    e.preventDefault()
    changeTodo(e.target.editTodo.value)
})
}

// function editTodo(e){
//   let form = document.createElement('form id="changeNewTodo" action method="POST"')
//   let text = document.createElement('input type="text" editTodo name=editTodo')
//   let newTodo = document.querySelector('#confirmEditedTodo')
//   e.target.parentNode.textContent = form
// }



// function changeTodo(e) {
//   e.target.innerHTML = "New"
// }