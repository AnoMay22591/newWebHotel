import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginExtranetGolfComponent } from './login-extranet-golf.component';

describe('LoginExtranetGolfComponent', () => {
  let component: LoginExtranetGolfComponent;
  let fixture: ComponentFixture<LoginExtranetGolfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginExtranetGolfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginExtranetGolfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
