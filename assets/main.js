import { remainingTime, checkDelay } from "./modules/Calculations.js";
import { sortBy } from "./modules/Sorting.js";
import { TASKS } from "./modules/Object.js";
import { NewTask } from "./modules/Class.js";

// Creating new Object
let trying = new NewTask("jardinage", "manger du chocolat", "2022-12-13", "dormir");
console.log(trying);

// AddingTask

<<<<<<< HEAD
function getInfo () {
    let nameTask = document.getElementById("dtaskName").value;
    console.log(nameTask)
    let descriptionTask = document.getElementById("dText").value;
    console.log(descriptionTask)
    let dateTask = document.getElementById("dtaskDate").value;
    console.log(dateTask)

    let select1 = document.getElementById("dtaskSelect").selectedIndex;
    console.log(select1)
    let selectOption1 = document.getElementById("dtaskSelect").querySelectorAll("option");
    let valueOption1 = selectOption1[select1].value

    let select2 = document.getElementById("dtaskSelectStatut").selectedIndex;
    console.log(select2)
    let selectOption2 = document.getElementById("dtaskSelectStatut").querySelectorAll("option");
    let valueOption2 = selectOption2[select2].value

    let task = new NewTask (nameTask, descriptionTask, dateTask, valueOption1, valueOption2);
    console.log(task)

}


let subButton = document.getElementById("descriptionForm__button");
subButton.addEventListener('click', getInfo);



=======
// DisplayingTask
>>>>>>> 2c076c7ba16b88b1e2f54d252734cadd63cbb2d7

// ChangingStatus

// sorting stuff
let sorting = document.getElementsByName("tasks")[0];
sorting.addEventListener('change', sortBy)

// Open menus
/** iden = the id of the button */
function showBox(iden){
document.getElementById(`${iden}`).classList.toggle('showFilters');
}

/* DISPLAYS FILTERS FOR MOBILE */
let filtersButton = document.getElementById("filter__button");

filtersButton.addEventListener('click', () => {
    showBox("filters");
 });

 /* DISPLAYS FORM FOR MOBILE */
 
 let formButton = document.getElementById("descripForm__button");

 formButton.addEventListener('click', () => {
    showBox("descripForm")
 })

// LocalStorageSaving

window.localStorage.setItem("Tasks", JSON.stringify(TASKS));
let currentTasks = localStorage.getItem("Tasks");
    
remainingTime();

// DisplayRemainingTime
