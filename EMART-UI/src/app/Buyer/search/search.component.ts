import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { BuyerService } from 'src/app/Services/buyer.service';
import { ItemService } from 'src/app/Services/item.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchform:FormGroup;
list:Items[];
items:Items;
cart:Cart;
list1:Items[];
isShow:boolean=true;
clist:Category[];
count:number;
  constructor(private service:BuyerService,private itemservice:ItemService,private router:Router,
    private formbuilder:FormBuilder) {
  if(localStorage.getItem("bid"))
  {
    let bid=Number(localStorage.getItem("bid"));
    this.service.Getcount(bid).subscribe(res=>{
      this.count=res;
      console.log(this.count)
    });
  }
  

  else{

    this.router.navigateByUrl('/home/login');

  }


  



      
    
    }

  ngOnInit() {
    this.searchform=this.formbuilder.group({
      itemName:['']
    })
   this.ViewItems();
  }
ViewItems()
{ 
  this.itemservice.GetAll().subscribe(res=>
    {
      this.list1=res;
      console.log(this.list1);
    },
    err=>{
      console.log(err);
    });
}
search()
{
  this.items=new Items();
  this.items.itemName=this.searchform.value["itemName"];
  this.service.Search(this.items.itemName).subscribe(res=>{
    this.list=res;
    console.log(this.list);
 
  }
  ,err=>{
    console.log(err);
  })
}
buy(item2:Items)

{
  console.log(item2);
  localStorage.setItem('item1',JSON.stringify(item2));
  this.router.navigateByUrl('buyerslandingpage/purchasepage');

}

Show(){
  this.isShow=!this.Show
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
 this.service.Addtocart(this.cart).subscribe(res=>{
   console.log("Record added To Cart");
   alert('Item has been Added To Cart');
   this.router.navigateByUrl('buyerslandingpage/viewcart');
   
 })
}
SearchByCategory(iid:number){
  this.service.GetSubCategory(iid).subscribe(res=>{
    this.list=res;
    console.log(this.list);
  })

}
}


