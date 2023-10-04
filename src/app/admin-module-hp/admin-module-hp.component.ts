import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-module-hp',
  templateUrl: './admin-module-hp.component.html',
  styleUrls: ['./admin-module-hp.component.css']
})
export class AdminModuleHpComponent {
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
  
  public onDashBordClick(){
    this.router.navigate(['./Dashboard']);
  }
  
  public onManageClick(){
    this.router.navigate(['./Manage_customer']);
  }
}
