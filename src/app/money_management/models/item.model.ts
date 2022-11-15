export class Item {
    public id: number;
    public name: string;
    public date: Date;
    public price: number;
    public change: number;
    public tax: number;
    public type: string;
    public categories: string[];

    constructor(id: number, name: string, date: Date, price: number, change: number, tax: number, type: string, categories: string[]) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.price = price;
        this.change = change;
        this.tax = tax;
        this.type = type;
        this.categories = categories;
    }
}
