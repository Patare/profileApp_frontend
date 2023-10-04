import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModuleHpComponent } from './admin-module-hp.component';

describe('AdminModuleHpComponent', () => {
  let component: AdminModuleHpComponent;
  let fixture: ComponentFixture<AdminModuleHpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminModuleHpComponent]
    });
    fixture = TestBed.createComponent(AdminModuleHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
