import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeAnimationResComponent } from './coffee-animation-res.component';

describe('CoffeeAnimationResComponent', () => {
  let component: CoffeeAnimationResComponent;
  let fixture: ComponentFixture<CoffeeAnimationResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeAnimationResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeAnimationResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
