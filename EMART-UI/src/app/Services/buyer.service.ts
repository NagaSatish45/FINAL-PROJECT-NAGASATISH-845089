import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { Transactions } from '../Models/transactions';
import { Buyer } from '../Models/buyer';
import { Category } from '../Models/category';
import { Subcategory } from '../Models/subcategory';
import { TransavtionHistory } from '../Models/transavtion-history';
import { Items } from '../Models/items';
import { Cart } from '../Models/cart';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
  
})}

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string="http://localhost:54824/Buyer/"


  constructor(private http:HttpClient) { }
  public Additem(Transaction:TransavtionHistory):Observable<any>
  {
    return this.http.post<any>(this.url+'Additem',JSON.stringify(Transaction),Requestheaders);
  }
  public editbuyerprofile(buyer:Buyer):Observable<any>
  {
    return this.http.put<Buyer>(this.url+'editbuyerprofile/',JSON.stringify(buyer),Requestheaders);
  }
  public getprofile(bid:number):Observable<Buyer>
  {
    return this.http.get<Buyer>(this.url+'getprofile/'+bid,Requestheaders);
  }
  public search(bname:string):Observable<any>
  {
    return this.http.get(this.url+'search/'+bname,Requestheaders);
  }
  public Transactionhistory(bid:number):Observable<TransavtionHistory>
  {
    return this.http.get<TransavtionHistory>(this.url+'purchasehistory/'+bid,Requestheaders);
  }
  public GetCategory():Observable<any>
  {
    return this.http.get<Category>(this.url+'GetCategory/');
  }
  public GetSubCategory(subcategoryid:number):Observable<any>
  {
    return this.http.get<any>(this.url+'GetSubCategory/'+subcategoryid,Requestheaders);
  }
  public Search(itemName:string):Observable<Items[]>
  {
    return this.http.get<Items[]>(this.url+'search/'+itemName,Requestheaders)
  }
  public Addtocart(cart:Cart):Observable<any>
  {
    return this.http.post<any>(this.url+'Addtocart/',JSON.stringify(cart),Requestheaders)
  }
  public deletfromCart(cartid:number):Observable<Cart>
  {
    return this.http.delete<Cart>(this.url+'Deletefromcart/'+cartid,Requestheaders)
  }
  public getcart(bid:number):Observable<any>
  {
    return this.http.get<any>(this.url+'GetCart/'+bid,Requestheaders)
  }
  public Getcount(bid:number):Observable<any>
  {
    return this.http.get<any>(this.url+'GetCount/'+bid,Requestheaders);
  }
  public CheckCartItem(iid:number,bid:number):Observable<any>{
    return this.http.get<any>(this.url+'CheckCartItem/'+iid+'/'+bid,Requestheaders);
  }
  
}
