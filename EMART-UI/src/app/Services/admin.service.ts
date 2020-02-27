import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Category } from '../Models/category';
import { Observable } from 'rxjs';
import { Subcategory } from '../Models/subcategory';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'application/json',
})}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string="http://localhost:54824/Admin/"
  constructor(private http:HttpClient) { }
  public AddCategory(category:Category):Observable<any>
  {
    return this.http.post<Category>(this.url+'AddCategory',JSON.stringify(category),Requestheaders);
  }
  public AddSubCategory(subcategory:Subcategory):Observable<any>
  {
    return this.http.post<Subcategory>(this.url+'AddSubCategory',JSON.stringify(subcategory),Requestheaders);
  }
  public getcategory(categoryid:number):Observable<Category>
  {
    return this.http.get<Category>(this.url+'getcategory'+categoryid,Requestheaders);
  }
  public getsubcategory(subcategoryid:number):Observable<Subcategory>
  {
    return this.http.get<Subcategory>(this.url+'getsubcategory'+subcategoryid,Requestheaders);
  }
}
