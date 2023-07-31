const title = document.getElementById("title");
const description = document.getElementById("description");
const date = document.getElementById("date");
const time = document.getElementById("time");
const form = document.querySelector("form");
const container = document.querySelector(".container");



const tasks = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
showAllTasks();

function showAllTasks (){

  tasks.forEach((value,index)=>{

    const div = document.createElement("div");
    div.setAttribute("class","task");

    const innerDiv = document.createElement("div");
    div.append(innerDiv);

    const span = document.createElement("span");
    span.setAttribute("class", "badge");
    span.innerText = value.date;
    innerDiv.append(span);

    const span1 = document.createElement("span");
    span1.setAttribute("class", "badge1");
    span1.innerText = value.time;
    innerDiv.append(span1);

    const p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);

    const span2 = document.createElement("span");
    span2.innerText = value.description;
    innerDiv.append(span2);

    const btn = document.createElement("button");
    btn.setAttribute("class", "deleteBtn");
    const i = document.createElement("i");
    i.setAttribute("class","fa-solid fa-trash-can");
    btn.append(i);
    
    btn.addEventListener("click",()=>{
      removeTask();
      tasks.splice(index,1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      
      showAllTasks();
    })
    div.append(btn);
     container.append(div);





  });
};

function removeTask() {

  tasks.forEach((value)=>{
    const div = document.querySelector(".task");
    div.remove();
    
  })
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTask();

  tasks.push({
    title: title.value,
    description: description.value,
    date: date.value,
    time: time.value,

  });
  console.log(tasks);
  
  localStorage.setItem("tasks", JSON.stringify(tasks));
  
  showAllTasks();
  title.value = ''; //clear the values after submiting the form
  description.value = '';
  date.value = '';
  time.value = '';
});



