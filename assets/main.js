// FOR TEST ONLY
const TASKS = [{
    name : "Nom tache",
    date : "2022-12-25",
    remainingTime: 200,
    description : "lorem ipsum dolor sic amet...",
    type : "1",
},{
    name : "Ab tache",
    date : "2022-12-25",
    remainingTime: 2,
    description : "lorem ipsum dolor sic amet...",
    type : "0",
},{
    name : "K tache",
    date : "2022-12-25",
    remainingTime : 180,
    description : "lorem ipsum dolor sic amet...",
    type : "0",
},{
    name : "Q tache",
    date : "2022-12-25",
    remainingTime : 22,
    description : "lorem ipsum dolor sic amet...",
    type : "0",
}]

// CLASS FOR OBJECT
class NewTask {
    constructor(name, description, date, type){
        this.name = name,
        this.description = description,
        this.date = date,
        this.delay = checkDelay(date),
        this.remainingTime = remainingTime(this.delay),
        this.type = type
    }
}

let trying = new NewTask("jardinage", "manger du chocolat", "2022-12-13", "dormir");
console.log(trying);

// DisplayingTask

// AddingTask

// ChangingStatus

// Open menus
function showBox(iden){
    
    document.getElementById(`${iden}`).classList.toggle('showFilters');

}

// 
let filtersButton = document.getElementById("filter__button");

filtersButton.addEventListener('click', () => {
    showBox("filters");
 } );

// Sorting
const SORTEDALPHA = TASKS.sort((a,b) => a.name > b.name);
const SORTEDTIME = SORTEDALPHA.sort((a,b) => a.remainingTime - b.remainingTime);

// LocalStorageSaving

window.localStorage.setItem("Tasks", JSON.stringify(TASKS));

// Calculate milliseconds
function checkDelay(dateGiven){
    let today = new Date().getTime();
    let fixed = new Date(dateGiven).getTime();
    let remaining = fixed - today;

    return remaining;
}

// CalculateRemainingTime

function remainingTime(delay){

    let days = Math.floor(delay /(1000 * 60 * 60 * 24));
    let hours = Math.floor(delay % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let min = Math.floor(delay % (1000 * 60 * 60) / (1000 * 60));
    
    let timeRemaining = `${Math.abs(days)}d${(hours > 0)? ` ${Math.abs(hours)}h` : ""} ${(min > 0)? `${Math.abs(min)}m ` : ""}${(min > 0) ? "left" : "ago"}`
    
    return timeRemaining;
    }
    
    remainingTime();

// DisplayRemainingTime
