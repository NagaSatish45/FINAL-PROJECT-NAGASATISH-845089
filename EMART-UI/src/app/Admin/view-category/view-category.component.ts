import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { Category } from 'src/app/Models/category';
@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  itemform:FormGroup;
  item:Category;
  submitted=false;
  list:Category[];
  isShow:boolean=true;

  constructor(private builder:FormBuilder,private service:AdminService) { 
    this.service.GetAll().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    }, err=>{
      console.log(err);
    }
    )
  }

  ngOnInit() 
  {
    this.itemform=this.builder.group({
      categoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      categoryname:['',Validators.required],
      briefdetails:['',Validators.required],
      
    })

  }
  get f() { return this.itemform.controls; }

  
  onSubmit() {
      this.submitted = true;
  }
  onReset() {
      this.submitted = false;
      this.itemform.reset();
  }
 /*  Update()
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
  } */
 Delete(categoryid:any)
 {
    
   this.service.DeleteCategory(categoryid).subscribe(res=>{
     console.log('record deleted');

 },err=>{
    console.log(err);
 }
  )
} 

}
