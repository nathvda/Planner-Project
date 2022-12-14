// CLASS FOR OBJECT
/* THIS CLASS WILL BE USED TO CREATE THE TASKS */
import { checkDelay, remainingTime } from "./Calculations.js"

export class NewTask {
    constructor(name, description, date, type){
        this.name = name,
        this.description = description,
        this.date = date,
        this.delay = checkDelay(date),
        this.remainingTime = remainingTime(this.delay),
        this.type = type
    }
}