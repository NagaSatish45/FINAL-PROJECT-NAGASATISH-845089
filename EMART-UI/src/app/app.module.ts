import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerslandingpageComponent } from './Buyer/buyerslandingpage/buyerslandingpage.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { PurchasehistoryComponent } from './Buyer/purchasehistory/purchasehistory.component';
import { BuyproductComponent } from './Buyer/buyproduct/buyproduct.component';
import { ViewprofileComponent } from './Buyer/viewprofile/viewprofile.component';
import { ViewsellerprofileComponent } from './Seller/viewsellerprofile/viewsellerprofile.component';
import { SellerlandingpageComponent } from './Seller/sellerlandingpage/sellerlandingpage.component';
import { AdditemsComponent } from './Seller/additems/additems.component';
import { ViewitemsComponent } from './Seller/viewitems/viewitems.component';
import { ViewreportsComponent } from './Seller/viewreports/viewreports.component';
import { AdminloadingpageComponent } from './Admin/adminloadingpage/adminloadingpage.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubcategoryComponent } from './Admin/add-subcategory/add-subcategory.component';
import { DailyreportComponent } from './Admin/dailyreport/dailyreport.component';
import { RegisterbuyerComponent } from './Account/registerbuyer/registerbuyer.component';
import { RegistersellerComponent } from './Account/registerseller/registerseller.component';
import { LoginComponent } from './Account/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './Account/home/home.component';
import { BuyereditprofileComponent } from './Buyer/buyereditprofile/buyereditprofile.component';
import { EditprofileComponent } from './Seller/editprofile/editprofile.component';
import { ViewComponent } from './Admin/view/view.component';
import { ViewCategoryComponent } from './Admin/view-category/view-category.component';
import { PurchasepageComponent } from './Buyer/purchasepage/purchasepage.component';
import { ContactUsComponent } from './Account/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerslandingpageComponent,
    SearchComponent,
    ViewcartComponent,
    PurchasehistoryComponent,
    BuyproductComponent,
    ViewprofileComponent,
    ViewsellerprofileComponent,
    SellerlandingpageComponent,
    AdditemsComponent,
    ViewitemsComponent,
    ViewreportsComponent,
    AdminloadingpageComponent,
    BlockUnblockSellerComponent,
    BlockUnblockBuyerComponent,
    AddCategoryComponent,
    AddSubcategoryComponent,
    DailyreportComponent,
    LoginComponent,
    RegisterbuyerComponent,
    RegistersellerComponent,
    HomeComponent,
    BuyereditprofileComponent,
    EditprofileComponent,
    ViewComponent,
    ViewCategoryComponent,
    PurchasepageComponent,
    ContactUsComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
