import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import {Router} from "@angular/router"
import { AdminService } from 'src/app/Services/admin.service';
import { Subcategory } from 'src/app/Models/subcategory';
import { IfStmt } from '@angular/compiler';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {
  addsubcategoryform:FormGroup;
  submitted=false;
  subcategory:Subcategory;
  clist:Category[];
    constructor(private formbuilder:FormBuilder,private route:Router,private service:AdminService,private services:BuyerService) {
    this.services.GetCategory().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })
   }

  ngOnInit() {
    this.addsubcategoryform=this.formbuilder.group({
      categoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      subcategoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      subcategoryname:['',[Validators.required,Validators.pattern("^[a-z]+$")]],
      categoryname:['',Validators.required],
      GST:['',Validators.required],
      briefdetails:['',Validators.required],
      
    })
  }
  get f(){return this.addsubcategoryform.controls;}
  onSubmit()
  {
    this.submitted= true;
  this.subcategory=new Subcategory();
      this.subcategory.subcategoryid=Math.round(Math.random()*1000);
      this.subcategory.categoryid=Number(this.addsubcategoryform.value["categoryid"]);
      this.subcategory.subcategoryname=this.addsubcategoryform.value["subcategoryname"];
      this.subcategory.GST=Number(this.addsubcategoryform.value["GST"]);
      this.subcategory.briefdetails=this.addsubcategoryform.value["briefdetails"];
      console.log(this.subcategory);
      this.service.AddSubCategory(this.subcategory).subscribe(res=>
        {
          console.log('Added succesfully');
        },err=>{console.log(err)}
  )

      
      
    }
  
}
