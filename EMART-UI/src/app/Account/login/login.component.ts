import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted=false;
  loginform:FormGroup;
  buyer:Buyer;
  seller:Seller;
  constructor(private formbuilder:FormBuilder,private route:Router,private service:UserService) {
   
   }

  ngOnInit() {
    this.loginform=this.formbuilder.group({
      uname:['',Validators.required],
      password:['',Validators.required]
    });
  
  }
  get f(){return this.loginform.controls;}
  public validate()
  {
    this.submitted= true;
   
   
    if(this.buyer.bname==this.loginform.value["uname"] && this.buyer.password==this.loginform.value["password"])
    {
      this.service.BLogin(this.buyer.bname,this.buyer.password);
          this.route.navigateByUrl('buyerlandingpage');
    }
    else if(this.buyer.bname==this.loginform.value["uname"] && this.buyer.password==this.loginform.value["password"])
    {
      this.service.SLogin(this.seller.sname,this.seller.password);
          this.route.navigateByUrl('sellerlandingpage');
    }
   else
    this.route.navigateByUrl('home/login')
    
      
  }
}
  


