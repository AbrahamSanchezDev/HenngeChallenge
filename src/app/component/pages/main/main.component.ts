import { Component, OnInit } from '@angular/core';
import { EmailsService } from 'src/app/service/emails/emails.service';
import { EmailModule } from 'src/app/model/email/email.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
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
