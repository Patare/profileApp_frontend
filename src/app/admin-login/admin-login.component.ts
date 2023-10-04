import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileAppService } from '../profile-app.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent {

  
  constructor(private router: Router, private profileService: ProfileAppService) { }
  
  loginForm = new FormGroup({
    EmailId: new FormControl(''),
    password: new FormControl('')
  });
  
  loginUser(data: any) {
    this.profileService.loginAdmin(data)
      .pipe(
        catchError((error) => {
          // Handle the error here, e.g., display an error message
          this.errorNotify('Login Failed', 'Invalid email or password', 'error');
          console.error('Login error:', error);
          return throwError(error); // Re-throw the error to propagate it to the subscriber
        })
      )
      .subscribe((res) => {
        this.successNotify();
        this.onloginClick();  
        console.log('login admin', res);
      });
  
    console.warn(this.loginForm.value);
  }
  
  successNotify() {
    Swal.fire(
      'Login Successfully',
      'You clicked the button!',
      'success'
    );
  }
  
  errorNotify(title: string, message: string, type: 'error' | 'warning' | 'info' | 'success' = 'error') {
    Swal.fire(
      title,
      message,
      type
    );
  }
  

  // const Toast = Swal.mixin({
  //   toast: true,
  //   position: 'top-end',
  //   showConfirmButton: false,
  //   timer: 3000,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.addEventListener('mouseenter', Swal.stopTimer)
  //     toast.addEventListener('mouseleave', Swal.resumeTimer)
  //   }
  // })
  
  // Toast.fire({
  //   icon: 'success',
  //   title: 'Signed in successfully'
  // })

 
  
  public onloginClick(){
    this.router.navigate(['./Home']);
  }
  public onRegisterClick(){
    this.router.navigate(['./register']);
  }
  public onForgetClick(){
    this.router.navigate(['./forget_pass']);
  }
}

