import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCalendarComponent } from './search-calendar.component';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
describe('SearchCalendarComponent', () => {
  let component: SearchCalendarComponent;
  let fixture: ComponentFixture<SearchCalendarComponent>;

  let today: Date;
  const setMonths = (t, f, s) => {
    today.setMonth(t, 1);
    component.searchRange[0].setMonth(f, 1);
    component.searchRange[1].setMonth(s, 1);
    component.sortDates();
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCalendarComponent],
      imports: [MatMenuModule, HttpClientModule, MatSnackBarModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCalendarComponent);
    component = fixture.componentInstance;
    today = new Date();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Test getSearchRange that returns the text that has today in the text
  it('should return the that today is in the search range', () => {
    expect(component.getSearchRange()).toContain(today.getDate().toString());
  });
  //Test isSelected that returns the correct class name for the given date
  it('should returns the class name for the given date', () => {
    setMonths(5, 5, 5);
    today.setMonth(5, 1);
    expect(component.isSelected(today)).toContain('start');
    //Move the first position to a month before
    setMonths(5, 4, 5);
    expect(component.isSelected(today)).toContain('end');
    //Move second position to the month 6
    setMonths(5, 4, 6);
    expect(component.isSelected(today)).toContain('range');
    //Check if it is out of range
    setMonths(7, 4, 6);
    expect(component.isSelected(today)).toBe('');
  });
  //Test if adds a new date
  it('should add a new date ', () => {
    const currentDates = component.searchRange.length;
    component.addDate(today);
    expect(component.searchRange.length).toBe(currentDates + 1);
  });
  //Test if removes a date
  it('should remove the first in the list', () => {
    const currentDates = component.searchRange.length;
    component.removeDateAt(0);
    expect(component.searchRange.length).toBe(currentDates - 1);
  });
  //Test sorts the dates by oldest first
  it('should sort the dates by order', () => {
    setMonths(5, 4, 7);
    expect(component.searchRange[0].month).toBe(4);
  });
  //Test that startMoving returns when the first position is the same as today
  it('should return true when today it is the same as the first position', () => {
    setMonths(4, 4, 5);
    expect(component.startMoving(today)).toBeTrue();
    expect(component.searchRange[0].move).toBeTrue();
  });
  //Test that startMoving returns when the first position is the same as today
  it('should return 0 or 1 if the dateObj is moving', () => {
    component.searchRange[0].move = true;
    expect(component.moving()).toBe(0);
    component.searchRange[0].move = false;
    component.searchRange[1].move = true;
    expect(component.moving()).toBe(1);
    component.searchRange[1].move = false;
    expect(component.moving()).toBe(-1);
  });
  //Test if today is in dates range or not
  it('should return if today is between start and end dates', () => {
    setMonths(5, 4, 7);
    expect(component.checkIfInRange(today)).toBeTrue();
    setMonths(3, 4, 7);
    expect(component.checkIfInRange(today)).toBeFalse();
  });
  //Test if today is the same as the starting or ending dates
  it('should return if today is one of the searching Ranges', () => {
    setMonths(4, 4, 7);
    expect(component.checkIfSelected(today)).toBeTrue();
    setMonths(3, 4, 7);
    expect(component.checkIfSelected(today)).toBeFalse();
  });
});
