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
   sid:[''],
    categoryid:[''],
    subcategoryid:[''],
    price:[''],
    description:[''],
    itemname:[''],
    remarks:[''],
    stocknumber:[''],
    imagepath:['']
  
  });
  this.ViewItems();
}
ViewItems()
{ 
  let sid=Number(localStorage.getItem("sid"));
  this.service.ViewItems(sid).subscribe(res=>
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
      sid:this.item.sid,
      description:this.item.description,
      categoryid:this.item.categoryId,
      imagepath:this.item.imagepath,
      subcategoryid:this.item.subcategoryId,
      itemname:this.item.itemName,
      price:this.item.price,
      stocknumber:this.item.stockNumber,
      remarks:this.item.remarks,
  
  
    })
  })
}
Update()
{

  // this.isShow=!this.isShow;
  this.item=new Items();
  this.item.iid=this.itemform.value["iid"];
 this.item.categoryId=this.itemform.value["categoryid"],
 this.item.subcategoryId=this.itemform.value["subcategoryid"],
 this.item.sid=this.itemform.value["sid"],
 this.item.description=this.itemform.value["description"],
  this.item.itemName=this.itemform.value["itemname"];
  this.item.price=Number(this.itemform.value["price"]);
  this.item.imagepath=this.itemform.value["imagepath"],
  this.item.remarks=this.itemform.value["remarks"],

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