export class Model{
    user;
    items;

    constructor(){
        this.user = "Fuad";
        this.items = [
            new todoItem("Kahvalti", true),
            new todoItem("Spor", false),
            new todoItem("Fature", true)
        ]
    }
}
export class todoItem{
    description;
    action;

    constructor(description: string, action: boolean){
        this.description = description;
        this.action = action;
    }
}