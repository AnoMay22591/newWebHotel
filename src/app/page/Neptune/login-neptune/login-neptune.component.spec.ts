import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNeptuneComponent } from './login-neptune.component';

describe('LoginNeptuneComponent', () => {
  let component: LoginNeptuneComponent;
  let fixture: ComponentFixture<LoginNeptuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNeptuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNeptuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
