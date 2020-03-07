import { Component, OnInit } from '@angular/core';
import { TransavtionHistory } from 'src/app/Models/transavtion-history';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.css']
})
export class PurchasehistoryComponent implements OnInit {
list:TransavtionHistory;
  constructor(private service:BuyerService) {
    let bid=Number(localStorage.getItem("bid"));
    this.service.Transactionhistory(bid).subscribe(res=>{
      this.list=res;
      console.log(this.list);

    })
   }

  ngOnInit() {
  }

}
