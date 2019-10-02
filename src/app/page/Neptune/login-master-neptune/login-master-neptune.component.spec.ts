import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMasterNeptuneComponent } from './login-master-neptune.component';

describe('LoginMasterNeptuneComponent', () => {
  let component: LoginMasterNeptuneComponent;
  let fixture: ComponentFixture<LoginMasterNeptuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMasterNeptuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMasterNeptuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
