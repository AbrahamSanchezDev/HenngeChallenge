import { Component, OnInit } from '@angular/core';
import { EmailsService } from 'src/app/service/emails/emails.service';
import { FakeEmailsService } from 'src/app/service/emails/fake-emails.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email-options',
  templateUrl: './email-options.component.html',
  styleUrls: ['./email-options.component.css'],
})
export class EmailOptionsComponent implements OnInit {
  constructor(
    private emailsService: EmailsService,
    private fakeEmails: FakeEmailsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  //Load all emails
  loadAll(): void {
    this.emailsService.getAllEmails();
  }
  //Clear all emails
  clearAll(): void {
    if (this.emailsService.emails.length == 0) {
      this.showMsg('There is already 0 email');
      return;
    }
    this.emailsService.clearCurrentEmails();
  }
  //Clear the displayed emails and goes back to the emails display
  showEmails(): void {
    if (!this.emailsService.showingEmail) {
      this.showMsg('Not displaying any email at the moment');
      return;
    }
    this.emailsService.clearCurrentEmails();
  }
  //Shows a little text in the buttom of the screen
  showMsg(text: string): void {
    this.snackBar.open(text, null, {
      duration: 2000,
    });
  }
  //Download the fake emails as json
  downloadFakeEmails(): void {
    this.fakeEmails.createTestingEmails();
    this.fakeEmails.downloadAsJson();
  }
}
