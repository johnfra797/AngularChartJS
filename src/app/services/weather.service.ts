import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Root } from '../models/root.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  _ServiceURL:string=''
  constructor(private _http: HttpClient) { 

  }

  getWeatherData(code: string): Promise<Root> {
    return this._http
      .get(`https://api.weather.gov/gridpoints/${code}/31,80/forecast`)
      .toPromise()
      .then((result: any) => {
        return result;
      })
      .catch(function (result) {});
  }
}
