import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
}) 

export class RecentComponent implements OnInit {

  getLocalStorageData:any
  convertLocalStorageData:any=[]
  lists:any=[]
  convertFavouriteDataLocal: any;
  getFavouriteDataLocal: any;
weatherData:any
  

  constructor(private appservice:AppService) { }

  ngOnInit(): void {
    this.getLocalStorageData=localStorage.getItem('data');
    this.convertLocalStorageData=JSON.parse(this.getLocalStorageData)
    if(this.convertLocalStorageData!==null){
      this.lists=JSON.parse(this.getLocalStorageData)
    }
  
    this.getFavouriteDataLocal=localStorage.getItem('favourite')
    this.convertFavouriteDataLocal=JSON.parse(this.getFavouriteDataLocal)
    if(  this.convertFavouriteDataLocal!==null){
      for(let i :number=0;i<this.lists.length;i++){
        for(let j :number=0;j<this.convertFavouriteDataLocal.length;j++){
        if(this.lists[i].id===this.convertFavouriteDataLocal[j].id){
          this.lists[i].liked=this.convertFavouriteDataLocal[j].liked
        }
       }
      }  
    }
    
  this.appservice.subb.subscribe((value)=>{
    this.getLocalStorageData=localStorage.getItem('data');
    this.convertLocalStorageData=JSON.parse(this.getLocalStorageData)
    if(this.convertLocalStorageData!==null){
      this.lists=JSON.parse(this.getLocalStorageData)
    }
  })
}

unlike(data:any){
  for(let i :number=0;i<this.lists.length;i++){
     if(data.id===this.lists[i].id){
       this.lists[i].liked=! this.lists[i].liked
     }
  }
  this.getFavouriteDataLocal=localStorage.getItem('favourite')
  this.convertFavouriteDataLocal=JSON.parse(this.getFavouriteDataLocal)
  if(  this.convertFavouriteDataLocal!==null){
    
      for(let j :number=0;j<this.convertFavouriteDataLocal.length;j++){
        if(data.id===this.convertFavouriteDataLocal[j].id){
          this.convertFavouriteDataLocal[j].liked=data.liked
          if(this.convertFavouriteDataLocal[j].liked===false){
            this.convertFavouriteDataLocal.splice(j,1)
          }
      }
    }
    if(data.liked===true){
      this.convertFavouriteDataLocal.push(data)
    }
      localStorage.setItem('favourite',JSON.stringify(this.convertFavouriteDataLocal))
  }
}

clearall(){
  localStorage.setItem('data',JSON.stringify(null))
  this.lists=[]
}

changeColor(data:any){
  return data.liked?"yellow":"white";
}

}
