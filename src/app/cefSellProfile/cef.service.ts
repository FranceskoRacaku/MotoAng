import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sell } from './cefSell/cefSell.model';

@Injectable({
  providedIn: 'root'
})
export class SellService {
  this: any;

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
    observe: 'response' as 'response',
  };
  createSell(createSell: any) {
    return this.http.post('https://motoinventory.herokuapp.com/sells', createSell, {responseType: 'text'});
  }

  deleteSells(id: any) {
    return this.http.delete(`https://motoinventory.herokuapp.com/sells/${id}`,{responseType: 'text'});
  }

  getSells(): Observable<any> {
    return this.http.get("https://motoinventory.herokuapp.com/sells");

  }

  getSellsByUser(id: any): Observable<any> {
    return this.http.get(`https://motoinventory.herokuapp.com/sells/user/${id}`);

  }
  updateSells(sell: Sell): Observable<any>{
    
    return this.http.patch(`https://motoinventory.herokuapp.com/sells/${sell.id}`, sell);
  }


  getPurchase(id: number): Observable<any> {
    return this.http.get("https://motoinventory.herokuapp.com/purchases/"+id);

  }
}