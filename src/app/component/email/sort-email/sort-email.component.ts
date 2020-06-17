import { Component, OnInit } from '@angular/core';
import { MenuData } from 'src/app/model/menu/MenuData';
import { EmailsService } from 'src/app/service/emails/emails.service';

@Component({
  selector: 'app-sort-email',
  templateUrl: './sort-email.component.html',
  styleUrls: ['./sort-email.component.css'],
})
export class SortEmailComponent implements OnInit {
  constructor(private emailService: EmailsService) {}

  ngOnInit(): void {}
  //Retuns the option at the given index
  getOption(index: number): MenuData {
    return this.emailService.options.data[index];
  }
}
