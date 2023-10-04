import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLoginComponent } from './admin-login.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SweetAlert2Module.forRoot()],
      declarations: [AdminLoginComponent]
    });
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


