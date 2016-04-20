/**
 * Created by frisinacho on 15/4/16.
 */

import {Component} from 'angular2/core';

import {Weather} from './weather';

@Component({
    selector : 'my-app',
    template : `
        <header>
            <h1>Weather App</h1>
        </header>
        
        <div class="content">
            <input [(ngModel)]="city" placeholder="Search weather for your city" (keyup)="addCity(city, $event)">
            <p *ngIf="errorMessage" class="error-message">{{ errorMessage }}</p> 
            
            <ul *ngFor="#weather of weatherOfCities">
                <li>
                    <h2>{{ weather.city }}:</h2>
                    <ul>
                        <li>Weather type: {{ weather.main }}</li>
                        <li>Weather description: {{ weather.description }}</li>
                    </ul>
                </li>
            </ul>
        </div>
    `,
    styles : [`
        header h1 {
            padding: 10px;
            background: #5F9EA0;
            color: #F5F5F5;
            text-shadow: 1px 1px 4px #808080;
        }
        .content {
            padding: 10px;
        }
        input {
            font-size: 16px;
            padding: 4px;
        }
        .weather-card {
            border-bottom: 1px solid #D3D3D3;
            padding-bottom: 10px;
        }
        .error-message {
            color : red;
            font-size: 8px;
        }
    `]
})
export class AppComponent {
    public city:string;
    public cities:Array<string>;
    public weatherOfCities:Array<Weather>;
    public errorMessage:string;

    constructor() {
        this.city = "";
        this.weatherOfCities = [];
    }

    getWeather = function (city:string) {
        this.errorMessage = ""; // Cleaning errorMessage line
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
        } else {
            this.errorMessage = "This city doesn't exist";
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