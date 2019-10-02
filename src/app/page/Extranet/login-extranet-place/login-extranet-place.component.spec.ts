import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginExtranetPlaceComponent } from './login-extranet-place.component';

describe('LoginExtranetPlaceComponent', () => {
  let component: LoginExtranetPlaceComponent;
  let fixture: ComponentFixture<LoginExtranetPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginExtranetPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginExtranetPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
