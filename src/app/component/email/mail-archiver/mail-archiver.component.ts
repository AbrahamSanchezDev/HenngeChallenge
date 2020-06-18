import { Component, OnInit } from '@angular/core';
import { EmailModule } from 'src/app/model/email/email.module';
import { EmailsService } from 'src/app/service/emails/emails.service';

@Component({
  selector: 'app-mail-archiver',
  templateUrl: './mail-archiver.component.html',
  styleUrls: ['./mail-archiver.component.css'],
})
export class MailArchiverComponent implements OnInit {
  constructor(private emailsService: EmailsService) {}
  ngOnInit(): void {}
  //returns the emains in the service
  getEmails(): EmailModule[] {
    return this.emailsService.emails;
  }
  //Returns true if there are email
  hasMails(): boolean {
    return this.emailsService.emails.length > 0;
  }
}
