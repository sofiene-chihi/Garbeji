
export class Service {
    private id: number;
    private name: string;
    private category: string;
    private price: number;
    private worktime: string;
    private availability: boolean;
    private description: string;




    constructor(id: number, name: string, category: string, worktime: string,  price: number, availability: boolean, description:string) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.worktime = worktime;
        this.price = price;
        this.availability = availability;
        this.description = description;


    }
  }
  