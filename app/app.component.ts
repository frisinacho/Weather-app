/**
 * Created by frisinacho on 15/4/16.
 */

import {Component} from 'angular2/core';

import {Weather} from './weather';

@Component({
    selector : 'my-app',
    template : `
        <h1>Weather App</h1>
        
        <input [(ngModel)]="city" placeholder="Search weather for your city" (keyup)="addCity(city, $event)">
        
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

    getWeather = function (city:string) {
        var weather:Weather;
        if (city.toLocaleLowerCase() == "stockholm") {
            weather = {
                "id" : 1,
                "city" : "Stockholm",
                "main" : "Clouds",
                "description" : "Overcast clouds"
            };
        } else if (city.toLocaleLowerCase() == "london") {
            weather = {
                "id" : 2,
                "city" : "London",
                "main" : "Rain",
                "description" : "Very heavy rain"
            };
        }
        return weather;
    }

    addCity = function (city:string, $event) {
        if ($event.keyCode == 13) {
            var weather = this.getWeather(city);
            if (weather) {
                this.weatherOfCities.push(this.getWeather(city));
            }
            this.city = "";
        }
    }
}