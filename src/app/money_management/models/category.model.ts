export class Category{
    public id: number;
    public name: string;

    constructor(data: Category){
        this.id = data.id;
        this.name = data.name;
    }
}