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

    private weatherApiURL:string = "http://api.openweathermap.org/data/2.5/weather?";
    private weatherApiKey:string = "d2d6d18ab7d92ecd6bcea3deda3dc8d8";    // My personal key

    constructor(private _http:Http) {}

    getWeatherURL(city:string) {
        return this.weatherApiURL + "q=" + city + "&APPID=" + this.weatherApiKey;
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