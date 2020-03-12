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
    if(localStorage.getItem("sid"))
  {

  }else{

    this.route.navigateByUrl('/home/login');

  }

}

  ngOnInit() {
  }
  public logout()
  {
    localStorage.clear();
    this.route.navigateByUrl("home/login")
    
  }

}
