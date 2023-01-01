import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService  {

  constructor(private http:HttpClient) { }

  getData(city_id:any):Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_id}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`)


  }
    }

