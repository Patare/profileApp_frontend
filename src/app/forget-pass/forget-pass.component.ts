import { Component } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent {

  forgetPass=new FormGroup({
    email:new FormControl(''),
    pass:new FormControl(''),
    repass:new FormControl('')
  })

  forgetUser()
  {
    console.warn(this.forgetPass.value);
  }
  
  constructor(private router: Router) { }

  public onForgetpassClick(){
    this.router.navigate(['./login']);
  }

}
