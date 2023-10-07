import { Component, NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CsutmorManageComponent } from './csutmor-manage/csutmor-manage.component';
import { AdminModuleHpComponent } from './admin-module-hp/admin-module-hp.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ImgProfileFormComponent } from './img-profile-form/img-profile-form.component';
import { ImgUpdateFormComponent } from './img-update-form/img-update-form.component';



const routes: Routes = [
  /* {
    component:NoPageComponent,
    path:'Not_found'
  }, 
  { 
    path: '**', 
    redirectTo: '/not-found' 
  }, */
  {
    component: AdminLoginComponent,
    path: 'login'
  },
  {
    component: RegUserComponent,
    path: ''
  }, 
  {
    component:HomePageComponent,
    path:'Home'

  },
  {
    component: AdminModuleHpComponent,
    path: 'Adminhome',
    children: [

      {
        component: AdminDashboardComponent,
        path: 'Dashboard'
      },
      {
        component: CsutmorManageComponent,
        path: 'Manage_customer'
      },
    ]
  },
 
  {
    component: ForgetPassComponent,
    path: 'forget_pass'
  },
  {
    component: ProfileFormComponent,
    path: 'Profile_form'
  },
  {
    component: UpdateProfileComponent,
    path: 'update_Profile'
  },
  {
    component: ImgProfileFormComponent,
    path: 'imgprof_form'
  },
  {
    component: ImgUpdateFormComponent,
    path: 'imgupdate_form'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
