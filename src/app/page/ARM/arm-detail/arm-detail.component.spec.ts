import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmDetailComponent } from './arm-detail.component';

describe('ArmDetailComponent', () => {
  let component: ArmDetailComponent;
  let fixture: ComponentFixture<ArmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
