export class Model{
    user;
    items;

    constructor(){
        this.user = "Fuad";
        this.items = [
            new todoItem("Kahvalti", false),
            new todoItem("Spor", false),
            new todoItem("Fatura", false),
            new todoItem("Düğün", true)
        ]
    }
}
export class todoItem{
    description;
    action;

    constructor(description: any, action: any){
        this.description = description;
        this.action = action;
    }
}