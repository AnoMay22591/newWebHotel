import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginExtranetTransportComponent } from './login-extranet-transport.component';

describe('LoginExtranetTransportComponent', () => {
  let component: LoginExtranetTransportComponent;
  let fixture: ComponentFixture<LoginExtranetTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginExtranetTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginExtranetTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
