import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { BuyerService } from 'src/app/Services/buyer.service';
import { ItemService } from 'src/app/Services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchform:FormGroup;
list:Items[];
items:Items;
list1:Items[];
  constructor(private service:BuyerService,private itemservice:ItemService,private router:Router,
    private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.searchform=this.formbuilder.group({
      itemName:['']
    })
   this.ViewItems();
  }
ViewItems()
{ 
  this.itemservice.GetAll().subscribe(res=>
    {
      this.list1=res;
      console.log(this.list1);
    },
    err=>{
      console.log(err);
    });
}
search()
{
  this.items=new Items();
  this.items.itemName=this.searchform.value["itemName"];
  this.service.Search(this.items.itemName).subscribe(res=>{
    this.list=res;
    console.log(this.list);
 
  }
  ,err=>{
    console.log(err);
  })
}
buy(item2:Items)
{
  console.log(item2);
  localStorage.setItem('item1',JSON.stringify(item2));
  this.router.navigateByUrl('buyerslandingpage/buyproduct');

}
addtocart()
{

}

}
