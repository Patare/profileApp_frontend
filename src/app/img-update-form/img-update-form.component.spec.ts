import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgUpdateFormComponent } from './img-update-form.component';

describe('ImgUpdateFormComponent', () => {
  let component: ImgUpdateFormComponent;
  let fixture: ComponentFixture<ImgUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgUpdateFormComponent]
    });
    fixture = TestBed.createComponent(ImgUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
