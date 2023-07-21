import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeathersComponent } from './components/weathers/weathers.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  {path:'', component:WeathersComponent},
  {path:'weather/:id', component:WeatherComponent},
  {path:'weathers', component:WeathersComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
