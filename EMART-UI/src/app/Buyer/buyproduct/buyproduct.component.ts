import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TransavtionHistory } from 'src/app/Models/transavtion-history';
import { BuyerService } from 'src/app/Services/buyer.service';
import { ItemService } from 'src/app/Services/item.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {
  item:Items;
  list1:Items[];
  submitted=false;
  cart:Cart;
  transaction:TransavtionHistory;
  buyproductform:FormGroup;
  count:number;
  
  constructor(private formbuilder:FormBuilder,private buyer:BuyerService,private items:ItemService,private route:Router) { 
    if(localStorage.getItem("bid"))
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
buy(item2:Items)

{
  console.log(item2);
  localStorage.setItem('item1',JSON.stringify(item2));
  this.route.navigateByUrl('buyerslandingpage/purchasepage');

}
AddtoCart(item2:Items){
  let itemlocal=JSON.stringify(localStorage.getItem("item1"));
  console.log(item2);
  let bid=localStorage.getItem('buyerid');
 this.cart=new Cart();
 this.cart.cartid=(Math.round(Math.random()*1000));
 this.cart.iid=item2.iid;
 this.cart.categoryId=item2.categoryId;
 this.cart.subcategoryId=item2.subcategoryId;
 this.cart.sid=item2.sid;
 this.cart.stockNumber=item2.stockNumber;
  this.cart.itemName=item2.itemName;
  this.cart.price=item2.price;
 this.cart.description=item2.description;
 this.cart.imagepath=item2.imagepath;
 this.cart.bid=Number(localStorage.getItem("bid"));
 console.log(this.cart);
 this.buyer.Addtocart(this.cart).subscribe(res=>{
   console.log("Record added To Cart");
   alert('Item has been Added To Cart');
   this.route.navigateByUrl('buyerslandingpage/viewcart');
   
 })
}


}
