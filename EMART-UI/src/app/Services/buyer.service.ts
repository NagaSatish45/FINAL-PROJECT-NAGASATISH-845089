import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { Transactions } from '../Models/transactions';
import { Buyer } from '../Models/buyer';
import { Category } from '../Models/category';
import { Subcategory } from '../Models/subcategory';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'application/json',
})}

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string="http://localhost:54824/Buyer/"

  constructor(private http:HttpClient) { }
  public Additem(Transaction:Transactions):Observable<any>
  {
    return this.http.post<Transactions>(this.url+'Additem',JSON.stringify(Transaction),Requestheaders);
  }
  public editbuyerprofile(buyer:Buyer):Observable<any>
  {
    return this.http.put<Buyer>(this.url+'editbuyerprofile/',JSON.stringify(buyer));
  }
  public getprofile(bid:number):Observable<Buyer>
  {
    return this.http.get<Buyer>(this.url+'getprofile/'+bid,Requestheaders);
  }
  public search(bname:string):Observable<Buyer>
  {
    return this.http.get<Buyer>(this.url+'search/'+bname,Requestheaders);
  }
  public Transactionhistory(Transactionid:number):Observable<Transactions>
  {
    return this.http.get<Transactions>(this.url+'Transactionhistory/'+Transactionid,Requestheaders);
  }
  public GetCategory():Observable<any>
  {
    return this.http.get<Category>(this.url+'GetCategory/');
  }
  public GetSubCategory(subcategoryid:number):Observable<Subcategory>
  {
    return this.http.get<Subcategory>(this.url+'GetSubCategory/'+subcategoryid,Requestheaders);
  }
}
