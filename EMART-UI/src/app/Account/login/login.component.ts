import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;
  
 name:string;
 pwd:string;
 
  submitted=true;
  errormessage:string;
  constructor(private formbuilder:FormBuilder,private route:Router) {
   
   }

  ngOnInit() {
  
  }
  public validate()
  {
    if(this.name=="buyer"&& this.pwd=="buyer")
    {
           
            
            sessionStorage.setItem('un',this.name)
              this.route.navigateByUrl('buyerslandingpage'); 
            
          
         
    }
  
   else if(this.name=="seller"&& this.pwd=="seller")
   {
          
          sessionStorage.setItem('un',this.name)
            this.route.navigateByUrl('sellerlandingpage'); 
   }
   else if(this.name=="admin"&& this.pwd=="admin")
   {
          
          sessionStorage.setItem('un',this.name)
            this.route.navigateByUrl('adminloadingpage'); 
   }
        
        else
        {
          this.errormessage="invalid credentials";
        }
   }
  
      
     
}
  


