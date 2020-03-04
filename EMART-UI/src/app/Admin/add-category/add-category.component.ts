import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Router} from "@angular/router"
import { AdminService } from 'src/app/Services/admin.service';
import { Category } from 'src/app/Models/category';



@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addcategoryform:FormGroup;
  submitted=false;
  category:Category;
  
 
  constructor(private formbuilder:FormBuilder,private route:Router,private services:AdminService) { }

  ngOnInit() {
    this.addcategoryform=this.formbuilder.group({
      categoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      categoryname:['',Validators.required],
      briefdetails:['',Validators.required],
      
    })
  }
  get f(){return this.addcategoryform.controls;}
  onSubmit()
  {
    this.submitted= true;
    alert("Success")
    this.category=new Category();
      this.category.categoryid=Math.round(Math.random()*1000);
      this.category.categoryname=this.addcategoryform.value["categoryname"],
      this.category.briefdetails=this.addcategoryform.value["briefdetails"]
      this.services.AddCategory(this.category).subscribe(res=>
        {
          console.log('Added succesfully');
        },err=>{console.log(err)}
  
        )

    
      this.route.navigateByUrl('adminloadingpage')
    
  }
}
