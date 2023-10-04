import { Component } from '@angular/core';
// import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent 
{
  username="Prachi Somvanshi";

  hello()
  {
    console.log(this.hello);
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

  constructor(private router: Router) { }
  
  public onProfClick(){
    this.router.navigate(['./Profile_form']);
  }
  public onUpdateClick(){
    this.router.navigate(['./update_Profile']);
  }
  public onForgetClick(){
    this.router.navigate(['./forget_pass']);
  }
  
  public onloginClick(){
    this.router.navigate(['./login']);
  }
}
