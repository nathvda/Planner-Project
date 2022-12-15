import { remainingTime, checkDelay } from "./modules/Calculations.js";
import { sortBy } from "./modules/Sorting.js";
import { TASKS } from "./modules/Object.js";
import { NewTask } from "./modules/Class.js";

// Creating new Object
let trying = new NewTask("jardinage", "manger du chocolat", "2022-12-13", "dormir");
console.log(trying);

// AddingTask
let main= document.getElementsByName('main');

let wrapper= document.createElement('article');
wrapper.setAttribute('id','task__wrapper');
wrapper.className.add("task__wrapper");

let box= document.createElement('div');
box.setAttribute('id','task__wrapper__box');
box.className.add("task__wrapper__box");

let task_head= document.createElement('div');
task_head.setAttribute('id','task__wrapper__head');
task_head.className.add("task__wrapper__head");

let head_color= document.createElement('div');
head_color.setAttribute('id','task__wrapper__head__color');
head_color.classList.add("task__wrapper__head__color", "Work", "Homework", "Home", "Purchase", "Sport");

let title_time= document.createElement('div');
title_time.setAttribute('id','task__wrapper__head__title__time');
title_time.className.add("task__wrapper__head__title__time");

let p_title= document.createElement('p');
p_title.setAttribute('id','task__wrapper__head__title');
p_title.className.add("task__wrapper__head__title");

let p_time= document.createElement('p');
p_time.setAttribute('id','task__wrapper__head__time');
p_time.className.add("task__wrapper__head__time");

let date_done= document.createElement('div');
date_done.setAttribute('id','task__wrapper__head__date__done');
date_done.className.add("task__wrapper__head__date__done");

let p_date= document.createElement('p');
p_date.setAttribute('id','task__wrapper__head__date');
p_date.className.add("task__wrapper__head__date");

let b_done= document.createElement('button');
b_done.setAttribute('id','task__wrapper__head__done');
b_done.classList.add("task__wrapper__head__done", "ToDo", "Doing", "Done");




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
