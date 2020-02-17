import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Router} from "@angular/router"


@Component({
  selector: 'app-registerseller',
  templateUrl: './registerseller.component.html',
  styleUrls: ['./registerseller.component.css']
})
export class RegistersellerComponent implements OnInit {
  sellerregisterform:FormGroup;
  submitted=false;
  sid:string;
  sname:string;
  password:string;
companyname:string;
GSTIN:number;
brief_about_company:string;
postal_address:string;
smail:string;
smobile:string;
  constructor(private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit() {
    this.sellerregisterform=this.formbuilder.group({
      sid:['',[Validators.required,Validators.pattern("^[E][0-9]{4}$")]],
      sname:['',[Validators.required,Validators.pattern("^[A-Z]{5,10}$")]],
      companyname:['',Validators.required],
      brief_about_company:['',Validators.required],
      postal_address:['',Validators.required],
      GSTIN:['',Validators.required],
      smobile:['',[Validators.required, Validators.pattern("^[6-9][0-9]{9}$")]],
      smail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^[A-Z]{7}[@,#,$,%,&,*]$")]],
    })
  }
  get f(){return this.sellerregisterform.controls;}
  onSubmit()
  {
    this.submitted= true;
    //display form value on success
    if(this.sellerregisterform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.sellerregisterform.value));
      
    }
  }
}
