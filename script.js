const addForm = document.querySelector(".add")

addForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log(addForm.task.value);
})