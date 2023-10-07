import { Component } from '@angular/core';
// import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ProfileAppService } from '../profile-app.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  username:any={};
  LoggedInUser:any;
  ProfileID:any;

  ngOnInit(): void {  
    this.username=this.profileService.apiLoginResponse;
    this.LoggedInUser = localStorage.getItem('LoggedInUser');
    this.LoggedInUser = JSON.parse(this.LoggedInUser);
    this.ProfileID = localStorage.getItem('ProfileID');
    this.ProfileID = JSON.parse(this.ProfileID);
    console.log("inHome: ",this.profileService.apiLoginResponse);
  }

  sucessnotify()
  {
  //   Swal.fire({
  //   title: 'Error!',
  //   text: 'Do you want to continue',
  //   icon: 'error',
  //   confirmButtonText: 'Cool',
  // })
  }

  constructor(private router: Router, private profileService: ProfileAppService , private http:HttpClient) { }
  
  public onProfClick(){
    this.router.navigate(['./Profile_form']);
  }
   public onUpdateClick(){
     this.router.navigate(['./home']);
   }
  public onForgetClick(){
    this.router.navigate(['./forget_pass']);
  }
  
  public onloginClick(){
    this.router.navigate(['./login']);
  }
}
