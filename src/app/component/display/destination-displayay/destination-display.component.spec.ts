import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDisplayComponent } from './destination-display.component';
import { testingEmail } from 'src/app/model/email/email.module';

describe('DestinationDisplayComponent', () => {
  let component: DestinationDisplayComponent;
  let fixture: ComponentFixture<DestinationDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationDisplayComponent);
    component = fixture.componentInstance;
    component.email = testingEmail;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test that it returns the destination text
  it('should return the destination of the email', () => {
    expect(component.getDestination()).toContain('abc');
  });
  //Test if the email has more than one destination
  it('should return false since the email only has one destination', () => {
    expect(component.hasMoreThanOneDestination()).toBeFalse();
  });
  //Test if getTotalDestinations returns 0 since there is only 1 destination in the email
  it('should return +0 since there is just 1 destination ', () => {
    expect(component.getTotalDestinations()).toBe('+0');
  });
});
