class Account{
    id: number;
    name: string;
    balance: number;
    currency: string;
    code: number;

    constructor(data: Account){
        this.id = data.id;
        this.name = data.name;
        this.balance = data.balance;
        this.currency = data.currency;
        this.code = data.code;
    }
}