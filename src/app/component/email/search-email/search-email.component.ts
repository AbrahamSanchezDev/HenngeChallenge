import { Component, OnInit } from '@angular/core';
import { EmailsService } from 'src/app/service/emails/emails.service';
@Component({
  selector: 'app-search-email',
  templateUrl: './search-email.component.html',
  styleUrls: ['./search-email.component.css'],
})
export class SearchEmailComponent implements OnInit {
  constructor(private emailsService: EmailsService) {}

  ngOnInit(): void {}
  //Returns the current results
  getCurrentResults(): string {
    return `Results: ${this.emailsService.emails.length} mail(s)`;
  }
}
