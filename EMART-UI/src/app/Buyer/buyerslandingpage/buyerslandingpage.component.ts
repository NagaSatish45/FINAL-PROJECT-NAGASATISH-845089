import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-buyerslandingpage',
  templateUrl: './buyerslandingpage.component.html',
  styleUrls: ['./buyerslandingpage.component.css']
})
export class BuyerslandingpageComponent implements OnInit {

  name:string;
  count:number;
  constructor( private route:Router,public buyer:BuyerService) {
  //   if(sessionStorage.getItem("un"))
  //   {
  //   this.name=sessionStorage.getItem("un");
  //   console.log(this.name);
  //  }
  if(localStorage.getItem("sid"))
  {
    let bid=Number(localStorage.getItem("bid"));
    this.buyer.Getcount(bid).subscribe(res=>{
      this.count=res;
      console.log(this.count)
    })

  }else{

    this.route.navigateByUrl('/home/login');

  }
   }
  
  // else
  // {
  //   this.route.navigateByUrl("login")
  // }



  ngOnInit() {
  }
  public logout()
  {
    sessionStorage.clear();
    this.route.navigateByUrl("home/login")
    localStorage.clear();
    
  }

}
