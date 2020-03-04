import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { ItemService } from 'src/app/Services/item.service';
import { Items } from 'src/app/Models/items';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Category } from 'src/app/Models/category';
import { Subcategory } from 'src/app/Models/subcategory';

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
  clist:Category[];
  sclist:Subcategory[];
  constructor(private formbuilder:FormBuilder,private services:ItemService,private service:BuyerService) {
    this.service.GetCategory().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
   }

  ngOnInit() {
    this.additemform=this.formbuilder.group({
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
    alert("HHI");
  
      this.item=new Items();
      this.item.iid=Math.round(Math.random()*1000);
      this.item.itemName=this.additemform.value["itemname"];
      this.item.categoryId=Number(this.additemform.value["categoryid"]);
      this.item.subcategoryId=Number(this.additemform.value["subcategoryid"]);
      this.item.price=Number(this.additemform.value["price"]);
      this.item.stockNumber=Number(this.additemform.value["stocknumber"]);
      this.item.description=this.additemform.value["description"];
      this.item.remarks=this.additemform.value["remarks"];
      this.item.sid=Number(this.additemform.value["sid"]);
      console.log(this.item);
      this.services.Additem(this.item).subscribe(res=>
        {

          console.log("registered successfully");
        },err=>{console.log(err)}
  
        )

      

  
    
      
    
  }
 GetSubCategory()
  {
    let cid=this.additemform.value["categoryid"];
    console.log(cid);
    this.service.GetSubCategory(cid).subscribe(res1=>{
      this.sclist=res1;
      console.log(this.sclist);
    })
   }

 
    
     
        
          
    
    
      
    
  


}
