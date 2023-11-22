const addForm = document.querySelector('.add');

 addForm.addEventListener('submit', event => {
   
   event.preventDefault();
   console.og(addForm.task.value);
 })