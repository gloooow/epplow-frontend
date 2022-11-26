export class Account{
    public id: number;
    public name: string;
    public balance: number;
    public currency: string;
    public rate: number;
    public code: number;

    constructor(data: Account){
        this.id = data.id;
        this.name = data.name;
        this.balance = data.balance;
        this.currency = data.currency;
        this.rate = data.rate;
        this.code = data.code;
    }
}

export class ConvertionRate{
    public rates: any;
    public base: string;
    public date: string;

    constructor(data: ConvertionRate){
        this.rates = data.rates;
        this.base = data.base;
        this.date = data.date;
    }
}