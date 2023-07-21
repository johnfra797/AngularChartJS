import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart,ChartOptions,registerables, ChartType  } from 'chart.js';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent { 
  private weatherCode: string | null | undefined;
  public lineChart: any;
  public barChart: any;
  
  constructor(private route:ActivatedRoute,private _weatherService:WeatherService) { 
    Chart.register(...registerables);
  }

  getDataByWeatherCode(weatherCode:string){
    this._weatherService.getWeatherData(weatherCode).then((data)=>{
      this.createChart(data);
    });
  }
  createChart(data:any){
    let humidity = data.properties.periods.map((a: { relativeHumidity: any; })  => a.relativeHumidity.value);
    let temperatures = data.properties.periods.map((a: { temperature: any; })  => a.temperature);
    let names = data.properties.periods.map((a: { name: any; }) => a.name);
    
    this.lineChart = new Chart("MyChartLine", {
      type: 'line', 

      data: {
        labels: names, 
	       datasets: [
          {
            label: `Weather ${this.weatherCode}`,
            data: temperatures,
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
    this.barChart = new Chart("MyChartBar", {
      type: 'bar', 

      data: {
        labels: names, 
	       datasets: [
          {
            label: `Weather Humidity ${this.weatherCode}`,
            data: humidity,
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  ngOnInit(): void {
    this.weatherCode = this.route.snapshot.paramMap.get('id')
    if(this.weatherCode!==undefined && this.weatherCode!==null){
      this.getDataByWeatherCode(this.weatherCode);
    }
  }
}
