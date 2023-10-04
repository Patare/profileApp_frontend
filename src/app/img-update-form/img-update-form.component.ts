import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { DomSanitizer } from '@angular/platform-browser';
import { OnInit, ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-img-update-form',
  templateUrl: './img-update-form.component.html',
  styleUrls: ['./img-update-form.component.css']
})
export class ImgUpdateFormComponent {


  updateform = new FormGroup({
    photo: new FormControl('assets/image/templet1/customer/profile/profileImage.jpg'),
    logo: new FormControl('assets/image/templet1/customer/logo/2.jpg'),
  })


  updateProfile() {
    console.log(this.updateform.value);
    console.log(this.url1);
    console.log(this.url2);
  }

  constructor(
    public _d: DomSanitizer, private cf: ChangeDetectorRef, private router: Router) { }

  public OnUpdateClick() {
    this.router.navigate(['./home']);
  }
  public OnCancelClick() {
    this.router.navigate(['./home']);
  }
  public OnPreviousClick() {
    this.router.navigate(['./Profile_form']);
  }

  /*---------------profilePhoto------------------*/
  imgsrc = 'assets/image/templet1/customer/profile/profileImage.jpg';
  profilePhoto(e: any) {

    var file = e.srcElement.files[0];
    this.imgsrc = window.URL.createObjectURL(file);
  }

  /*---------------Logo------------------*/

  imglogo = "assets/image/templet1/customer/logo/2.jpg";

  Logo(e: any) {
    var file = e.srcElement.files[0];
    this.imglogo = window.URL.createObjectURL(file);
  }


  /*---------------photo gallery------------------*/
  url1: any = [];
  //multiples1: any[] = [];

  multiples1 = ["assets/image/templet1/customer/photo_gallery/img1.jpg", "assets/image/templet1/customer/photo_gallery/img2.jpg", "assets/image/templet1/customer/photo_gallery/img3.jpg", "assets/image/templet1/customer/photo_gallery/img4.jpg", "assets/image/templet1/customer/photo_gallery/img5.jpg", "assets/image/templet1/customer/photo_gallery/img6.jpg", "assets/image/templet1/customer/photo_gallery/img7.jpg", "assets/image/templet1/customer/photo_gallery/img8.jpg"]

  images1 = [];
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
        this.images1 = this.url1;
        console.log(i);
        console.log(this.url1);
      }
    })
  }

  /*---------------News gallery------------------*/
  url2: any = [];
  //multiples2: any[] = [];
  multiples2 = ["assets/image/templet1/customer/news_gallery/img1.jpg", "assets/image/templet1/customer/news_gallery/img2.jpg", "assets/image/templet1/customer/news_gallery/img3.jpg", "assets/image/templet1/customer/news_gallery/img4.jpg", "assets/image/templet1/customer/news_gallery/img5.jpg", "assets/image/templet1/customer/news_gallery/img6.jpg", "assets/image/templet1/customer/news_gallery/img7.jpg", "assets/image/templet1/customer/news_gallery/img8.jpg", "assets/image/templet1/customer/news_gallery/img9.jpg"]

  images2 = [];
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
        this.images2 = this.url2;
        console.log(i);
        console.log(this.url2);
      }
    })
  }

}
