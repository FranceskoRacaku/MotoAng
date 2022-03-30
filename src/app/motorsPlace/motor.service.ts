import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Motor } from './motor/motor.model';

@Injectable({
  providedIn: 'root'
})
export class MotorService {

  constructor(private http:HttpClient) { }


  createMotor(createMotor: any) {
    return this.http.post('https://motoinventory.herokuapp.com/motors', createMotor, {responseType: 'text'});
  }

  deleteMotors(id: any) {
    return this.http.delete(`https://motoinventory.herokuapp.com/motors/${id}`,{responseType: 'text'});
  }

  getMotors(): Observable<any> {
    return this.http.get("https://motoinventory.herokuapp.com/motors");
  }
  
  updateMotors(motor: Motor): Observable<any>{
    
    return this.http.put(`https://motoinventory.herokuapp.com/motors/${motor.id}`, motor);
  }


  getMotor(id: number): Observable<any> {
    return this.http.get("https://motoinventory.herokuapp.com/motors/"+id);

  }
}