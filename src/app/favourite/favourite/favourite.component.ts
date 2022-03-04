import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})

export class FavouriteComponent implements OnInit {

  getLocalStorageData:any
  convertLocalStorageData:any=[]
  lists:any=[]
  result:any=[]
  totalcity:any

  constructor(private appservice:AppService) { }

  ngOnInit(): void {
  
  this.getLocalStorageData=localStorage.getItem('favourite');
  this.convertLocalStorageData=JSON.parse(this.getLocalStorageData)
  if(this.convertLocalStorageData!==null){
    this.lists=JSON.parse(this.getLocalStorageData)
  }

  this.appservice.subb.subscribe((value)=>{
  this.getLocalStorageData=localStorage.getItem('favourite');
  this.convertLocalStorageData=JSON.parse(this.getLocalStorageData)
  if(this.convertLocalStorageData!==null){
    this.lists=JSON.parse(this.getLocalStorageData)
  }
})
this.totalcity=this.lists.length
}

clearall(){
  localStorage.setItem('favourite',JSON.stringify(null))
  this.lists=[]
}

removeData(data:any){
  this.result=this.lists.filter((x: any) => x.id!==data.id);
  this.lists=this.result
  localStorage.setItem('favourite',JSON.stringify(this.lists))
 }
 
}
