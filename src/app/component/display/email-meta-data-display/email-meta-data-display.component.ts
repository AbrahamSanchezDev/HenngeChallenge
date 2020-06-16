import { Component, OnInit, Input } from '@angular/core';
import { EmailModule } from 'src/app/model/email/email.module';

@Component({
  selector: 'app-email-meta-data-display',
  templateUrl: './email-meta-data-display.component.html',
  styleUrls: ['./email-meta-data-display.component.css'],
})
export class EmailMetaDataDisplayComponent implements OnInit {
  @Input() email: EmailModule;
  constructor() {}

  ngOnInit(): void {}
  //returns the date of the file
  getEmailDate(): string {
    return this.email.date;
  }
  //checks if has files in the email
  hasFiles(): boolean {
    return this.email.files != null && this.email.files.length > 0;
  }
}
