/**
 * Created by Nacho on 21/4/16.
 */

import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Weather} from './weather';

@Injectable()
export class WeatherService {

    private weatherApiURL:string = "http://api.openweathermap.org/data/2.5/weather?appid=44db6a862fba0b067b1930da0d769e98"; // Alejando Rangel's API

    constructor(private _http:Http) {}

    getWeatherURL(city:string) {
        return this.weatherApiURL + "&q=" + city;
    }

    getWeather(city:string) {
        return new Observable(observable => {
            this._http.get(this.getWeatherURL(city))
                .map(res => res.json())
                .subscribe(res => {
                    if (res.cod == "404") {
                        observable.error(res.message);
                    } else {
                        var weather:Weather = res.weather[0];
                        weather.city = city;
                        observable.next(weather);
                    }
                });
        });
    }
}