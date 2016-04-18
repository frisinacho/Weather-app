/**
 * Created by frisinacho on 15/4/16.
 */

import {Component} from 'angular2/core';

@Component({
    selector : 'my-app',
    template : `
        <h1>Weather App</h1>
        <h2>This is the weather forecast in {{ city }}</h2>
    `
})
export class AppComponent {
    city:string;

    constructor() {
        this.city = "Stockholm";
    }
}