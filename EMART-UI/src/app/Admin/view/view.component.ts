import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Subcategory } from 'src/app/Models/subcategory';
import { AdminService } from 'src/app/Services/admin.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  itemform:FormGroup;
  item:Subcategory;
  submitted=false;
  list:Subcategory[];

  constructor(private builder:FormBuilder,private service:AdminService) { 
    this.service.GetAllSubcategories().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    }, err=>{
      console.log(err);
    }
    )
  }

  ngOnInit() {
  }
  get f() { return this.itemform.controls; }

  onSubmit() {
      this.submitted = true;
  }
  onReset() {
      this.submitted = false;
      this.itemform.reset();
  }
  Delete(subcategoryid:any)
 {
    
   this.service.DeleteSubCategory(subcategoryid).subscribe(res=>{
     console.log('record deleted');

 },err=>{
    console.log(err);
 }
  )
} 

}
