import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegUserComponent } from './reg-user/reg-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ImgProfileFormComponent } from './img-profile-form/img-profile-form.component';
@NgModule({
  declarations: [
    AppComponent,
    RegUserComponent,
    AdminLoginComponent,
    HomePageComponent,
    UpdateProfileComponent,
    ImgProfileFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
