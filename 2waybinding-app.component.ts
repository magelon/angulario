import { Component } from '@angular/core';

@Component({
    //css selector
    selector: 'my-app',
    //one way data binding in appcomponent class
    //multi-line template strings
    //Import the FormsModule for two waydata binding
    template: `<h1>{{title}}</h1>
                <h2>{{hero.name}} details</h2>
                <div><label>id: </label>{{hero.id}}</div>
                <div>
                  <label>name: </label>
                  <input [(ngModel)]="hero.name" placeholder="name">
                </div>
                `,
})
export class AppComponent  {
    title = 'Tour of Heroes';
    
    
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

}

//The hero needs more properties. Convert the hero from a literal string to a class.
export class Hero {
    id: number;
    name: string;
}