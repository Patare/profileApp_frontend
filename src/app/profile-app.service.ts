import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileAppService {

  constructor(private http:HttpClient) { }
   

 registerUser_Url= 'http://localhost:3000/auth/register'
 register_User(data:any){
  return this.http.post(this.registerUser_Url,data);
 }

 apiLoginResponse?: any; // This will store the API response
 adminLogin_Url='http://localhost:3000/auth/login';
 loginAdmin(data:any){
  return this.http.post(this.adminLogin_Url,data);
 }

//  getProfile_Url='http://localhost:3000/auth/getUser/651bcee0df39d026e6c2c566';
//  getUserProfile():Observable<any>{
//   return this.http.get<any>(this.getProfile_Url)
//  }



 

 profileId:string='651fdb583965a80d1c8957d0';
 // gallary:string="PhotoGallery"
 gallary:string="NewsGallery"
 url="http://localhost:3000/profile"
 post_profile(data:any){
  this.ProfileID = JSON.parse(this.ProfileID);
   return this.http.post(`${this.url}/${this.ProfileID}/${this.gallary}`,data)
   // console.log("${this.url}/${this.profileId}")
 }



 deleteUrl = "http://localhost:3000/profile"
 delete_img(profileId:any,gallaryname:any,imageId:any) {
   return this.http.delete(`${this.deleteUrl}/${profileId}/${gallaryname}/${imageId}`);
 }

 ProfileID:any = localStorage.getItem('ProfileID');

 update_url="http://localhost:3000/profile/updateprofileById"
 updateUserData(data:any){
  console.log(this.profileId);
  //const parsedObject = JSON.parse(this.ProfileID);

 // console.log(parsedObject);
  console.log(localStorage.getItem('ProfileID'));
  this.ProfileID = this.ProfileID.replace(/"/g, '');
  // this.ProfileID = JSON.parse(this.ProfileID);
   return this.http.put(`${this.update_url}/${this.ProfileID}`,data)
 }
 
 getProfileUrl="http://localhost:3000/profile/getOneProfileById";
 getProfile() {
    this.ProfileID = JSON.parse(this.ProfileID);
   return this.http.get(`${this.getProfileUrl}/${this.ProfileID}`)
 }
//  private baseUrl = 'http://localhost:3000/profile'
//  getUserById(id: string) {$
//   const url = `${this.baseUrl}/getOneUserById/${id}`;
//   return this.http.get(url);
// }
}


// private apiLoginRes: any;
// update_url="http://localhost:3000/profile/updateprofileById"
// updateUserData(data:any){
//  this.apiLoginRes=data.ProfileId
//   return this.http.put(`${this.update_url}/${this.apiLoginRes.ProfileId}`,data)
// }