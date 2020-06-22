import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDisplayComponent } from './date-display.component';

describe('DateDisplayComponent', () => {
  let component: DateDisplayComponent;
  let fixture: ComponentFixture<DateDisplayComponent>;

  let todayText: string;
  let sameYearText: string = '2020-01-03T05:10:18.038Z';
  let otherYearText: string = '2019-05-10T05:10:18.038Z';
  let today: Date;
  const setToSameYear = () => {
    component.dateText = sameYearText;
    component.createDate();
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DateDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDisplayComponent);
    component = fixture.componentInstance;
    todayText = new Date().toJSON();
    today = new Date();
    component.dateText = todayText;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Test if returns the correct format for the date
  it('should return the correct format', () => {
    expect(component.getDate()).toContain(today.getHours().toString());
    component.dateText = sameYearText;
    component.createDate();
    expect(component.getDate()).toContain('Jan');
    component.dateText = otherYearText;
    component.createDate();
    expect(component.getDate()).toContain('2019');
  });
  //Test that if you give it a number less that 10 it will formatted to have 0 before it
  it('should format the given number to have 2 digits', () => {
    expect(component.twoDigitsFormat(3)).toBe('03');
  });

  //Test that if you give it a month less that 10 it will formatted to have 0 before it
  it('should format the given number to have 2 digits', () => {
    setToSameYear();
    expect(component.month()).toBe('01');
  });
  //Test that monthAsText should returns "Jan" given that the date is 01
  it('should return Jan using the same year as date', () => {
    setToSameYear();
    expect(component.monthAsText()).toBe('Jan');
  });
});
