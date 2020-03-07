import { Component, OnInit } from '@angular/core';
import { TransavtionHistory } from 'src/app/Models/transavtion-history';
import { Items } from 'src/app/Models/items';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { ItemService } from 'src/app/Services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchasepage',
  templateUrl: './purchasepage.component.html',
  styleUrls: ['./purchasepage.component.css']
})
export class PurchasepageComponent implements OnInit {

  item:Items;
  list1:Items[];
  submitted=false;
  transaction:TransavtionHistory;
  buyproductform:FormGroup;
  constructor(private formbuilder:FormBuilder,private buyer:BuyerService,private items:ItemService,private route:Router) { }

  ngOnInit() {
    this.buyproductform=this.formbuilder.group({
      itemName:[''],
      transactionType:[''],
      cardNumber:[''],
      CVV:[''],
      ed:[''],
      name:[''],
      pid:[''],
      sid:[''],
      numberOfItems:[''],
      iid:[''],
      dateTime:['']
    })
    this.ViewItems()
    this.viewdata();
    
  }
  viewdata()
  {
    this.item=JSON.parse(localStorage.getItem('item1'));
    console.log(this.item);
    console.log(this.item.iid);
    this.buyproductform.patchValue({
        itemName:this.item.itemName,
      
      
    })
  }
  purchase()
  {
    this.submitted= true;
    if(this.buyproductform.valid)
    {
      console.log(this.item);
      this.transaction=new TransavtionHistory();
     this.transaction.sid=this.item.sid;
      this.transaction.iid=this.item.iid;
      this.transaction.noOfItems=Number(this.buyproductform.value["numberOfItems"]);
      this.transaction.bid=Number(localStorage.getItem("bid"))
      this.transaction.dateTime=this.buyproductform.value["dateTime"];
      this.transaction.transactionId=Math.round(Math.random()*1000);
      this.transaction.transactionType=this.buyproductform.value["transactionType"];
      this.transaction.remarks=this.buyproductform.value["remarks"];
      this.transaction.pid=Math.round(Math.random()*1000);
      console.log(this.transaction)
      this.buyer.Additem(this.transaction).subscribe(res=>
        {
        
          console.log('Edited succesfully');
        },err=>{console.log(err)}
  
        )
      }

  }
  ViewItems()
{ 
  this.items.GetAll().subscribe(res=>
    {
      this.list1=res;
      console.log(this.list1);
    },
    err=>{
      console.log(err);
    });
}
}