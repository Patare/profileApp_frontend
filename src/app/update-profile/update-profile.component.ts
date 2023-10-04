import { Component } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {

  updateform=new FormGroup({
    pname:new FormControl('Parchi somvanshi'),
    partyname:new FormControl('BJP'),
    email:new FormControl('parchi@gamil.com'),
    phoneno:new FormControl('9850363210'),
    whatsappno:new FormControl('9527258811'),
    officeloction:new FormControl('Ashoka Nagar, Kharadi, Pune, Maharashtra 411014'),
    youtube:new FormControl('https://youtube.com/@soothingdews911'),
    insta:new FormControl('https://www.instagram.com/accounts/login/'),
    facebook:new FormControl('https://m.facebook.com/login/?refsrc=deprecated'),
    twitterId:new FormControl('https://twitter.com/i/flow/login') ,
    info:new FormControl('PoliticiansInformation: Politicians propose, support and create laws or policies that govern the land and, by extension, its people. The word politician is sometimes replaced with the euphemism statesman. Basically, a "politician" can be anyone who seeks to achieve political power in any bureaucratic institution'),
   })


  updateProfile() {
    console.log(this.updateform.value);
  }

  
  constructor(private router: Router) { }
  
  public onCancleClick(){
    this.router.navigate(['./home']);
  }
  public onNextClick(){
    this.router.navigate(['./imgupdate_form']);
  }
}