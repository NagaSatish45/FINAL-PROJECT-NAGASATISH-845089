import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Router} from "@angular/router"
import { UserService } from 'src/app/Services/user.service';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Buyer } from 'src/app/Models/buyer';

@Component({
  selector: 'app-buyereditprofile',
  templateUrl: './buyereditprofile.component.html',
  styleUrls: ['./buyereditprofile.component.css']
})
export class BuyereditprofileComponent implements OnInit {
  buyerregisterform:FormGroup;
  submitted=false;
  bid:string;
  bname:string;
  createddatetime:Date;
  buyer:Buyer;
  list:Buyer[];
  bmobile:number;
  bmail:string;
  password:string;
  count:number;
  constructor(private formbuilder:FormBuilder,private route:Router,private service:BuyerService) {
    if(localStorage.getItem("bid"))
    {
      let bid=Number(localStorage.getItem("bid"));
      this.service.Getcount(bid).subscribe(res=>{
        this.count=res;
        console.log(this.count)
      })
  
    }else{
  
      this.route.navigateByUrl('/home/login');
  
    }
  }

  ngOnInit()
   {
    this.buyerregisterform=this.formbuilder.group({
      bid:['',[Validators.required,Validators.pattern("^[0-9]+$")]],
      bname:['',[Validators.required,Validators.pattern("^[a-z]+$")]],
     
      bmobile:['',[Validators.required,
              Validators.pattern("^[0-9]{10}$")]],
      bmail:['',[Validators.required,Validators.email]],
     
    });
    this.viewprofile();
  }
  viewprofile()
  {
    let bid=Number(localStorage.getItem("bid"))
      this.service.getprofile(bid).subscribe(res=>{this.buyer=res;
      console.log(this.buyer)
      this.buyerregisterform.setValue({
        bid:this.buyer.bid,
        bname:this.buyer.bname,
        bmail:this.buyer.bmail,
        bmobile:this.buyer.bmobile,



      });
    });


  }
  get f(){return this.buyerregisterform.controls;}
  onSubmit()
  {
    this.submitted= true;
    //display form value on success
    {
     this.buyer.bid=Number(this.buyerregisterform.value["bid"]);
      this.buyer.bname=this.buyerregisterform.value["bname"];
      this.buyer.bmail=this.buyerregisterform.value["bmail"];
      this.buyer.bmobile=this.buyerregisterform.value["bmobile"];
      console.log(this.buyer)
      this.service.editbuyerprofile(this.buyer).subscribe(res=>
        {
          console.log('Edited succesfully');
        },err=>{console.log(err)}
  
        )
      
    }

  }

}