export class Account{
    public id: number;
    public name: string;
    public balance: number;
    public currency: string;
    public code: number;

    constructor(data: Account){
        this.id = data.id;
        this.name = data.name;
        this.balance = data.balance;
        this.currency = data.currency;
        this.code = data.code;
    }
}