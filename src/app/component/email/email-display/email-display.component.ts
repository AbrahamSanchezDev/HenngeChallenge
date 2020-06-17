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
    if (this.email == null) {
      console.error(
        "Please pass the 'email' variable to the component EmailDisplayComponent"
      );
      return;
    }
    this.date = new Date(this.email.date);
    this.today = new Date();
  }
  //Returns the  email's sender
  getSender(): string {
    return this.email.senderEmail;
  }
  //Gets the email's subject
  getSubject(): string {
    return this.email.subject;
  }
}
