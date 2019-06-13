import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineResComponent } from './machine-res.component';

describe('MachineResComponent', () => {
  let component: MachineResComponent;
  let fixture: ComponentFixture<MachineResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
