import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutViewComponent } from './about-view.component';

describe('AboutViewComponent', () => {
  let component: AboutViewComponent;
  let fixture: ComponentFixture<AboutViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AboutViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
