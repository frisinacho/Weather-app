/**
 * Created by Nacho on 18/4/16.
 */

import {IWeather} from "./iweather";

export class Weather implements IWeather {

    constructor(public id:number, public city:string, public main:string, public description:string) {
        
    }
}