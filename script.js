const addForm = document.querySelector(".add")
const tasks = document.querySelector(".tasks")
const clearAll = document.querySelector(".clear")
const messageSpan = document.querySelector(".message span")

function updateMessage(){
  const textLength = tasks.children.length;
  messageSpan.textContent=`you have ${textLength} pending messages.`
} 
updateMessage()

let editId = null
addForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const value = addForm.task.value.trim();
  if(value.length){
    tasks.innerHTML += `
        <li>
            <span>${value}</span>
            <i class="bi bi-trash-fill delete"></i>
        </li>
    `;
    addForm.reset()
    updateMessage()
  }
});

tasks.addEventListener('click',event =>{
  
  if(event.target.classList.contains("delete")){
    event.target.parentElement.remove();
    updateMessage()
  }
})

clearAll.addEventListener("click", event=>{
  const taskItems = tasks.querySelectorAll("li");
  taskItems.forEach(item=>{
    item.remove();
    
  });
  updateMessage();
})
