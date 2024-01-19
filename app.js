const addTask=document.getElementById("add-task")

const inputTask=document.getElementById("input-task")

const taskContainer=document.getElementById("task-container")

addTask.addEventListener('click',()=>{

    if(inputTask.value==""){
        alert("please first write something")
    }
    else{
    let task=document.createElement('div')
    task.classList.add('task');  // adding classes just for css

    let li=document.createElement('li');

    li.innerText=`${inputTask.value}`

    task.appendChild(li);

    let checkbutton=document.createElement('button');
    checkbutton.innerHTML='<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("checktask")
    task.appendChild(checkbutton);

    let deletebutton=document.createElement('button');
    deletebutton.innerHTML='<i class="fa-solid fa-trash-can"></i>'
    deletebutton.classList.add("deletetask")
    task.appendChild(deletebutton);

    taskContainer.appendChild(task);


        checkbutton.addEventListener('click', function(){

            checkbutton.parentElement.style.textDecoration="line-through"
            // console.log(checkbutton.parentElement)
            // li.style.textDecoration="line-through";

        })

        deletebutton.addEventListener('click',(e)=>{

            // console.log(e)
            // console.log(e.target)
            // console.log("hi")
            // console.log(e.target.parentElement)
            // console.log(e.target.parentElement.parentElement)
            // console.log(e.target.parentElement.parentElement.parentElement)
            // console.log(e.target.parentElement.parentElement.parentElement.parentElement)
            // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement)
            // console.group("deep")
            // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
            // console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
            let target=e.target;
            target.parentElement.parentElement.remove();
        })
    }

    inputTask.value="";



    
})