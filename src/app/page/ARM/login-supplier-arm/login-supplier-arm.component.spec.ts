import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSupplierArmComponent } from './login-supplier-arm.component';

describe('LoginSupplierArmComponent', () => {
  let component: LoginSupplierArmComponent;
  let fixture: ComponentFixture<LoginSupplierArmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSupplierArmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSupplierArmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
