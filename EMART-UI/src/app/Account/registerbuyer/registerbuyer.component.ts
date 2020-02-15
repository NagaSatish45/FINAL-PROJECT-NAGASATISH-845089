import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-registerbuyer',
  templateUrl: './registerbuyer.component.html',
  styleUrls: ['./registerbuyer.component.css']
})
export class RegisterbuyerComponent implements OnInit {

  buyerregisterform:FormGroup;
  submitted=false;
  bid:string;
  bname:string;
  createddatetime:Date;
  
  bmobile:number;
  bmail:string;
  password:string;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit()
   {
    this.buyerregisterform=this.formbuilder.group({
      bid:['',[Validators.required,Validators.pattern("^[E][0-9]{4}$")]],
      bname:['',[Validators.required,Validators.pattern("^[A-Z]{5,10}$")]],
      createddatetime:['',Validators.required],
      
      bmobile:['',[Validators.required,
              Validators.pattern("^[6-9][0-9]{9}$")]],
      bmail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^[A-Z]{7}[@,#,$,%,&,*]$")]],
    })
  }
  get f(){return this.buyerregisterform.controls;}
  onSubmit()
  {
    this.submitted= true;
    //display form value on success
    if(this.buyerregisterform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.buyerregisterform.value));
      
    }

  }

}