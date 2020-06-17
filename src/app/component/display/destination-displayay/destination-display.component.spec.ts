import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDisplayayComponent } from './destination-display.component';
import { testingEmail } from 'src/app/model/email/email.module';

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
    component.email = testingEmail;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test that it retuns the destination text
  it('should retun the destination of the email', () => {
    expect(component.getDestination()).toContain('abc');
  });
  //Test if the email has more than one destination
  it('should return false since the email only has one destination', () => {
    expect(component.hasMoreThanOneDestination()).toBeFalse();
  });
  //Test if getTotalDestionations returns 0 since there is only 1 destination in the email
  it('should retun +0 since there is just 1 destination ', () => {
    expect(component.getTotalDestionations()).toBe('+0');
  });
});
