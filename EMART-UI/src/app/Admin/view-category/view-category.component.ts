import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { Category } from 'src/app/Models/category';
@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  itemform:FormGroup;
  item:Category;
  submitted=false;
  list:Category[];
  isShow:boolean=true;

  constructor(private builder:FormBuilder,private service:AdminService) { 
    this.service.GetAll().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    }, err=>{
      console.log(err);
    }
    )
  }

  ngOnInit() 
  {
    this.itemform=this.builder.group({
      categoryId:['',[Validators.required,Validators.pattern("^[0-9]+$")]],
      categoryName:['',Validators.required],
      briefDetails:['',Validators.required],
      
    })

  }
  get f() { return this.itemform.controls; }
  Edit(){
  //  this.item=new Category();
     this.item.categoryId=Number(this.itemform.value['categoryId'])
     this.item.categoryName=this.itemform.value['categoryName']
   this.item.briefDetails=this.itemform.value['briefDetails']
   // console.log(this.item);
    this.service.updatecategory(this.item).subscribe(res=>{
      this.item=res;
      console.log(this.item)
   
    console.log("updated successfully");
   } )


  }
  viewprofile(categoryid:number){
    this.service.getcategory(categoryid).subscribe(  
      res=>{this.item=res
        console.log(this.item)
        console.log(this.item.categoryName)
    this.itemform.setValue({  
      categoryId:Number(this.item.categoryId),
      categoryName:this.item.categoryName,
      briefDetails:this.item.briefDetails,
  
  })

 } );

}
  
  onSubmit() {
      this.submitted = true;
  }
  onReset() {
      this.submitted = false;
      this.itemform.reset();
  }
 
 Delete(categoryid:any)
 {
    
   this.service.DeleteCategory(categoryid).subscribe(res=>{
     console.log('record deleted');

 },err=>{
    console.log(err);
 }
  )
} 

}
