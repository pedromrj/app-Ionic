import { TouchSequence } from "selenium-webdriver";

export class Evento {
    public $key: string;
    public hours: string;
    public date: string;
    public name: string;
    public description: string;
    public type: string;
    public format: string;
    public year: string;
    public userID: string;

    constructor(hours: string,
        date: string,
        name: string,
        description: string,
        type: string,
        format: string,
        year: string,
        userID: string) {
            this.hours = hours;
            this.date = date;
            this.name = name;
            this.description = description;
            this.type = type;
            this.format = format;
            this.year = year;
            this.userID = userID
        }
}
