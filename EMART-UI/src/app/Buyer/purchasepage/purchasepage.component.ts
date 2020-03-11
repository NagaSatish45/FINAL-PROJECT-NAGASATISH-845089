import { Component, OnInit } from '@angular/core';
import { TransavtionHistory } from 'src/app/Models/transavtion-history';
import { Items } from 'src/app/Models/items';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { ItemService } from 'src/app/Services/item.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-purchasepage',
  templateUrl: './purchasepage.component.html',
  styleUrls: ['./purchasepage.component.css']
})
export class PurchasepageComponent implements OnInit {

  item:Items;
  list1:Items[];
  cart:Cart;
  submitted=false;
  transaction:TransavtionHistory;
  buyproductform:FormGroup;
  check:boolean;
  count:number;
  constructor(private formbuilder:FormBuilder,private buyer:BuyerService,private items:ItemService,private route:Router) { 
    if(localStorage.getItem("sid"))
    {
      let bid=Number(localStorage.getItem("bid"));
      this.buyer.Getcount(bid).subscribe(res=>{
        this.count=res;
      })

    }else{

      this.route.navigateByUrl('/home/login');

    }
  
  }

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
    this.cart=JSON.parse(localStorage.getItem('item1'));
    console.log(this.cart);
    console.log(this.cart.iid);
    this.buyproductform.patchValue({
        itemName:this.cart.itemName,
      
      
    })
  }
  purchase()
  {
    this.submitted= true;
    if(this.buyproductform.valid)
    {
      console.log(this.item);
      this.transaction=new TransavtionHistory();
     this.transaction.sid=this.cart.sid;
      this.transaction.iid=this.cart.iid;
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
          this.CheckItem();
        },err=>{console.log(err)
        alert('Please add Details');
        }
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
CheckItem(){
  let iid=this.cart.iid;
  let bid=Number(localStorage.getItem("bid"));
  this.buyer.CheckCartItem(iid,bid).subscribe(res=>{
    this.check=res;
    console.log(this.check);
    if(this.check==true){
      this.Delete();
    }
  })
}
Delete(){
  console.log(this.cart.cartid);
  let id=this.cart.cartid
  this.buyer.deletfromCart(id).subscribe(res=>{
    console.log('Cart item Removed');
  })
}
}