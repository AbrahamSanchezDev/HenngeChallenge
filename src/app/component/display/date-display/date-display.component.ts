import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-display',
  templateUrl: './date-display.component.html',
  styleUrls: ['./date-display.component.css'],
})
export class DateDisplayComponent implements OnInit {
  @Input() dateText: string;
  date: Date;
  today: Date;
  months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  constructor() {}

  ngOnInit(): void {
    if (this.dateText == null) {
      console.error("Please pass variable 'dateText' in DateDisplayComponent");
    }
    this.createDate();
  }
  //Create the date based in the given text
  createDate(): void {
    this.date = new Date(this.dateText);
    this.today = new Date();
  }
  //Returns the correcto format for the dae
  getDate(): string {
    if (this.date == null) return '';
    //Same day just returns the time
    if (this.sameDay()) {
      return `${this.hour()}:${this.minutes()}`;
    }
    //Same month retuns the month as text and the
    if (this.sameYear()) {
      return `${this.monthAsText()} ${this.day()}`;
    }
    //When it is not from the same year it retuns the year/month(number)/day
    return `${this.date.getFullYear()}/${this.month()}/${this.day()}`;
  }
  //#region Check on date vs today
  //Checks it the date is from the same day
  sameDay(): boolean {
    return (
      this.date.getDay() == this.today.getDay() &&
      this.date.getMonth() == this.today.getMonth()
    );
  }
  //Checks it the date is from the same month
  sameYear(): boolean {
    return this.date.getFullYear() == this.today.getFullYear();
  }
  //#endregion
  //#region formating
  //Makes sure that any number(x) less than 10 is formated to 0x
  twoDigitsFormat(number: number): string {
    if (number >= 10) {
      return number.toString();
    }
    return `0${number}`;
  }
  //#endregion
  //#region Formated date
  //Retuns the date's month
  month(): string {
    return this.twoDigitsFormat(this.date.getMonth() + 1);
  }
  //Retuns the date's month as text
  monthAsText(): string {
    return this.months[this.date.getMonth()];
  }
  //Retuns the date's day
  day(): string {
    return this.twoDigitsFormat(this.date.getDate());
  }
  hour(): string {
    return this.date.getHours().toString();
  }
  //Retuns the date's minutes
  minutes(): string {
    return this.twoDigitsFormat(this.date.getMinutes());
  }
  //#endregion
}
