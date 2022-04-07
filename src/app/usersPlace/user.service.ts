import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user/user.model';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
    observe: 'response' as 'response',
  };

  constructor(private http:HttpClient) { }



  postAccount() {
    let _;
  return this.http.post('https://motoinventory.herokuapp.com/users', _, this.httpOptions);
}

createUser(createUser: any) {
  return this.http.post('https://motoinventory.herokuapp.com/users', createUser);
}

login(obj: any) {
  return this.http.post('https://motoinventory.herokuapp.com/users', obj, {responseType: 'text'});
}

deleteUsers(id: any) {
  return this.http.delete(`https://motoinventory.herokuapp.com/users/${id}`,{responseType: 'text'});
}

getUsers(): Observable<any> {
  return this.http.get("https://motoinventory.herokuapp.com/users");

}
updateUsers(user: User): Observable<any>{
  
  return this.http.patch(`https://motoinventory.herokuapp.com/users/${user.id}`, user);
}


getUser(id: number): Observable<any> {
  return this.http.get("https://motoinventory.herokuapp.com/users/"+id);
}
}