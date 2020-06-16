import { Component, OnInit, Input } from '@angular/core';
import { EmailModule } from 'src/app/model/email/email.module';

@Component({
  selector: 'app-email-display',
  templateUrl: './email-display.component.html',
  styleUrls: ['./email-display.component.css'],
})
export class EmailDisplayComponent implements OnInit {
  @Input() email: EmailModule;

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
    this.date = new Date(this.email.date);
    this.today = new Date();
  }

  getSender(): string {
    return this.email.senderEmail;
  }
  getDestination(): string {
    if (this.email.destination.length == 1) {
      return this.email.destination[0];
    }
    return `${this.email.destination[0]}...`;
  }
  hasMoreThanOneDestination(): boolean {
    return this.email.destination.length > 1;
  }
  getTotalDestionations(): string {
    return `+${this.email.destination.length - 1}`;
  }
  getSubject(): string {
    return this.email.subject;
  }
  getDate(): string {
    if (
      this.date.getDay() == this.today.getDay() &&
      this.date.getMonth() == this.today.getMonth()
    ) {
      let curMin = this.date.getMinutes().toString();
      if (curMin.length == 1) {
        curMin = `0${curMin}`;
      }
      return `${this.date.getHours()}:${curMin}`;
    }
    if (this.date.getFullYear() == this.today.getFullYear()) {
      return `${this.months[this.date.getMonth()]} ${this.date.getDay()}`;
    }
    return `${this.date.getFullYear()}/${
      this.date.getMonth() + 1
    }/${this.date.getDate()}`;
  }
  hasFiles(): boolean {
    return this.email.files != null && this.email.files.length > 0;
  }
}
