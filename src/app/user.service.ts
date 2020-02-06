import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

url = 'http://usersnodejsapp.herokuapp.com'; 
   constructor(private http: HttpClient) { }  
  
  getAllUser(): Observable<any> {  
    console.log("hello world");
    return this.http.get<User[]>(this.url + '/users');
  }
    

}
