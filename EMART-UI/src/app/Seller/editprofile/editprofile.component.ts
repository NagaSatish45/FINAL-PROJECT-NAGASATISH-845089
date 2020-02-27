import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Router} from "@angular/router"
import { Seller } from 'src/app/Models/seller';
import { SellerService } from 'src/app/Services/seller.service';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  sellerregisterform:FormGroup;
  submitted=false;
  seller:Seller;
 
  constructor(private formbuilder:FormBuilder,private route:Router,private services:SellerService) { }

  ngOnInit() {
    this.sellerregisterform=this.formbuilder.group({
      sid:['',[Validators.required,Validators.pattern("^[0-9]+$")]],
      sname:['',[Validators.required,Validators.pattern("^[a-z]+$")]],
      companyname:['',Validators.required],
      brief_about_company:['',Validators.required],
      postal_address:['',Validators.required],
      GSTIN:['',Validators.required],
      smobile:['',[Validators.required, Validators.pattern("^[0-9]{10}$")]],
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
      this.seller.sid=Number(this.sellerregisterform.value["sid"]);
      this.seller.sname=this.sellerregisterform.value["sname"];
      this.seller.smail=this.sellerregisterform.value["smail"];
      this.seller.smobile=this.sellerregisterform.value["smobile"];
      this.seller.password=this.sellerregisterform.value["password"];
      this.seller.companyname=this.sellerregisterform.value["companyname"];
      this.seller.briefaboutcompany=this.sellerregisterform.value["brief_about_company"];
      this.seller.postaladdress=this.sellerregisterform.value["postal_address"];
      this.seller.GSTIN=Number(this.sellerregisterform.value["GSTIN"]);
      console.log(this.seller)
      this.services.editprofile(this.seller).subscribe(res=>
        {
          console.log('Edited succesfully');
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

