import { Component, OnInit } from '@angular/core';
import { EmailsService } from 'src/app/service/emails/emails.service';
import { EmailModule } from 'src/app/model/email/email.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  emails: EmailModule[];

  constructor(private emailsService: EmailsService) {}

  ngOnInit(): void {
    this.loadAllEmails();
  }

  //Load all emails from the service
  loadAllEmails(): void {
    this.emails = this.emailsService.getJsonData();
  }

  hasMails(): boolean {
    // return this.emails.length > 0;
    return false;
  }
}
