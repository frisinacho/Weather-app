/**
 * Created by frisinacho on 15/4/16.
 */

import {Component} from 'angular2/core';

import {Weather} from './weather';

@Component({
    selector : 'my-app',
    template : `
        <h1>Weather App</h1>
        <h2>This is the weather forecast in {{ city }}</h2>
        
        <ul>
            <li>Weather type: {{ weather.main }}</li>
            <li>Weather description: {{ weather.description }}</li>
        </ul>
    `
})
export class AppComponent {
    city:string;
    weather:Weather;

    constructor() {
        this.city = "Stockholm";

        this.weather = new Weather(1, "London", "cloudy", "Fully cloudy");
    }
}