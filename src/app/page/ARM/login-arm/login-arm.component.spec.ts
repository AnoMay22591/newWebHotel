import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginArmComponent } from './login-arm.component';

describe('LoginArmComponent', () => {
  let component: LoginArmComponent;
  let fixture: ComponentFixture<LoginArmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginArmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginArmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
