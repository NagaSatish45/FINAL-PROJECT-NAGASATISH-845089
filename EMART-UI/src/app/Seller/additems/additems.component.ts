import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/Services/item.service';
import { Items } from 'src/app/Models/items';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  additemform:FormGroup;
  submitted=false;
  item:Items;
  list:Items[];
  constructor(private formbuilder:FormBuilder,private route:Router,private services:ItemService) { }

  ngOnInit() {
    this.additemform=this.formbuilder.group({
      iid:['',Validators.required],
      categoryid:['',Validators.required],
      sid:['',Validators.required],
      subcategoryid:['',Validators.required],
      price:['',Validators.required],
      stocknumber:['',Validators.required],

      itemname:['',Validators.required],
      
      description:['',Validators.required],
      remarks:['',Validators.required],
     
    })
  }
  get f(){return this.additemform.controls;}
  Add()
  {
    this.submitted= true;
   
    if(this.additemform.valid)
    {
      this.item=new Items();
      this.item.iid=Number(this.additemform.value["iid"]);
      this.item.itemname=this.additemform.value["itemname"];
      this.item.categoryid=Number(this.additemform.value["categoryid"]);
      this.item.subcategoryid=Number(this.additemform.value["subcategoryid"]);
      this.item.price=Number(this.additemform.value["price"]);
      this.item.stocknumber=Number(this.additemform.value["stocknumber"]);
      this.item.description=this.additemform.value["description"];
      this.item.remarks=this.additemform.value["remarks"];
      this.item.sid=Number(this.additemform.value["sid"]);
      this.services.Additem(this.item).subscribe(res=>
        {

          console.log("registered successfully");
        },err=>{console.log(err)}
  
        )

      

  
    
      
    }
  }
 
    Update()
    {
      this.submitted= true;
   
    if(this.additemform.valid)
    {
      this.item=new Items();
      this.item.iid=Number(this.additemform.value["iid"]);
      this.item.itemname=this.additemform.value["itemname"];
      this.item.categoryid=Number(this.additemform.value["categoryid"]);
      this.item.subcategoryid=Number(this.additemform.value["subcategoryid"]);
      this.item.price=Number(this.additemform.value["price"]);
      this.item.stocknumber=Number(this.additemform.value["stocknumber"]);
      this.item.description=this.additemform.value["description"];
      this.item.remarks=this.additemform.value["remarks"];
      this.item.sid=Number(this.additemform.value["sid"]);
      this.services.updateitem(this.item).subscribe(res=>
        {

          console.log("registered successfully");
        },err=>{console.log(err)}
  
        )

      

  
    
    
     
        
          
    
    
      
    }

  }
}