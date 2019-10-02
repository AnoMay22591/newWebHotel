import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginExtranetHotelComponent } from './login-extranet-hotel.component';

describe('LoginExtranetHotelComponent', () => {
  let component: LoginExtranetHotelComponent;
  let fixture: ComponentFixture<LoginExtranetHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginExtranetHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginExtranetHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
