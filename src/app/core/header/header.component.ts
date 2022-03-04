import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  inputData:any=''

  route: any;

  constructor(private appservice:AppService,private router:Router) { }

  ngOnInit(): void {
  }

  onSearch(){
    // this.router.navigate(['/home'],{relativeTo: this.route}); 
   this.router.navigateByUrl('/home');
    this.appservice.searchedLocationData(this.inputData)
    this.inputData=''
  
    
  }
}
