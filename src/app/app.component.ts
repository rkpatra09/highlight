import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private searchTerms:string;
  heros : [{
    name: string,
    id : number
  }];
  constructor(){
    this.heros = [{
      name : "Deus Ex: Mankind Divided",
      id: 1
    },
    {
        name : "Xbox One, PS4, Vita, PC",
        id: 2
    },
    {
        name : "Ranjan Patra",
        id: 3
    },
    {
        name : "durga Prasad mohapatra",
        id: 4
    }];
  }
  search(term: string): void {
    this.searchTerms=term;
    console.log(term)
  }



}
