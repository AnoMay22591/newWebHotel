import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginExtranetFerryComponent } from './login-extranet-ferry.component';

describe('LoginExtranetFerryComponent', () => {
  let component: LoginExtranetFerryComponent;
  let fixture: ComponentFixture<LoginExtranetFerryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginExtranetFerryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginExtranetFerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
