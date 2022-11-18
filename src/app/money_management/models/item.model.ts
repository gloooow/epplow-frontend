import { Account } from "./account.model";

export class Item {
    // TODO: Add currency 
    public id: number;
    public name: string;
    public date: Date;
    public price: number;
    public change: number;
    public tax: number;
    public total: number;
    public currency: string;
    public type: string;
    public account: number;
    public categories: string;

    constructor(data: Item) {
        this.id = data.id;
        this.name = data.name;
        this.date = data.date;
        this.price = data.price;
        this.change = data.change;
        this.tax = data.tax;
        this.total = data.total;
        this.currency = data.currency;
        this.type = data.type;
        this.account = data.account;
        this.categories = data.categories;
    }
}
