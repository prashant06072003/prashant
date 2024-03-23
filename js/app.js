let button = document.getElementById("add-task");
    let input = document.getElementById("task-name")
    let inputValue;
    let tasks = JSON.parse(localStorage.getItem("allTasks")) ||  []
    let table = document.querySelector('tbody')
  

    function loadData() {
        let storedData = JSON.parse(localStorage.getItem("allTasks"))
        storedData.map((s) => {
        table.insertAdjacentHTML("beforeend",`
    <tr>
                <td id="taskHu>${s}</td>
                <td><button id="complete-task" onclick="completetask(this)">Complete</button></td>
                <td><button id="delete-task">Delete</button></td>
            </tr>
    `)
    })
}
 loadData();
 let Completebuttons = document.querySelectorAll("acomplele-task");
 let Completebutton = document.querySelector("acomplete-task");

 function addTask(){
    inputValue = input.Value;
    tasks.push(inputValue)
 }

 button.addEventListener("click", function (){
    localStorage.setItem("allTasks", JSON.stringify(tasks))
    localStorage.setItem("tasknumber", tasks.length)
    table.insertAdjacentHTML("beforeend", `
    <tr>
                <td>${inputValue}</td>
                <td><button id="complete-task" onclick="completetask(this)">Complete</button></td>
                <td><button id="delete-task">Delete</button></td>
            </tr>
    `)
 })
  function completeTask(e){
    e.parentElement.parentElement.querySelector("#taskhu").classList.add("completed")
    e.disabled = true;
  }

   function deleteTask(e){
    tasks.forEach(element =>{
        console.log(element)
    });
    
   }