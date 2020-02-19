import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerslandingpageComponent } from './Buyer/buyerslandingpage/buyerslandingpage.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { PurchasehistoryComponent } from './Buyer/purchasehistory/purchasehistory.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { ViewprofileComponent } from './Buyer/viewprofile/viewprofile.component';
import { SellerlandingpageComponent } from './Seller/sellerlandingpage/sellerlandingpage.component';
import { AdditemsComponent } from './Seller/additems/additems.component';
import { ViewitemsComponent } from './Seller/viewitems/viewitems.component';
import { ViewreportsComponent } from './Seller/viewreports/viewreports.component';
import { ViewsellerprofileComponent } from './Seller/viewsellerprofile/viewsellerprofile.component';
import { AdminloadingpageComponent } from './Admin/adminloadingpage/adminloadingpage.component';
import { DailyreportComponent } from './Admin/dailyreport/dailyreport.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubcategoryComponent } from './Admin/add-subcategory/add-subcategory.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterbuyerComponent } from './Account/registerbuyer/registerbuyer.component';
import { RegistersellerComponent } from './Account/registerseller/registerseller.component';
import { BuyproductComponent } from './Buyer/buyproduct/buyproduct.component';
import { HomeComponent } from './Account/home/home.component';
import { EditprofileComponent } from './Seller/editprofile/editprofile.component';


const routes: Routes = [
  {path:'buyerslandingpage',component:BuyerslandingpageComponent,children:[
    {path:'buyproduct',component:BuyproductComponent},
  {path:'purchasehistory',component:PurchasehistoryComponent},
  {path:'search',component:SearchComponent},
  {path:'viewcart',component:ViewcartComponent},
  {path:'viewprofile',component:ViewprofileComponent}

  ]},
  {path:'sellerlandingpage',component:SellerlandingpageComponent,children:[
    {path:'additems',component:AdditemsComponent},
    {path:'viewitems',component:ViewitemsComponent},
    {path:'viewreports',component:ViewreportsComponent},
    {path:'viewsellerprofile',component:ViewsellerprofileComponent},
    {path:'editprofile',component:EditprofileComponent}
  ]},
  {path:'adminloadingpage',component:AdminloadingpageComponent,children:[
    {path:'dailyreport',component:DailyreportComponent},
    {path:'add-category',component:AddCategoryComponent},
    {path:'add-subcategory',component:AddSubcategoryComponent},
    {path:'block-unblock-buyer',component:BlockUnblockBuyerComponent},
    {path:'block-unblock-seller',component:BlockUnblockSellerComponent}
  ]},
 
  {path:'home',component:HomeComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'registerbuyer',component:RegisterbuyerComponent},
    {path:'registerseller',component:RegistersellerComponent},
   
  ]},
  {path:'',redirectTo:'home',pathMatch:'full'}
  
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
