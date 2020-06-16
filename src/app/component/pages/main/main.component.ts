import { Component, OnInit } from '@angular/core';
import { EmailsService } from 'src/app/service/emails/emails.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private emailsService: EmailsService) {}

  ngOnInit(): void {}

  downloadFile() {
    this.emailsService.downloadAsJson();
  }
}
