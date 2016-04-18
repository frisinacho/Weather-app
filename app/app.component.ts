/**
 * Created by frisinacho on 15/4/16.
 */

import {Component} from 'angular2/core';

import {Weather} from './weather';

@Component({
    selector : 'my-app',
    template : `
        <h1>Weather App</h1>
        
        <input [(ngmodel)]="city" placeholder="Search weather for your city">
        <h2>This is the weather forecast in {{ city }}</h2>
        
        <ul *ngFor="#weather of weatherOfCities">
            <li>
                <h2>{{ weather.city }}:</h2>
                <ul>
                    <li>Weather type: {{ weather.main }}</li>
                    <li>Weather description: {{ weather.description }}</li>
                </ul>
            </li>
        </ul>
    `
})
export class AppComponent {
    public city:string;
    public cities:Array<string>;
    public weatherOfCities:Array<Weather>;

    constructor() {
        this.city = "";
        this.weatherOfCities = [];
    }
}