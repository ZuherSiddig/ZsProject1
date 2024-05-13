
    

    
       
let tasks = [
    {
        "name": "قراة كتاب",
        "date": "4/7/2030",
        "isdone": true
    

    },
    {
        "name": "سماع اغنية",
        "date": "5/6/2020",
        "isdone": false
    

    },
    {
        "name": "حصص جافا",
        "date": "6/6/2040",
        "isdone": true
    

    }
   
]


  function getTasksFromStorge(){

    let getTask = JSON.parse(localStorage.getItem("zezo"))
      
      tasks = getTask ?? []
    
    }
  getTasksFromStorge()

 
 function addToTask() {
  document.getElementById("task").innerHTML = ""

  let index = 0

for(task of tasks){
   
let zezo = `
                <!--TASKS-->
                <div style="padding: 2px;" id="task">

                <!--TASK-->
                <div class="task ${task.isdone ? 'done' : ''} ">
                    <!--TASK INFO-->
                    <div style="width: 70%; ">
                        <h2>${task.name}</h2>

                        <div>
                                <span class="material-symbols-outlined" style="line-height: 0%;">
                                    calendar_month
                                </span>

                                <span style="font-size: 25px;">
                                ${task.date}
                                </span>
                        </div>
                    </div>
                    <!--//TASK INFO//-->

                    <!--TASK ACTION-->
                    <div style=" width: 20%; display: flex; justify-content: space-between; align-items: center;">
                        <button   onclick="deleteTask(${index})"  class="btn" style="background-color: red;color: white;">

                                                    <span class="material-symbols-outlined">
                                                    delete
                                                    </span>
                                                                                    
                        </button>

                        ${task.isdone? `
                                          
                                            <button onClick="  toggleTaskCompletion(${index})"  class="btn" style="background-color: rgb(110, 0, 101);color: white">
                                                        <span class="material-symbols-outlined">
                                                        cancel
                                                        </span>
                                           </button>

                        
                        ` : `
                        
                             
                                            <button onClick="  toggleTaskCompletion(${index})"  class="btn" style="background-color: green;;color: white">
                                                <span class="material-symbols-outlined">
                                                    done
                                                </span>
                                             </button>

                        `}

                        <button onClick="editTask(${index})" class="btn" style="background-color: blue;;color: white">
                                    <span class="material-symbols-outlined">
                                        edit
                                    </span>
                        </button>
                    </div>
                    <!--//TASK ACTION//-->
                </div>
                <!--//TASK//-->
                </div>
            `
  document.getElementById("task").innerHTML += zezo
  index++
        }

            }
                addToTask()

            document.getElementById("add-btn").addEventListener("click", function(){
                let taskName = prompt("الرجاء ادخال المهمة")
                let now = new Date()
                let date = now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear()
                let taskObj = {
                    "name": taskName,
                    "date": date,
                    "isdone": false
                }

                tasks.push(taskObj)
                storTask()
                addToTask()
        })


       
  

  function deleteTask (index){
    let z = tasks[index]
    let isCon = confirm(" هل انت متاكد من حذف:" + z.name)
        
    if (isCon){
        tasks.splice(index,1)
        storTask()
        addToTask()
    }
  }

  function editTask(index){
    let Task = tasks[index]
    let eName = prompt("هل انت متاكد من تعديل",Task.name)
     Task.name = eName
     storTask()
     addToTask() 

  }

  function toggleTaskCompletion(index){
    let cTask = tasks[index]
    cTask.isdone = !cTask.isdone
    storTask()
    addToTask() 
  }


  // ======= STORGE FUNCTION =======

  function storTask(){
    let tasksString =JSON.stringify(tasks) 
    localStorage.setItem("zezo", tasksString)

  }
