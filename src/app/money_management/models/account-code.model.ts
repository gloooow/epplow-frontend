export class AccountCode{
    public id: number;
    public name: string;

    constructor(data: AccountCode){
        this.id = data.id;
        this.name = data.name;
    }
}