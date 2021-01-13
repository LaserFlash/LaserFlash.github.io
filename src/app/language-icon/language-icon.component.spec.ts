import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LanguageIconComponent } from './language-icon.component';

describe('LanguageIconComponent', () => {
  let component: LanguageIconComponent;
  let fixture: ComponentFixture<LanguageIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
