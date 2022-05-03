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
  p.setAttribute('class', 'todoEntry')
  let btn = document.createElement('button')
  let edit = document.createElement('button')
  let priority = document.getElementById('priority')
  let priorityValue = priority.options[priority.selectedIndex].value
  let dueDate = document.getElementById('dueDate').required
  let dueBy = document.getElementById('dueDate').value

  // btn.addEventListener('click', deleteTodo)
  btn.addEventListener('click', moveTask)
  btn.textContent = 'Done!'
  
  edit.addEventListener('click', editTodo)
  edit.textContent = 'Edit'
  
  p.textContent = `${todo} (Due by ${dueBy})   `
  p.appendChild(btn)
  p.appendChild(edit)
  
  document.querySelector('#tasks').appendChild(p)
  document.querySelector('.todoEntry').style.color = `${priorityValue}`
}



function deleteTodo(e) {
  e.target.parentNode.remove()
}



function moveTask(e){
  let task = e.target.parentNode.firstChild
  let completedTasks = document.createElement('li')
  completedTasks.setAttribute('id', 'compTasks')
  let delButton = document.createElement('button')
  let undoButton = document.createElement('button')

  delButton.textContent = 'Delete'
  undoButton.textContent = 'Undo'

  delButton.addEventListener('click', deleteTodo)
  undoButton.addEventListener('click', undoTask)
  
  e.target.parentNode.remove()

  completedTasks.appendChild(task)
  completedTasks.appendChild(delButton)
  completedTasks.appendChild(undoButton)

  document.querySelector('#completedTasks').appendChild(completedTasks)
}



function undoTask(e) {
  let task = e.target.parentNode.firstChild
  let p = document.createElement('li')
  let btn = document.createElement('button')
  let edit = document.createElement('button')

  btn.addEventListener('click', moveTask)
  btn.textContent = 'Done!'

  edit.addEventListener('click', editTodo)
  edit.textContent = 'Edit'

  edit.addEventListener('click', editTodo)
  edit.textContent = 'Edit'

  p.appendChild(task)
  p.appendChild(btn)
  p.appendChild(edit)

  e.target.parentNode.remove()
  
  document.querySelector('#tasks').appendChild(p)
}

function editTodo(e){
  textUpdate = prompt('Edit Task', e.target.parentNode.firstChild.textContent)
  textUpdate === null
  ? {}
  : (e.target.parentNode.firstChild.textContent = `${textUpdate} `)
}
