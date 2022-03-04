import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const httpOptions = {
  headers:new HttpHeaders({
    'Authorization':'68085cfbab39e5c39aba07858802de50'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  WeatherData: any;
  weatherApiData :any
  searchedLocation:any

  value:any=[]

  getLocalStorageData:any
  convertLocalStorageData:any=[]

  sub=new Subject();
  subb=new Subject();

  constructor(private http: HttpClient) { }

  currentLocationData(lat:any,lon:any):Observable<any>{
      return this.http.get<any>('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=68085cfbab39e5c39aba07858802de50') 
  }

  searchedLocationData(data:any){
    this.weatherApiData=this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?q='+data+'&appid=68085cfbab39e5c39aba07858802de50')
    .subscribe((value)=>{
      value.liked=false
      this.sub.next(value)
    this.getLocalStorageData=localStorage.getItem('data');
    this.convertLocalStorageData=JSON.parse(this.getLocalStorageData)
   
    if(this.convertLocalStorageData!==null){
      this.value=this.convertLocalStorageData
      this.value.push(value)
     
      localStorage.setItem('data',JSON.stringify(this.value))
    
    }
    else{
      this.value.push(value)
      localStorage.setItem('data',JSON.stringify(this.value))
    }

    this.subb.next(this.value)
  })
    
}
}




