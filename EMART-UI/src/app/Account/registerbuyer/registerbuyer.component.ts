import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Router} from "@angular/router"
import { Buyer } from 'src/app/Models/buyer';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-registerbuyer',
  templateUrl: './registerbuyer.component.html',
  styleUrls: ['./registerbuyer.component.css']
})
export class RegisterbuyerComponent implements OnInit {

  buyerregisterform:FormGroup;
  submitted=false;
  buyer:Buyer;
  list:Buyer[];
  constructor(private formbuilder:FormBuilder,private route:Router,private service:UserService) { }

  ngOnInit()
   {
    this.buyerregisterform=this.formbuilder.group({
     
      bname:['',[Validators.required,Validators.pattern("^[a-z]{5}$")]],
      createddate:['',Validators.required],
      
      bmobile:['',[Validators.required,
              Validators.pattern("^[6-9][0-9]{9}$")]],
      bmail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^[A-Z]{7}[@#$%&*]$")]],
    })
  }
  get f(){return this.buyerregisterform.controls;}
  onSubmit()
  {
    this.submitted= true;
    if(this.buyerregisterform.valid)
    {
    //display form value on success
    this.buyer=new Buyer();
    this.buyer.bid=Math.round(Math.random()*1000);
    this.buyer.bname=this.buyerregisterform.value["bname"];
    this.buyer.password=this.buyerregisterform.value["password"];
    this.buyer.bmail=this.buyerregisterform.value["bmail"];
    this.buyer.bmobile=this.buyerregisterform.value["bmobile"];
    this.buyer.createddate=this.buyerregisterform.value["createddate"];
    this.service.BRegister(this.buyer).subscribe(res=>
      {
        console.log('registered successfully');
      },err=>{console.log(err)}

      )

   
      alert("Success")
      this.route.navigateByUrl('home/login');
    }
    

  }

}