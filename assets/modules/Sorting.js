import { TASKS } from "../main.js";

// Sorting
export function sortBy(){

    let alpha = document.querySelector('input[type="radio"]:checked').value;
    console.log(alpha);
    
    if (alpha == "remainingTime"){
    const SORTEDOBJECT = TASKS.sort((a,b) => a.remainingTime - b.remainingTime);
    console.log(SORTEDOBJECT);
    } else if (alpha == "taskName"){
    const SORTEDOBJECT = TASKS.sort((a,b) => a.name > b.name);
    console.log(SORTEDOBJECT);
    }}
    