import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHomePageComponent } from './menu-home-page.component';

describe('MenuHomePageComponent', () => {
  let component: MenuHomePageComponent;
  let fixture: ComponentFixture<MenuHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
