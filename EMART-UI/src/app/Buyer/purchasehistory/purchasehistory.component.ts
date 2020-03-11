import { Component, OnInit } from '@angular/core';
import { TransavtionHistory } from 'src/app/Models/transavtion-history';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.css']
})
export class PurchasehistoryComponent implements OnInit {
list:TransavtionHistory;
  constructor(private service:BuyerService,private route:Router) {
    let bid=Number(localStorage.getItem("bid"));
    this.service.Transactionhistory(bid).subscribe(res=>{
      this.list=res;
      console.log(this.list);


    })
    if(localStorage.getItem("sid")==null)
    {
      this.route.navigateByUrl('/home/login');

    }
  
   }

  ngOnInit() {
  }

}
