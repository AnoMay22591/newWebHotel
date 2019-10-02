import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSupplierNeptuneComponent } from './login-supplier-neptune.component';

describe('LoginSupplierNeptuneComponent', () => {
  let component: LoginSupplierNeptuneComponent;
  let fixture: ComponentFixture<LoginSupplierNeptuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSupplierNeptuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSupplierNeptuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
