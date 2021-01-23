import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutNavigationComponent } from './app-layout-navigation.component';

describe('AppLayoutNavigationComponent', () => {
  let component: AppLayoutNavigationComponent;
  let fixture: ComponentFixture<AppLayoutNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLayoutNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
