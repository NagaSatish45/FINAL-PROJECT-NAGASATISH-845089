import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/Services/item.service';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewreports',
  templateUrl: './viewreports.component.html',
  styleUrls: ['./viewreports.component.css']
})
export class ViewreportsComponent implements OnInit {
list:Items;
  constructor(private service:ItemService,private route:Router) { 
    if(localStorage.getItem("sid"))
  {

  }else{

    this.route.navigateByUrl('/home/login');

  }
  }

  ngOnInit() {
    this.ViewItems();

  }
  ViewItems()
{ 
  let sid=Number(localStorage.getItem("sid"));
  this.service.ViewItems(sid).subscribe(res=>
    {
      this.list=res;
      console.log(this.list);
    },
    err=>{
      console.log(err);
    });
}


}
