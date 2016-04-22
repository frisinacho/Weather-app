/**
 * Created by Nacho on 21/4/16.
 */

import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {Weather} from './weather';

@Injectable()
export class WeatherService {

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
}