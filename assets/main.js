import { sortBy } from "./modules/Sorting.js";
import { NewTask } from "./modules/Class.js";

let TASKS = [];

loadObject();
displayCurrentTasks();
let date = new Date();
let day = date.getDate();
let month = (date.getMonth())+1;
let year = date.getFullYear();
document.getElementById("dtaskDate").value = `${year}-${(month < 10) ? `0${month}` : `${month}`}-${(day < 10) ? `0${day}` : `${day}`}`;

// AddingTask
function AddingTask(name, description, date, type, status, remainingTime, x) {

  let wrapper = document.getElementById("task__wrapper");

  let box = document.createElement("div");
  box.setAttribute("id", "task__wrapper__box");
  box.classList.add("task__wrapper__box", `tache-${x}`);

  let task_head = document.createElement("div");
  task_head.setAttribute("id", "task__wrapper__head");
  task_head.classList.add("task__wrapper__head");

  let head_color = document.createElement("div");
  head_color.setAttribute("id", "task__wrapper__head__color");
  head_color.classList.add("task__wrapper__head__color",`${type}`);

  let title_time = document.createElement("div");
  title_time.setAttribute("id", "task__wrapper__head__title__time");
  title_time.classList.add("task__wrapper__head__title__time");

  let p_title = document.createElement("p");
  p_title.setAttribute("id", "task__wrapper__head__title");
  p_title.classList.add("task__wrapper__head__title");
  let p_titletexte=document.createTextNode(`${name}`);
  p_title.appendChild(p_titletexte)

  let p_time = document.createElement("p");
  p_time.setAttribute("id", "task__wrapper__head__time");
  p_time.classList.add("task__wrapper__head__time");
  let p_timetexte=document.createTextNode(`${remainingTime}`);
  p_time.appendChild(p_timetexte);

  let date_done = document.createElement("div");
  date_done.setAttribute("id", "task__wrapper__head__date__done");
  date_done.classList.add("task__wrapper__head__date__done");

  let p_date = document.createElement("p");
  p_date.setAttribute("id", "task__wrapper__head__date");
  p_date.classList.add("task__wrapper__head__date");
  let p_datetime=document.createTextNode(`${date}`);
  p_date.appendChild(p_datetime);

  let b_done = document.createElement("button");
  b_done.setAttribute("aria-label", "button_tocheck");
  b_done.setAttribute("id", "task__wrapper__head__done");
  b_done.classList.add(
    "task__wrapper__head__done",
    `${status}`
   );

  let task_desc = document.createElement("div");
  task_desc.setAttribute("id", "task__wrapper__description");
  task_desc.classList.add("task__wrapper__description");

  let desc_delete=document.createElement("div");
  desc_delete.setAttribute("id", "task__wrapper__description__delete");
  desc_delete.classList.add("task__wrapper__description__delete");

  let desc_delete_b = document.createElement("button");
  desc_delete_b.setAttribute("id", "task__wrapper__description__delete__button");
  desc_delete_b.setAttribute("aria-label", "bouton_poubelle");
  desc_delete_b.classList.add(
    "task__wrapper__description__delete__button", `poubelle-${x}`
  );

  desc_delete_b.addEventListener('click', (e) => {
    loadObject();
    let idpoubelle = e.target.classList.item(1);
    let IdPoubelle = idpoubelle.split("-");
    console.log(IdPoubelle[1]);

    document.querySelector(`.tache-${IdPoubelle[1]}`).remove();
    TASKS.splice(IdPoubelle[1], 1);
    console.log(TASKS);
    displayCurrentTasks();
    saveObject();
  })

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
  desc_delete.appendChild(desc_delete_b);
}

CreatingTask(TASKS)

function CreatingTask(ToCreate){

  loadObject();

  document.getElementById("task__wrapper").innerHTML = "";

  if (ToCreate == null){
    return
  }
  let x = 0;
  for(let elem of ToCreate){
      let nom=elem["name"];
      let descript=elem["description"];
      let time=elem["date"];
      let types=elem["type"];
      let faire=elem["status"];
      let reste=elem["remainingTime"];
      AddingTask(nom, descript, time, types, faire, reste, x);
      x++;
   }

   addToggle();
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
  displayCurrentTasks();
}

let subButton = document.getElementById("descriptionForm__button");
subButton.addEventListener("click", getInfo);

// ChangingStatus
function addToggle(){
  
let buttonTodo = document.getElementById("task__wrapper").querySelectorAll(".task__wrapper__head__done");

for ( let i = 0; i < buttonTodo.length ; i++)

buttonTodo[i].addEventListener('click', (e) => {

    console.log(e.target.classList);

    if (e.target.classList.contains("Done")){
      e.target.classList.remove("Done");
      e.target.classList.add("ToDo");
      TASKS[i].status = "ToDo";}
      else if (e.target.classList.contains("Doing")){

        e.target.classList.remove("Doing");
        e.target.classList.add("Done");
        TASKS[i].status = "Done";
      } else {
     e.target.classList.contains("ToDo")
        e.target.classList.remove("ToDo");
        e.target.classList.add("Doing");
        TASKS[i].status = "Doing";
    }
    saveObject();

  })
}


// sorting stuff
let sorting = document.getElementsByName("tasks")[0];
sorting.addEventListener("change", () => {
  loadObject();
  sortBy(TASKS);
  hiding();
});

let showOrNot = document.getElementById("show");

function hiding(){
let alpha = showOrNot.querySelector('input[type="radio"]:checked').value;
let ToShow = TASKS.filter((elem) => elem.status == alpha);

CreatingTask(ToShow);

if (alpha == "All"){
    sortBy(TASKS)
    CreatingTask(TASKS);
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
