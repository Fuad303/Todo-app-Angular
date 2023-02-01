import { Component } from '@angular/core';
import { Model, todoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplay = false;

  getName(){
    return this.model.user;
  }

  getItems(){
    if(!this.isDisplay){
      return this.model.items.filter(item => !item.action);
    }
    else{
      return this.model.items;
    }
  }

  addItem(value: any){
    if(value!= ""){
      this.model.items.push(new todoItem(value, false));
    }
  }
}