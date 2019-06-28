import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupAnimationComponent } from './cup-animation.component';

describe('CupAnimationComponent', () => {
  let component: CupAnimationComponent;
  let fixture: ComponentFixture<CupAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
