import { Component, OnInit } from '@angular/core';
import { TransavtionHistory } from 'src/app/Models/transavtion-history';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';
import { Items } from 'src/app/Models/items';

@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.css']
})
export class PurchasehistoryComponent implements OnInit {
list:TransavtionHistory;
count:number;
list2:Items[]
todayDate : Date = new Date();
  constructor(private service:BuyerService,private route:Router) {
    let bid=Number(localStorage.getItem("bid"));
    this.service.Transactionhistory(bid).subscribe(res=>{
      this.list=res;
      console.log(this.list);
      this.todayDate=new Date();


    })
    if(localStorage.getItem("bid"))
    {
      let bid=Number(localStorage.getItem("bid"));
      this.service.Getcount(bid).subscribe(res=>{
        this.count=res;
        console.log(this.count)
      })

  
    }else{
  
      this.route.navigateByUrl('/home/login');
  
    }
    
  
   }

  ngOnInit() {
  }

}
