import { remainingTime, checkDelay } from "./modules/Calculations.js";
import { sortBy } from "./modules/Sorting.js";
import { TASKS } from "./modules/Object.js";
import { NewTask } from "./modules/Class.js";

// Creating new Object
let trying = new NewTask("jardinage", "manger du chocolat", "2022-12-13", "dormir");
console.log(trying);

// AddingTask

// DisplayingTask

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


// LocalStorageSaving

window.localStorage.setItem("Tasks", JSON.stringify(TASKS));
let currentTasks = localStorage.getItem("Tasks");
    
remainingTime();

// DisplayRemainingTime
