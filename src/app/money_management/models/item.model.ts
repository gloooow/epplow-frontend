import { Account } from "./account.model";

export class Item {
    // TODO: Add currency 
    public id: number;
    public selected: boolean;
    public name: string;
    public date: Date;
    public price: number;
    public spare: number;
    public tax: number;
    public total: number;
    public currency: string;
    public type: string;
    public account: number;
    public categories: string;

    constructor(data: Item) {
        this.id = data.id;
        this.selected = data.selected;
        this.name = data.name;
        this.date = data.date;
        this.price = data.price;
        this.spare = data.spare;
        this.tax = data.tax;
        this.total = data.total;
        this.currency = data.currency;
        this.type = data.type;
        this.account = data.account;
        this.categories = data.categories;
    }
}
