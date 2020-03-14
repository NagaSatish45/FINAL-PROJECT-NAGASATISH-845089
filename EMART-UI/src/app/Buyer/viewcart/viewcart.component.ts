import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Models/cart';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  cartlist:Cart[];
  item:Items;
  cart:Cart;
  count:number;
    constructor(private route:Router,private service:BuyerService) {
      let bid=Number(localStorage.getItem('bid'));
      this.service.getcart(bid).subscribe(res=>{
        this.cartlist=res;
        console.log(this.cartlist);
      });
      if(localStorage.getItem("bid"))
      {
        let bid=Number(localStorage.getItem("bid"));
        this.service.Getcount(bid).subscribe(res=>{
          this.count=res;
        })
  
      }else{
  
        this.route.navigateByUrl('/home/login');
  
      }
    
     }
    ngOnInit() {
    }
  BuyNow(item1:Cart){
        console.log(item1);
        this.cart=item1;
        localStorage.setItem('item1',JSON.stringify(this.cart));
        
       // this.Remove(this.cart.cartid);
        this.route.navigateByUrl('buyerslandingpage/purchasepage');
  }
  Remove(cartid:number){
  let id=cartid;
    alert("deleted")
    console.log(cartid);
    this.service.deletfromCart(cartid).subscribe(res=>{
      console.log('Item Removed from Cart');
      alert('Item Removed from Cart');
      this.route.navigateByUrl('buyerslandingpage/viewcart')
    })
  }
}