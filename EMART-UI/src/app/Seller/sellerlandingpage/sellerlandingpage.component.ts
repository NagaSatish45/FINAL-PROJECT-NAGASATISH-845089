import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellerlandingpage',
  templateUrl: './sellerlandingpage.component.html',
  styleUrls: ['./sellerlandingpage.component.css']
})
export class SellerlandingpageComponent implements OnInit {

  name:string;
  constructor( private route:Router) {
    if(sessionStorage.getItem("un"))
    {
    this.name=sessionStorage.getItem("un");
    console.log(this.name);
   }
  
  else
  {
    this.route.navigateByUrl("login")
  }
}

  ngOnInit() {
  }
  public logout()
  {
    sessionStorage.clear();
    this.route.navigateByUrl("login")
    
  }

}
