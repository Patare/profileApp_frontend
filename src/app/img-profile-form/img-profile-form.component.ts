import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-img-profile-form',
  templateUrl: './img-profile-form.component.html',
  styleUrls: ['./img-profile-form.component.css']
})
export class ImgProfileFormComponent {

    profileForm = new FormGroup({
      photo: new FormControl(''),
      logo: new FormControl('')
    })
  
    Profile() {
      console.log(this.profileForm.value);
      console.log(this.url1);
      console.log(this.url2);
      console.log(this.multiples1);
      console.log(this.multiples2);
      
    }
  
    constructor(
      public _d: DomSanitizer, private cf: ChangeDetectorRef,private router: Router) { }
  
      public OnSubmitClick(){
        this.router.navigate(['./home']);
      }
      public OnCancelClick(){
        this.router.navigate(['./home']);
      }
      public OnPreviousClick(){
        this.router.navigate(['./Profile_form']);
      }
  
    /*---------------profilePhoto------------------*/
    
    imgsrc: any;
      
    profilePhoto(e: any) {
  
      var file = e.srcElement.files[0];
      this.imgsrc = window.URL.createObjectURL(file);
    }
  
  
    /*---------------Logo------------------*/
  
    imglogo: any;
  
    Logo(e: any) {
      var file = e.srcElement.files[0];
      this.imglogo = window.URL.createObjectURL(file);
    }
  
  
    /*---------------photo gallery------------------*/
    url1: any = [];
    multiples1: any[] = [];

    images1=[];
    public file1: any;
    photosGallery(event: any) {
      this.file1 = event.target.files && event.target.files.length;
      if (this.file1 > 0 && this.file1 < 25) {
        let i: number = 0;
        for (const singlefile of event.target.files) {
          var reader = new FileReader();
          reader.readAsDataURL(singlefile);
          this.url1.push(singlefile);
          this.cf.detectChanges();
          i++;
          console.log(this.url1);
          reader.onload = (event) => {
            const urls2 = (<FileReader>event.target).result as string;
            this.multiples1.push(urls2);
            this.cf.detectChanges();
          };
          console.log(singlefile);
        }
      }
    }

    
    onclickPhotoimg(img: any, i: number) {
    Swal.fire({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-success'
      },
      buttonsStyling: true,
      imageUrl: img,
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      showCancelButton: true,
      cancelButtonText: 'Cancel!',
      confirmButtonText: ' Delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(this.url1);
        this.url1.splice(i, 1);
        this.images1=this.url1;
        console.log(i);
        console.log(this.url1);
      }
    })
  }

  
  /*---------------News gallery------------------*/
  url2: any = [];
  multiples2: any[] = [];
  
  images2=[];
  public file2: any;
  newsGallery(event: any) {
    this.file2 = event.target.files && event.target.files.length;
    if (this.file2 > 0 && this.file2 < 25) {
      let i: number = 0;
      for (const singlefile of event.target.files) {
        var reader = new FileReader();
        reader.readAsDataURL(singlefile);
        this.url2.push(singlefile);
        this.cf.detectChanges();
        i++;
        console.log(this.url2);
        reader.onload = (event) => {
          const urls2 = (<FileReader>event.target).result as string;
          this.multiples2.push(urls2);
          this.cf.detectChanges();
        };
        console.log(singlefile);
      }
    }
  }

  onclickNewsimg(img: any, i: number) {
    Swal.fire({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-success'
      },
      buttonsStyling: true,
      imageUrl: img,
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      showCancelButton: true,
      cancelButtonText: 'Cancel!',
      confirmButtonText: ' Delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(this.url2);
        this.url2.splice(i, 1);
        this.images2=this.url2;
        console.log(i);
        console.log(this.url2);
      }
    })
  }

 
}
