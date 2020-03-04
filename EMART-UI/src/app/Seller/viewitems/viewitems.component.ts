import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Items } from 'src/app/Models/items';
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
isShow:boolean=true;

constructor(private service:ItemService,private formBuilder:FormBuilder) { 
}

ngOnInit() {
  this.itemform=this.formBuilder.group({
    iid:[''],
   
   
    price:[''],
    itemname:[''],
   
    stocknumber:[''],
  
  });
  this.ViewItems();
}
ViewItems()
{ 
  this.service.GetAll().subscribe(res=>
    {
      this.list=res;
      console.log(this.list);
    },
    err=>{
      console.log(err);
    });
}
Search1(){
  this.isShow=!this.isShow;
}
 Search(iid:number)
{
  this.Search1();
  // this.isShow=!this.isShow;
  this.service.getItem(iid).subscribe(res=>{
    this.item=res;
    console.log(this.item);
    this.itemform.setValue({
      iid:this.item.iid,
      itemname:this.item.itemName,
      price:this.item.price,
      stocknumber:this.item.stockNumber,
  
  
    })
  })
}
Update()
{

  // this.isShow=!this.isShow;
  this.item=new Items();
  this.item.iid=this.itemform.value["iid"];
 
  this.item.itemName=this.itemform.value["itemname"];
  this.item.price=Number(this.itemform.value["price"]);

  this.item.stockNumber=this.itemform.value["stocknumber"];
  console.log(this.item);
this.service.updateitem(this.item).subscribe(res=>{
  console.log('Record Updated');
  alert('Record Updated');
}
,err=>{
  console.log(err);
})
}
Delete(iid:any)
 {
    
   this.service.Deleteitem(iid).subscribe(res=>{
     console.log('record deleted');

 },err=>{
    console.log(err);
 }
  )
} 

}