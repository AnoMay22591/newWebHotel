import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginExtranetSupplierComponent } from './login-extranet-supplier.component';

describe('LoginExtranetSupplierComponent', () => {
  let component: LoginExtranetSupplierComponent;
  let fixture: ComponentFixture<LoginExtranetSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginExtranetSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginExtranetSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
