import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { UserService } from 'src/app/Services/user.service';
import { SellerService } from 'src/app/Services/seller.service';
import { ItemService } from 'src/app/Services/item.service';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {
itemform:FormGroup;
item:Items;
submitted=false;
list:Items[];
seller:Seller

  constructor(private builder:FormBuilder,private service:ItemService) { 
    this.service.GetAll().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    }, err=>{
      console.log(err);
    }
    )
  }

  ngOnInit() {
    this.itemform=this.builder.group({
      sid:['']
    });
  }
  get f() { return this.itemform.controls; }

  onSubmit() {
      this.submitted = true;
  }
  onReset() {
      this.submitted = false;
      this.itemform.reset();
  }
  Update()
  {
    this.item=new Items();
    this.item.iid=Number(this.itemform.value["iid"]);
    this.item.categoryid=Number(this.itemform.value["categoryid"]);
    this.item.subcategoryid=Number(this.itemform.value["subcatergoryid"]);
    this.item.price=this.itemform.value["price"];
    this.item.itemname=this.itemform.value["itemname"];
    this.item.description=this.itemform.value["description"];
    this.item.stocknumber=Number(this.itemform.value["stocknumber"]);
    this.item.remarks=this.itemform.value["remarks"];
    this.item.sid=Number(this.itemform.value["sid"]);
    console.log(this.item);
    this.service.updateitem(this.item).subscribe(res=>
      {
        console.log('record updated')
      })
  }
  Delete()
  {
    let id=this.itemform.value["iid"];
    this.service.Deleteitem(id).subscribe(res=>{
      console.log('record deleted');

    },err=>{
      console.log(err);
    }
    )
      

  
    
      
    }
  

}
