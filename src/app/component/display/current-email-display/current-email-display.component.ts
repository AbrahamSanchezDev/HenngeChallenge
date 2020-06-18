import { Component, OnInit } from '@angular/core';
import { EmailsService } from 'src/app/service/emails/emails.service';
import { EmailModule } from 'src/app/model/email/email.module';

@Component({
  selector: 'app-current-email-display',
  templateUrl: './current-email-display.component.html',
  styleUrls: ['./current-email-display.component.css'],
})
export class CurrentEmailDisplayComponent implements OnInit {
  obj1: string = 'obj1';
  obj2: string = 'obj2';
  obj3: string = 'obj2';
  obj4: string = 'obj3';

  cssClass: string = 'current-email-parent';
  childsDisplay: string;

  constructor(private emailsService: EmailsService) {}

  ngOnInit(): void {}
  getCurrentEmails(): EmailModule[] {
    return this.emailsService.displayedEmails;
  }

  //Returns the display size
  getChildClass(): string {
    switch (this.emailsService.displayedEmails.length) {
      case 2:
        return this.obj2;
      case 3:
        return this.obj3;
      case 4:
        return this.obj4;
    }
    return this.obj1;
  }
}
