import { Component, OnInit } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { DateObj } from './date-obj';
import { EmailsService } from 'src/app/service/emails/emails.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-calendar',
  templateUrl: './search-calendar.component.html',
  styleUrls: ['./search-calendar.component.css'],
})
export class SearchCalendarComponent implements OnInit {
  searchRange: DateObj[] = [];

  startRange: string = 'start-range';
  endRange: string = 'end-range';
  selectionRange: string = 'selected-range';

  constructor(
    private emailsService: EmailsService,
    private snackBar: MatSnackBar
  ) {
    let today = new Date();
    this.addDate(today);
    this.addDate(today);
  }

  ngOnInit(): void {}

  //Returns the current ranges
  getSearchRange(): string {
    return `${this.searchRange[0].text} - ${this.searchRange[1].text}`;
  }
  //Start the search
  startSearch(): void {
    this.emailsService.searchInRange(
      this.searchRange[0].date,
      this.searchRange[1].date
    );
    if (this.emailsService.emails.length == 0) {
      this.snackBar.open(
        '0 Results were given from the current date range',
        null,
        {
          duration: 2000,
        }
      );
    }
  }
  //Check if the date is currently selected
  isSelected = (event: Date): string => {
    if (this.checkIfSelected(event)) {
      //The first position was in the same as the event
      if (this.selectedDate(event) == 0) {
        return this.startRange;
      }
      //The Second position was in the same as the event
      return this.endRange;
    }
    //Check if the given date is in range
    return this.checkIfInRange(event) ? this.selectionRange : '';
  };
  //Called by the calendar when selected a date
  selectDate(event: Date, calendar: MatCalendar<Date>) {
    //Check if there is a date been moved
    let movingIndex = this.moving();
    if (movingIndex >= 0) {
      //Move the last selected date to the new date
      this.moveDateTo(movingIndex, event, calendar);
      return;
    }
    if (this.startMoving(event)) {
      calendar.updateTodaysDate();
      return;
    }
    //Check if both start and end are in the same position thus start moving one of them
    if (this.samePositions()) {
      //Move the first date to the new date
      this.moveDateTo(0, event, calendar);
      return true;
    }
  }
  //Move the search ranges
  moveDateTo(index: number, event: Date, calendar: MatCalendar<Date>) {
    //Move the one that was moving to the new position
    this.removeDateAt(index);
    this.addDate(event);
    this.sortDates();
    //Update ui
    calendar.updateTodaysDate();
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
  //Returns true if one of the selected days is moving
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
    return event > this.searchRange[0].date && event < this.searchRange[1].date;
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
  //Returns true if both start and end positions are in the same date
  samePositions(): boolean {
    return this.searchRange[0].text == this.searchRange[1].text;
  }
}
