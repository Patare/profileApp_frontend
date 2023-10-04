import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  profileForm = new FormGroup({
    pname:new FormControl(''),
    partyname:new FormControl(''),
    email:new FormControl(''),
    phoneno:new FormControl(''),
    whatsappno:new FormControl(''),
    officeloction:new FormControl(''),
    youtube:new FormControl(''),
    insta:new FormControl(''),
    facebook:new FormControl(''),
    twitterId:new FormControl('') ,
    info:new FormControl(''),
  })

  Profile() {
    console.log(this.profileForm.value);    
  }

  constructor(private router: Router) { }
  
  public onCancleClick(){
    this.router.navigate(['./home']);
  }
  public onNextClick(){
    this.router.navigate(['./imgprof_form']);
  }
}