import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgProfileFormComponent } from './img-profile-form.component';

describe('ImgProfileFormComponent', () => {
  let component: ImgProfileFormComponent;
  let fixture: ComponentFixture<ImgProfileFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgProfileFormComponent]
    });
    fixture = TestBed.createComponent(ImgProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
