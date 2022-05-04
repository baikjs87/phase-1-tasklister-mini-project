document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create_task_form')
  const sort = document.querySelector('#sort')
  const clearListButton = document.querySelector('#clearList')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo(e.target.new_task_description.value)
    form.reset()
  })
  clearListButton.addEventListener('click', () => {
    clearList()
  })
});


sort.addEventListener('click', function(){
  taskItems = array.from(tasks.children)
  let newList = taskItems.sort()
  taskItems.forEach(iteam=>iteam.remove())
})

function addTodo(todo) {
  const p = document.createElement('li')
  p.setAttribute('class', 'todoEntry')
  const btn = document.createElement('button')
  const edit = document.createElement('button')
  const priority = document.getElementById('priority')
  const priorityValue = priority.options[priority.selectedIndex].value
  // const dueDate = document.getElementById('dueDate').required
  const dueBy = document.getElementById('dueDate').value

  // btn.addEventListener('click', deleteTodo)
  btn.addEventListener('click', moveTask)
  btn.textContent = 'Done!'
  btn.className = 'doneButton'
  
  edit.addEventListener('click', editTodo)
  edit.textContent = 'Edit'
  edit.className = 'editButton'
  
  if (dueBy) {p.textContent = `${todo} (Due by ${dueBy})`}
  else {p.textContent = `${todo}`}

  p.appendChild(btn)
  p.appendChild(edit)
  p.setAttribute('style', 'color:' + `${priorityValue}`)

  document.querySelector('#tasks').appendChild(p)  
}


function deleteTodo(e) {
  e.target.parentNode.remove()
}



function moveTask(e){
  const task = e.target.parentNode.firstChild
  const completedTasks = document.createElement('li')
  completedTasks.setAttribute('class', 'compTasks')
  const delButton = document.createElement('button')
  const undoButton = document.createElement('button')

  delButton.textContent = 'Delete'
  delButton.className = 'delButton'
  undoButton.textContent = 'Undo'
  undoButton.className = 'undoButton'

  delButton.addEventListener('click', deleteTodo)
  undoButton.addEventListener('click', undoTask)
  
  e.target.parentNode.remove()

  completedTasks.appendChild(task)
  completedTasks.appendChild(delButton)
  completedTasks.appendChild(undoButton)

  document.querySelector('#completedTasks').appendChild(completedTasks)
}



function undoTask(e) {
  const task = e.target.parentNode.firstChild
  const p = document.createElement('li')
  const btn = document.createElement('button')
  const edit = document.createElement('button')

  btn.addEventListener('click', moveTask)
  btn.textContent = 'Done!'
  btn.className = 'doneButton'

  edit.addEventListener('click', editTodo)
  edit.textContent = 'Edit'
  edit.className = 'editButton'

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
  : (e.target.parentNode.firstChild.textContent = `${textUpdate}`)
}



function clearList() {
  const clearCompTasks = document.querySelector('#completedTasks')
  const completedList = document.createElement('ul')
  completedList.id = 'completedTasks'
  clearCompTasks.remove()
  document.querySelector('#completed').appendChild(completedList)
}