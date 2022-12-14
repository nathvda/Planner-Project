const TASKS = [{
    name : "Nom tache",
    date : "2022-12-25",
    description : "lorem ipsum dolor sic amet...",
    type : "1",
    urgent : true,
},{
    name : "Ab tache",
    date : "2022-12-25",
    description : "lorem ipsum dolor sic amet...",
    type : "0",
    urgent : false,
},{
    name : "K tache",
    date : "2022-12-25",
    description : "lorem ipsum dolor sic amet...",
    type : "0",
    urgent : false,
},{
    name : "Q tache",
    date : "2022-12-25",
    description : "lorem ipsum dolor sic amet...",
    type : "0",
    urgent : false,
}
]

console.log(TASKS[0].urgent);
console.log(TASKS[1].urgent);

const SORTEDALPHA = TASKS.sort((a,b) => a.name > b.name);
console.log(SORTEDALPHA);
const NOTDKW = TASKS.sort((a,b) => a.name < b.name);
console.log(NOTDKW);

function remainingTime(){
let today = new Date().getTime();
let fixed = new Date(TASKS[0].date).getTime();
let remaining = fixed - today;

let days = Math.floor(remaining /(1000 * 60 * 60 * 24));
let hours = Math.floor(remaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
let min = Math.floor(remaining % (1000 * 60 * 60) / (1000 * 60));

let timeRemaining = `${days}d${(hours > 0)? ` ${hours}h` : ""} ${(min > 0)? `${min}m ` : ""}left`
return timeRemaining;
}

remainingTime();

// DisplayingTask

// AddingTask


// ChangingStatus

// Sorting

// LocalStorageSaving


// CalculateRemainingTime


// DisplayRemainingTime
