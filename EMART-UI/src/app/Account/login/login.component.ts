import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import {Token} from 'src/app/Models/token';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted=false;
  loginform:FormGroup;
 errormessage:string;
 Token:Token;
 buyer:Buyer;
 seller:Seller;
 uname:string;
 password:string;
 
 

  constructor(private formbuilder:FormBuilder,private route:Router,private service:UserService){
   }

  ngOnInit() {
    this.loginform=this.formbuilder.group({
      uname:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required]
    });
  }
  Login(){
    
      this.buyer=new Buyer();
      this.seller=new Seller();
       let username=this.loginform.value['uname'];
      let password=this.loginform.value['password'];
      let role=this.loginform.value['role'];
      if(role=='buyer')
      {
        let token=new Token();
        this.service.BLogin(username,password).subscribe(res=>{token=res;console.log(token)
          
            console.log(username,password);
            console.log(res);
            if(token.message=='success')
            {
              localStorage.setItem('token',token.token)
              localStorage.setItem("bid",token.bid.toString());
              this.route.navigateByUrl("buyerslandingpage")
           
            }
            else{
              alert("invalid");
            }
            
            
        });
      }
      else if(role=='seller')
      {
        let token=new Token();
        this.service.SLogin(username,password).subscribe(res=>{token=res;
          console.log(token);
          
            console.log(username,password);
            console.log(res);
            if(token.message=='success')
            {
              localStorage.setItem('token',token.token)
              localStorage.setItem("sid",token.sid.toString());
              this.route.navigateByUrl("sellerlandingpage")
           
            }
            else{
              alert("invalid");
            }
            
            
        });

      }
      if(username=="admin" && password=="admin")
     {
           this.route.navigateByUrl("adminloadingpage");
      }


    }
     
}
  
