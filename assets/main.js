import { remainingTime, checkDelay } from "./modules/Calculations.js";
import { sortBy } from "./modules/Sorting.js";
import { NewTask } from "./modules/Class.js";

let TASKS = [];

loadObject();

// AddingTask
function AddingTask(name, description, date, type, status, remainingTime) {
  let wrapper = document.getElementById("task__wrapper");

  let box = document.createElement("div");
  box.setAttribute("id", "task__wrapper__box");
  box.classList.add("task__wrapper__box");

  let task_head = document.createElement("div");
  task_head.setAttribute("id", "task__wrapper__head");
  task_head.classList.add("task__wrapper__head");

  let head_color = document.createElement("div");
  head_color.setAttribute("id", "task__wrapper__head__color");
  head_color.classList.add("task__wrapper__head__color",type);

  let title_time = document.createElement("div");
  title_time.setAttribute("id", "task__wrapper__head__title__time");
  title_time.classList.add("task__wrapper__head__title__time");

  let p_title = document.createElement("p");
  p_title.setAttribute("id", "task__wrapper__head__title");
  p_title.classList.add("task__wrapper__head__title");
  let p_titletexte=document.createTextNode(name);
  p_title.appendChild(p_titletexte)

  let p_time = document.createElement("p");
  p_time.setAttribute("id", "task__wrapper__head__time");
  p_time.classList.add("task__wrapper__head__time");
  let p_timetexte=document.createTextNode(remainingTime);
  p_time.appendChild(p_timetexte);

  let date_done = document.createElement("div");
  date_done.setAttribute("id", "task__wrapper__head__date__done");
  date_done.classList.add("task__wrapper__head__date__done");

  let p_date = document.createElement("p");
  p_date.setAttribute("id", "task__wrapper__head__date");
  p_date.classList.add("task__wrapper__head__date");
  let p_datetime=document.createTextNode(date);
  p_date.appendChild(p_datetime);

  let b_done = document.createElement("button");
  b_done.setAttribute("id", "task__wrapper__head__done");
  b_done.classList.add(
    "task__wrapper__head__done",
    status
   );

  let task_desc = document.createElement("div");
  task_desc.setAttribute("id", "task__wrapper__description");
  task_desc.classList.add("task__wrapper__description");

  let desc_delete = document.createElement("div");
  desc_delete.setAttribute("id", "task__wrapper__description__delete");
  desc_delete.classList.add(
    "task__wrapper__description__delete",
    type
  );

  let p_desc = document.createElement("p");
  let p_desctexte=document.createTextNode(description);
  p_desc.appendChild(p_desctexte);

  wrapper.appendChild(box);
  box.appendChild(task_head);
  box.appendChild(task_desc);
  task_head.appendChild(head_color);
  task_head.appendChild(title_time);
  task_head.appendChild(date_done);
  title_time.appendChild(p_title);
  title_time.appendChild(p_time);
  date_done.appendChild(p_date);
  date_done.appendChild(b_done);
  task_desc.appendChild(p_desc);
  task_desc.appendChild(desc_delete);
}

CreatingTask(TASKS) 

function CreatingTask(ToCreate){

  loadObject();

  document.getElementById("task__wrapper").innerHTML = "";

  if (ToCreate == null){
    return
  }

  for(let elem of ToCreate){
      let nom=elem["name"];
      let descript=elem["description"];
      let time=elem["date"];
      let types=elem["type"];
      let faire=elem["status"];
      let reste=elem["remainingTime"];
      AddingTask(nom, descript, time, types, faire, reste);
   }
}

function getInfo() {
  let nameTask = document.getElementById("dtaskName").value;
  console.log(nameTask);
  let descriptionTask = document.getElementById("dText").value;
  console.log(descriptionTask);
  let dateTask = document.getElementById("dtaskDate").value;
  console.log(dateTask);

  let select1 = document.getElementById("dtaskSelect").selectedIndex;
  console.log(select1);
  let selectOption1 = document
    .getElementById("dtaskSelect")
    .querySelectorAll("option");
  let valueOption1 = selectOption1[select1].value;

  let select2 = document.getElementById("dtaskSelectStatut").selectedIndex;
  console.log(select2);
  let selectOption2 = document
    .getElementById("dtaskSelectStatut")
    .querySelectorAll("option");
  let valueOption2 = selectOption2[select2].value;

  let task = new NewTask(
    nameTask,
    descriptionTask,
    dateTask,
    valueOption1,
    valueOption2
  );

  if (TASKS == null){
     TASKS = [];
  }

  console.log(task);
  TASKS.push(task);
  console.log(TASKS);

  saveObject();
  CreatingTask(TASKS);
}

let subButton = document.getElementById("descriptionForm__button");
subButton.addEventListener("click", getInfo);

// ChangingStatus
/*
let buttonTodo = document.getElementById("task__wrapper").children;
for ( let i = 0; i < buttonTodo.length ; i++)

buttonTodo[i].addEventListener('click', (e) => {

    console.log(e.target.classList);
    console.log("À remplir ici");
    TASKS[i].status = "DONE";
    CreatingTask(TASKS);
    
  })
*/

// sorting stuff
let sorting = document.getElementsByName("tasks")[0];
sorting.addEventListener("change", () => {
  loadObject();
  sortBy(TASKS);
  hiding();
  saveObject();
});

let showOrNot = document.getElementById("show");

function hiding(){

let alpha = showOrNot.querySelector('input[type="radio"]:checked').value;
let ToShow = TASKS.filter((elem) => elem.status == alpha);

CreatingTask(ToShow);

if (alpha == "All"){
    CreatingTask(TASKS);
    console.log("???");
}
}

showOrNot.addEventListener('change', () => {
loadObject();
sortBy(TASKS);
hiding();
saveObject();
});


// Open menus
/** iden = the id of the button */
function showBox(iden) {
  document.getElementById(`${iden}`).classList.toggle("showFilters");
}

/* DISPLAYS FILTERS FOR MOBILE */
let filtersButton = document.getElementById("filter__button");

filtersButton.addEventListener("click", () => {
  showBox("filters");
});

/* DISPLAYS FORM FOR MOBILE */

let formButton = document.getElementById("descripForm__button");

formButton.addEventListener("click", () => {
  showBox("descripForm");
});

// LocalStorageSaving

function saveObject() {
  localStorage.setItem("Tasks", JSON.stringify(TASKS));
}

function loadObject() {
  let loadObject = localStorage.getItem("Tasks");
  TASKS = JSON.parse(loadObject);
}

//Display number of task
function displayCurrentTasks(){
  if (TASKS == null){
    return
  }
document.getElementById("currentTasks").innerHTML = TASKS.length;
}

displayCurrentTasks();