import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { Transactions } from '../Models/transactions';
import { Buyer } from '../Models/buyer';
import { Category } from '../Models/category';
import { Subcategory } from '../Models/subcategory';
import { TransavtionHistory } from '../Models/transavtion-history';
import { Items } from '../Models/items';
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
  public Transactionhistory(Transactionid:number):Observable<Transactions>
  {
    return this.http.get<Transactions>(this.url+'Transactionhistory/'+Transactionid,Requestheaders);
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

}
