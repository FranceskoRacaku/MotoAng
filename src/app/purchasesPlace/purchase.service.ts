import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchase } from './purchase/purchase.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  this: any;

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
    observe: 'response' as 'response',
  };

  createPurchase(createPurchase: any) {
    return this.http.post('https://motoinventory.herokuapp.com/purchases', createPurchase, {responseType: 'text'});
  }

  deletePurchases(id: any) {
    return this.http.delete(`https://motoinventory.herokuapp.com/purchases/${id}`,{responseType: 'text'});
  }

  getPurchases(): Observable<any> {
    return this.http.get("https://motoinventory.herokuapp.com/purchases");

  }

  getPurchasesByUser(id: any): Observable<any> {
    return this.http.get(`https://motoinventory.herokuapp.com/purchases/user/${id}`);

  }
  updatePurchases(purchase: Purchase): Observable<any>{
    
    return this.http.patch(`https://motoinventory.herokuapp.com/purchases/${purchase.id}`, purchase);
  }


  getPurchase(id: number): Observable<any> {
    return this.http.get("https://motoinventory.herokuapp.com/purchases/"+id);

  }
}