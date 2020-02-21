import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Router} from "@angular/router"



@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {
  addsubcategoryform:FormGroup;
  submitted=false;
  subcategory_id:number;
  subcategory_name:string;
  category_id:number;
  brief_details:string;
  GST:number;
  constructor(private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit() {
    this.addsubcategoryform=this.formbuilder.group({
      category_id:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      subcategory_id:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      subcategory_name:['',[Validators.required,Validators.pattern("^[A-Z]{5,10}$")]],
      category_name:['',Validators.required],
      brief_details:['',Validators.required],
      
    })
  }
  get f(){return this.addsubcategoryform.controls;}
  onSubmit()
  {
    this.submitted= true;
    //display form value on success
    if(this.addsubcategoryform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.addsubcategoryform.value));
      
    }
  }
}
