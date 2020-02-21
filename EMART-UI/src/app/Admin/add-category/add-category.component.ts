import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Router} from "@angular/router"


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addcategoryform:FormGroup;
  submitted=false;
  category_id:number;
  category_name:string;
  brief_details:string;
  constructor(private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit() {
    this.addcategoryform=this.formbuilder.group({
      category_id:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      sname:['',[Validators.required,Validators.pattern("^[A-Z]{5,10}$")]],
      category_name:['',Validators.required],
      brief_details:['',Validators.required],
      
    })
  }
  get f(){return this.addcategoryform.controls;}
  onSubmit()
  {
    this.submitted= true;
    //display form value on success
    if(this.addcategoryform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.addcategoryform.value));
      
    }
  }
}
