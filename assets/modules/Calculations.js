// Calculate milliseconds
export function checkDelay(dateGiven){
    let today = new Date().getTime();
    let fixed = new Date(dateGiven).getTime();
    let remaining = fixed - today;

    return remaining;
}

// CalculateRemainingTime
export function remainingTime(delay){

    let days = Math.floor(delay /(1000 * 60 * 60 * 24));
    let hours = Math.floor(delay % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let min = Math.floor(delay % (1000 * 60 * 60) / (1000 * 60));
    
    let timeRemaining = `${Math.abs(days)}d${(hours > 0)? ` ${Math.abs(hours)}h` : ""} ${(min > 0)? `${Math.abs(min)}m ` : ""}${(min > 0) ? "left" : "ago"}`
    
    return timeRemaining;
    }


