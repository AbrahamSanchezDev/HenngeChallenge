import { Component, OnInit } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { DateObj } from './date-obj';

@Component({
  selector: 'app-search-calendar',
  templateUrl: './search-calendar.component.html',
  styleUrls: ['./search-calendar.component.css'],
})
export class SearchCalendarComponent implements OnInit {
  searchRange: DateObj[] = [];

  constructor() {
    let today = new Date();
    this.addDate(today);
    this.addDate(today);
  }

  ngOnInit(): void {}

  //Retuns the current ranges
  getSearchRange(): string {
    return `${this.searchRange[0].text} - ${this.searchRange[1].text}`;
  }
  //Start the search
  startSearch(): void {
    console.log('Search ranges');
  }
  //Check if the date is currently selected
  isSelected = (event: any) => {
    if (this.checkIfSelected(event)) {
      if (this.selectedDate(event) == 0) {
        return 'start-range';
      }
      return 'end-range';
    }

    if (this.checkIfInRange(event)) {
      return 'selected-range';
    }
    return '';
  };
  //Called by the calendar when selected a date
  selectDate(event: Date, calendar: MatCalendar<Date>) {
    //Check if there is a date been moved
    let movingIndex = this.moving();
    if (movingIndex >= 0) {
      //Move the one that was moving to the new position
      this.removeDateAt(movingIndex);
      this.addDate(event);
      this.sortDates();
      //Update ui
      calendar.updateTodaysDate();
      return;
    }
    if (this.startMoving(event)) {
      calendar.updateTodaysDate();
    }
  }
  //Add date to the selected days
  addDate(date: Date) {
    let obj = new DateObj();
    obj.updateData(date);
    this.searchRange.push(obj);
  }
  //Remove date from the array
  removeDateAt(index: number) {
    this.searchRange.splice(index, 1);
  }
  //Sort dates by oldest first
  sortDates() {
    this.searchRange.sort((a, b) => a.date.getTime() - b.date.getTime());
  }
  //Check if the given date is in the start or end of the range and set them to be moving
  startMoving(event: Date): boolean {
    let index = this.selectedDate(event);
    //Not one of the selected index
    if (index < 0) {
      return false;
    }
    //Start Moving
    this.searchRange[index].move = true;
    return true;
  }
  //Retuns true if one of the selected days is moving
  moving(): number {
    for (let i = 0; i < this.searchRange.length; i++) {
      if (this.searchRange[i].move) {
        return i;
      }
    }
    return -1;
  }
  //Returns true if its between the starting date and the end date
  checkIfInRange(event: Date): boolean {
    return this.searchRange[0].date < event && this.searchRange[1].date > event;
  }
  //Check if the given date is currently selected as start or end range
  checkIfSelected(event: Date): boolean {
    let index = this.selectedDate(event);
    return index >= 0;
  }
  //Returns if the given date is already in the list
  selectedDate(event: Date): number {
    for (let i = 0; i < this.searchRange.length; i++) {
      if (
        this.searchRange[i].text == this.searchRange[i].getDateAsText(event)
      ) {
        return i;
      }
    }
    return -1;
  }
}
