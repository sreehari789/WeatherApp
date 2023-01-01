import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
 weather:any
  searched=''
  city_id:any
  icon:any
  temperature:any
  myDate:any
  time:any
 constructor(private api:ApiService){
  // new Date(obj.dt*1000-(obj.timezone*1000))
 }

  ngOnInit():void{ }

  search(event:any){
    this.city_id=event.target.value
    this.getWeather()
  }

// To get weather data
 
getWeather(){
 this.api.getData(this.city_id).subscribe((data:any)=>{
      this.weather=data
   
 this.icon=this.weather.weather
 this.temperature=Math.floor(this.weather.main.temp-273.15)

 
this.currentTime()
      
  })
   }

  // To get current date and time
  currentTime(){
    this.myDate = new Date() 
    var localTime = this.myDate.getTime()
    var localOffset = this.myDate.getTimezoneOffset() * 60000
   var utc = localTime + localOffset
   var location = utc + (1000 * this.weather.timezone)
   this.time = new Date(location)
   
   }}
 



