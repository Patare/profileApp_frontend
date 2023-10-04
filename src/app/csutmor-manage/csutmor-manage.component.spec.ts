import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsutmorManageComponent } from './csutmor-manage.component';

describe('CsutmorManageComponent', () => {
  let component: CsutmorManageComponent;
  let fixture: ComponentFixture<CsutmorManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsutmorManageComponent]
    });
    fixture = TestBed.createComponent(CsutmorManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
