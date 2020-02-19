import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  additemform:FormGroup;
  submitted=false;
  iid:number;
category_id:number;
subcategory_id:number;
price:number;
item_name:number;
description:string;
stock_number:number;
remarks:string;
  constructor(private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit() {
    this.additemform=this.formbuilder.group({
      iid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      category_id:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      subcategory_id:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      price:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      stock_number:['',[Validators.required,Validators.pattern("^[0-9]$")]],

      item_name:['',[Validators.required,Validators.pattern("^[A-Z]{5,10}$")]],
      
      description:['',Validators.required],
      remarks:['',Validators.required],
     
    })
  }
  get f(){return this.additemform.controls;}
  onSubmit()
  {
    this.submitted= true;
    //display form value on success
    if(this.additemform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.additemform.value));
      
    }
  }
}
