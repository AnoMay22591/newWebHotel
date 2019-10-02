import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHotelArmComponent } from './login-hotel-arm.component';

describe('LoginHotelArmComponent', () => {
  let component: LoginHotelArmComponent;
  let fixture: ComponentFixture<LoginHotelArmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginHotelArmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHotelArmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
