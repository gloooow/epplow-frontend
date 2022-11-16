export class Item {
    public id: number;
    public name: string;
    public date: Date;
    public price: number;
    public change: number;
    public tax: number;
    public type: string;
    public account: string;
    public categories: string[];

    constructor(data: Item) {
        this.id = data.id;
        this.name = data.name;
        this.date = data.date;
        this.price = data.price;
        this.change = data.change;
        this.tax = data.tax;
        this.type = data.type;
        this.account = data.account;
        this.categories = data.categories;
    }
}
