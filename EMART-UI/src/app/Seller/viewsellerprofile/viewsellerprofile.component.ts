import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewsellerprofile',
  templateUrl: './viewsellerprofile.component.html',
  styleUrls: ['./viewsellerprofile.component.css']
})
export class ViewsellerprofileComponent implements OnInit {

  constructor(private route:Router) {
    if(localStorage.getItem("sid"))
  {

  }else{

    this.route.navigateByUrl('/home/login');

  }
   }

  ngOnInit() {
  }

}
