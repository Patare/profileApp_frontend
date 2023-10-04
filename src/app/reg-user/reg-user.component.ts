import { Component } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { ProfileAppService } from '../profile-app.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['./reg-user.component.css']
})
export class RegUserComponent {
  constructor(private router: Router ,private profileService:ProfileAppService) { }
  regUser=new FormGroup({
    Username:new FormControl(''),
    EmailId:new FormControl(''),
    Address:new FormControl(''),
    password:new FormControl(''),
    IsActive:new FormControl(true),
    ProfileId:new FormControl(''),

  })

  register(data:any){
this.profileService.register_User(data).subscribe((res:any)=>{
  var resData:any=res?.isEmailExist
  if(resData){
    this.errornotify()
  }
  else{
    this.onRegisterClick();
    this.onRegisterClick()
    console.log("this is user register data",res)
  }
  console.log("this is user register data",resData)
},
(error)=>{
  console.log(error)
}
)
  }

 
  errornotify() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }

  sucessnotify(){
    Swal.fire(
      'Register Successfully',
      'You clicked the button!',
      'success'
    )
  }

   onRegisterClick(){
    this.router.navigate(['./login']);
  }

}
