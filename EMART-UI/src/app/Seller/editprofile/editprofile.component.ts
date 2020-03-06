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
  list:Seller[];
 
  constructor(private formbuilder:FormBuilder,private route:Router,private services:SellerService) { }

  ngOnInit() {
    this.sellerregisterform=this.formbuilder.group({
      sid:['',[Validators.required,Validators.pattern("^[0-9]+$")]],
      sname:['',[Validators.required]],
      companyname:['',Validators.required],
      briefaboutcompany:['',Validators.required],
      postaladdress:['',Validators.required],
      GSTIN:['',Validators.required],
      smobile:['',[Validators.required, Validators.pattern("^[0-9]{10}$")]],
      smail:['',[Validators.required,Validators.email]],
     
   
    });
    this.viewprofile();

  }
  viewprofile()
  {
        let sid=Number(localStorage.getItem("sid"))
      this.services.getprofile(sid).subscribe(res=>{this.seller=res;
      console.log(this.seller)
      this.sellerregisterform.setValue({
        sid:this.seller.sid,
        sname:this.seller.sname,
        companyname:this.seller.companyname,
       briefaboutcompany:this.seller.briefAboutCompany,
       postaladdress:this.seller.postalAddress,
       smail:this.seller.smail,
       smobile:this.seller.smobile,
       GSTIN:this.seller.gstin,

      } )
    });
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
      this.seller.companyname=this.sellerregisterform.value["companyname"];
      this.seller.briefAboutCompany=this.sellerregisterform.value["briefaboutcompany"];
      this.seller.postalAddress=this.sellerregisterform.value["postaladdress"];
      this.seller.gstin=Number(this.sellerregisterform.value["GSTIN"]);
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

