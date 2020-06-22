import { Component, OnInit, Input } from '@angular/core';
import { EmailModule } from 'src/app/model/email/email.module';
import { EmailsService } from 'src/app/service/emails/emails.service';

@Component({
  selector: 'app-email-content-display',
  templateUrl: './email-content-display.component.html',
  styleUrls: ['./email-content-display.component.css'],
})
export class EmailContentDisplayComponent implements OnInit {
  @Input() email: EmailModule;
  constructor(private emailService: EmailsService) {}

  ngOnInit(): void {}

  //Returns the email's sender
  getSender(): string {
    return this.email.senderEmail;
  }
  //Returns the current email's destinations
  getDestinations(): string {
    return this.email.destination.toString();
  }
  //Returns the current email's subject
  getSubject(): string {
    return this.email.subject;
  }
  //Returns the current email's content
  getContent() {
    return this.email.content;
  }
  //Checks if the current email has files in it
  hasFiles(): boolean {
    if (this.email.files == null) {
      return false;
    }
    return this.email.files.length > 0;
  }
  //Close all emails and the display for current displayed emails
  closeEmails(): void {
    this.emailService.clearDisplayEmails();
  }
  //Disable Display emails so you can open another one
  openAnotherEmail(): void {
    this.emailService.openAnotherEmail();
  }
}
