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
  name:string;
 pwd:string;
 errormessage:string;
 

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
  
      if(this.name=="buyer"&& this.pwd=="buyer")
      {
             
              
              sessionStorage.setItem('un',this.name)
                this.route.navigateByUrl('buyerlandingpage'); 
              
            
           
      }
    
     else if(this.name=="seller"&& this.pwd=="seller")
     {
            
            sessionStorage.setItem('un',this.name)
              this.route.navigateByUrl('sellerlandingpage'); 
     }
     else if(this.name=="admin" && this.pwd=="admin")
     {
       sessionStorage.setItem('un',this.name)
       this.route.navigateByUrl('adminloadingpage');
     }
          
          else
          {
            this.errormessage="Invalid Credentials....";
          }
     }
}
        
       
   