import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class ProfileAppService {

  constructor(private http:HttpClient) { }


 register_Url= 'http://localhost:3000/auth/register'
 register_User(data:any){
  return this.http.post(this.register_Url,data);
 }

 adminLogin_Url='http://localhost:3000/auth/login';
 loginAdmin(data:any){
  return this.http.post(this.adminLogin_Url,data);
 }
}
