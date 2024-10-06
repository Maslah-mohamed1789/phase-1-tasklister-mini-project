document.addEventListener("DOMContentLoaded", () => {
});
  // your code here
  document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
    const form = document.getElementById("create-task-form");
    let listContainer = document.getElementById("list");
    form.onsubmit = (e) =>{
      e.preventDefault(); 
      let newTask = document.getElementById("new-task-description").value;
      let colors = document.getElementById("colors").value;
      listContainer.appendChild(listFuction(newTask, colors));
      form.reset();
    }
    function listFuction(task, color){
      
      let lists = document.createElement("li");
      
      lists.textContent = task;
      lists.style.color = color;
    
      let edit = document.createElement("button");
      edit.textContent = "edit";
    
      edit.onclick = () =>{
        
        let newContent = prompt("Edit item", task);
        if ( newContent !== "") {
            lists.textContent = newContent;
            lists.appendChild(del)
            lists.appendChild(edit)
        }
      };
      lists.appendChild(edit)
      let del = document.createElement("button");
      del.textContent = "X";
      del.onclick = () => {
          lists.remove();
      }
      lists.appendChild(del)
      return lists; 
    }
  });
