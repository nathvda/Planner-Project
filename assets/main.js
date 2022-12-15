import { remainingTime, checkDelay } from "./modules/Calculations.js";
import { sortBy } from "./modules/Sorting.js";
import { NewTask } from "./modules/Class.js";

// Creating new Object
let trying = new NewTask(
  "jardinage",
  "manger du chocolat",
  "2022-12-13",
  "dormir"
);
console.log(trying);

export let TASKS = [
  {
    name: "jardinage",
    description: "manger du chocolat",
    date: "2022-12-13",
    delay: -224935422,
    remainingTime: "3d ago",
    type: "dormir",
    status: "ToDo",
  },
  {
   name: "jardinage",
   description: "manger du chocolat",
   date: "2022-12-13",
   delay: -224935422,
   remainingTime: "3d ago",
   type: "Homework",
   status: "Done",
 },
 {
   name: "jardinage",
   description: "manger du chocolat",
   date: "2022-12-13",
   delay: -224935422,
   remainingTime: "3d ago",
   type: "dormir",
   status: "Doing",
 },
 {
   name: "jardinage",
   description: "manger du chocolat",
   date: "2022-12-13",
   delay: -224935422,
   remainingTime: "3d ago",
   type: "dormir",
   status: "doing",
 },
];

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
  head_color.classList.add(
    "task__wrapper__head__color",
    type
  );

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

}

function CreatingTask(){
   for(let elem of TASKS){
      let nom=elem["name"];
      let descript=elem["description"];
      let time=elem["date"];
      let types=elem["type"];
      let faire=elem["status"];
      let reste=elem["remainingTime"];
      AddingTask(nom, descript, time, types, faire, reste);
   }
}



CreatingTask()
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
  console.log(task);

  TASKS.push(task);
  console.log(TASKS);

  saveObject();

  return TASKS;
}

let subButton = document.getElementById("descriptionForm__button");
subButton.addEventListener("click", getInfo);

// DisplayingTask

// ChangingStatus

// let buttonTodo = document.getElementById("task__wrapper__head__done");
// buttonTodo.addEventListener('click', () => {
   
//    console.log("À remplir ici");

// })

// sorting stuff
let sorting = document.getElementsByName("tasks")[0];
sorting.addEventListener("change", sortBy);

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
  window.localStorage.setItem("Tasks", JSON.stringify(TASKS));
}

function loadObject() {
  let loadObject = window.localStorage.getItem("Tasks");
  TASKS = JSON.parse(loadObject);
}

window.addEventListener("load", loadObject);

remainingTime();

// DisplayRemainingTime
