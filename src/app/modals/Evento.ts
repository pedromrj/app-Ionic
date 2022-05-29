export class Evento {
    public $key: string;
    public hours: string;
    public date: string;
    public name: string;
    public discription: string;
    public type: string;
    public format: string;
    public year: string;

    constructor(hours: string,
        date: string,
        name: string,
        discription: string,
        type: string,
        format: string,
        year: string) {
            this.hours = hours;
            this.date = date;
            this.name = name;
            this.discription = discription;
            this.type = type;
            this.format = format;
            this.year = year;
        }
}