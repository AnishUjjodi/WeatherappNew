import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
day:any
dateVariable:any
month:any
year:any
  constructor() { }

  ngOnInit(): void {
    this.dateVariable = new Date();
    setInterval(()=>{
      this.dateVariable = new Date();
    },60000);

    this.day = this.dateVariable.getDay();
  }
}
