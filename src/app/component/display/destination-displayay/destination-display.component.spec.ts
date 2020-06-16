import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDisplayayComponent } from './destination-display.component';

describe('DestinationDisplayComponent', () => {
  let component: DestinationDisplayayComponent;
  let fixture: ComponentFixture<DestinationDisplayayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationDisplayayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationDisplayayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
