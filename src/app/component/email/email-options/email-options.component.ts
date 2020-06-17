import { Component, OnInit } from '@angular/core';
import { EmailsService } from 'src/app/service/emails/emails.service';

@Component({
  selector: 'app-email-options',
  templateUrl: './email-options.component.html',
  styleUrls: ['./email-options.component.css'],
})
export class EmailOptionsComponent implements OnInit {
  constructor(private emailsService: EmailsService) {}

  ngOnInit(): void {}
  //Load all emails
  loadAll(): void {
    this.emailsService.getAllEmails();
  }
  //Clear all emails
  clearAll(): void {
    this.emailsService.clearCurrentEmails();
  }
}
