import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

WeatherData: any;
lat:any;
lon:any
getLocalStorageData:any
convertLocalStorageData:any=[]
searchedWeatherData:any=[]

favData:any=[]
newData:any
colorValue:any=true
heart:any

c:any=true
check:any

getFavouriteDataLocal:any;
convertFavouriteDataLocal:any

favourite:any=[]

constructor(private appservice:AppService) { }

ngOnInit(): void {

    // Calling the service to provide the curret location weather data!
    navigator.geolocation.getCurrentPosition((position) => {  
      this.lat = position.coords.latitude
      this.lon =position.coords.longitude
      this.WeatherData= this.appservice.currentLocationData(this.lat,this.lon).subscribe((data: any)=>{
        this.WeatherData=data
        this.WeatherData.liked=false
      this.continueCode(this.WeatherData)   
    })
    })
//getting the api response after the input in search bar
    this.appservice.sub.subscribe((value)=>{
        this.WeatherData=value
        this.continueCode(value)

        //getting the current location weather data afteer some 10 sec on every new search
        setTimeout(() => {
          navigator.geolocation.getCurrentPosition((position) => {  
            this.lat = position.coords.latitude
            this.lon =position.coords.longitude
            this.WeatherData= this.appservice.currentLocationData(this.lat,this.lon).subscribe((data: any)=>{
              this.WeatherData=data
            this.continueCode(this.WeatherData)
          })
          })
        }, 10000);
    })
  }

//common conversion code 
continueCode(WeatherData: any) {
  const sunsetTime=new Date(WeatherData.sys.sunset * 1000);
  this.WeatherData.sunset_time=sunsetTime.toLocaleTimeString();   
  let currentDate=new Date();
  this.WeatherData.isDay=(currentDate.getTime()<sunsetTime.getTime());
  this.WeatherData.temp_celcius=(WeatherData.main.temp -273.15).toFixed(0);
  this.WeatherData.temp_min=(WeatherData.main.temp_min -273.15).toFixed(0);
  this.WeatherData.temp_max=(WeatherData.main.temp_max -273.15).toFixed(0);
  this.WeatherData.temp_feels_like=(WeatherData.main.feels_like -273.15).toFixed(0);
  this.WeatherData.fahrenheit=((WeatherData.temp_feels_like* 9)/5 + 32).toFixed()
}

favDataa(data:any){
  this.WeatherData.liked=!data.liked;
  if(this.WeatherData.liked===true){
    this.getFavouriteDataLocal=localStorage.getItem('favourite')
    this.convertFavouriteDataLocal=JSON.parse(this.getFavouriteDataLocal)
    if(this.convertFavouriteDataLocal!==null){
      this.favourite=this.convertFavouriteDataLocal
    }
    this.favourite.push(data)
    localStorage.setItem('favourite',JSON.stringify(this.favourite))
    }else{
    this.getFavouriteDataLocal=localStorage.getItem('favourite')
    this.convertFavouriteDataLocal=JSON.parse(this.getFavouriteDataLocal)
    if(this.convertFavouriteDataLocal!==null){
    this.favourite=this.convertFavouriteDataLocal
    for(let i :number=0;i<this.favourite.length;i++){
      if(this.favourite[i].id===data.id){
        if(data.liked===false){
          this.favourite.splice(i,1)}
        }
      }
  }
  localStorage.setItem('favourite',JSON.stringify(this.favourite))
}
}

onClickbutton1(){
  this.c=true;
  this.colorValue=!this.colorValue   
}

onClickbutton2(){
  this.c=false
   this.colorValue=!this.colorValue
}

getCss(){
return this.colorValue?"white":"transparent";
}

getCsss(){
  return this.colorValue?"transparent":"white";
}

getColor(){
  return this.colorValue?"red":"white";
}

getColorr(){
  return this.colorValue?"white":"red";
}

getValueCss(){
  return {"background-color":this.getCss(),"color":this.getColor()}
}

getCssss(){
  return {"background-color":this.getCsss(),"color":this.getColorr()}
}

changeColor(data:any){
  this.getFavouriteDataLocal=localStorage.getItem('favourite')
  this.convertFavouriteDataLocal=JSON.parse(this.getFavouriteDataLocal)
  if(this.convertFavouriteDataLocal!==null){
    for(let i :number=0;i<this.convertFavouriteDataLocal.length;i++){
      if(this.convertFavouriteDataLocal[i].id===data.id){
        this.WeatherData.liked=this.convertFavouriteDataLocal[i].liked
       }
  }
}
return this.WeatherData.liked?"yellow":"white"; 
}
}
  

