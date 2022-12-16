// Sorting
export function sortBy(ToSort){

    let alpha = document.querySelector('input[type="radio"]:checked').value;
    console.log(alpha);
    
    if (alpha == "remainingTime"){
    let TASKS = ToSort.sort((a,b) => a.delay - b.delay);
    console.log(TASKS);
    } else if (alpha == "taskName"){
    let TASKS = ToSort.sort((a,b) => a.name > b.name);
    console.log(TASKS);
    }}
    