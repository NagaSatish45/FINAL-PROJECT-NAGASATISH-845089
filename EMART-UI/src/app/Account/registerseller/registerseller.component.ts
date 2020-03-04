import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Router} from "@angular/router"
import { Buyer } from 'src/app/Models/buyer';
import { UserService } from 'src/app/Services/user.service';
import { Seller } from 'src/app/Models/seller';


@Component({
  selector: 'app-registerseller',
  templateUrl: './registerseller.component.html',
  styleUrls: ['./registerseller.component.css']
})
export class RegistersellerComponent implements OnInit {
  sellerregisterform:FormGroup;
  submitted=false;
  seller:Seller;
  list:Seller[];
 
  constructor(private formbuilder:FormBuilder,private route:Router,private service:UserService) { 
    
  }

  ngOnInit() {
    this.sellerregisterform=this.formbuilder.group({
     
      sname:['',[Validators.required,Validators.pattern("^[a-z]+$")]],
      companyname:['',Validators.required],
      brief_about_company:['',Validators.required],
      postal_address:['',Validators.required],
      GSTIN:['',Validators.required],
      smobile:['',[Validators.required]],
      smail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^[A-Z]{7}[@,#,$,%,&,*]$")]],
    })
  }
  get f(){return this.sellerregisterform.controls;}
  onSubmit()
  {
    this.submitted= true;
    if(this.sellerregisterform.valid)
    {
      this.seller=new Seller();
        this.seller.sid=Math.round(Math.random()*1000);
        this.seller.sname=this.sellerregisterform.value["sname"];
        this.seller.smail=this.sellerregisterform.value["smail"];
        this.seller.smobile=this.sellerregisterform.value["smobile"];
        this.seller.password=this.sellerregisterform.value["password"];
        this.seller.companyname=this.sellerregisterform.value["companyname"];
        this.seller.briefAboutCompany=this.sellerregisterform.value["brief_about_company"];
        this.seller.postalAddress=this.sellerregisterform.value["postal_address"];
        this.seller.gstin=Number(this.sellerregisterform.value["GSTIN"]);
        console.log(this.seller)
        this.service.SRegister(this.seller).subscribe(res=>
          {
            console.log('registered success fully');
          },err=>{console.log(err)}
    
          )

    //display form value on success
    

      alert("Success");
      this.route.navigateByUrl('home/login');
      
        }
        else
        this.route.navigateByUrl('registerseller');

  }
}
