import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css']
})
export class WeathersComponent implements OnInit{
  weatherCodes:Weather[] = [new Weather('KANSAS','TOP'),new Weather('COLUMBIA','LWX')]

  constructor() { }

  ngOnInit(): void {  
  }

}
