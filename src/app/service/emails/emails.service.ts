import { Injectable } from '@angular/core';
import { EmailModule } from 'src/app/model/email/email.module';
import { FileObjectModule } from 'src/app/model/file-object/file-object.module';
import { DownloadToolService } from '../download-tool/download-tool.service';
import { DateModule } from 'src/app/model/date/date.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailsService {
  emails: EmailModule[] = [];
  emailsPath: string = 'assets/json/emailsData.json';
  constructor(
    private downloadTool: DownloadToolService,
    private http: HttpClient
  ) {
    this.loadFromJson();
  }
  //Load emails from the json file
  loadFromJson(): void {
    this.http.get<EmailModule[]>(this.emailsPath).subscribe((data) => {
      this.emails = data;
    });
  }
  //Create data for testing
  createTestingEmails(): void {
    let todayData = new Date();
    let mail0 = todayData;
    mail0.setHours(0, 20);
    let mail1 = todayData;
    mail1.setHours(0, 10);
    let mail2 = todayData;
    mail2.setHours(0, 0);
    let jan01 = todayData;
    jan01.setMonth(0, 1);
    jan01.setDate(1);
    let lastYear = todayData;
    lastYear.setFullYear(2019, 11, 31);

    let files = [{ fileName: 'FileName', link: 'TheLink.com' }];
    this.addEmail(
      'aaa',
      ['zzz.zzz'],
      '[HR-888] Notice of official announcement',
      mail0
    );
    this.addEmail('bbb.bbb', ['yyy'], '[web:333]"Web Contact"', mail1);
    this.addEmail(
      'ccc',
      ['xxx', 'someOther'],
      'Happy New Year! Greetings for the New Yeear.',
      mail2,
      files
    );
    this.addEmail(
      'ddd.dddd',
      ['vvv.vvv', 'someOther'],
      '[HR-887(Reviced: Office Expansion Project Team)] Notice of officers',
      jan01
    );
    this.addEmail(
      'eee',
      ['sss', 'someOther', 'oneMore'],
      '[Github] Logout Page',
      jan01
    );
    this.addEmail(
      'fff.fff',
      ['qqq.qqq'],
      '[dev] Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5',
      jan01
    );
    this.addEmail(
      'ggg',
      ['ppp'],
      'Re:[Github] Brush-up on loading animation',
      jan01
    );
    this.addEmail(
      'hhh.hhh',
      ['ooo.ooo'],
      'Workplace Summery for for sample, Inc.: Jan2-Jan 9:',
      jan01,
      files
    );
    this.addEmail('iii', ['nnn'], 'I love you', lastYear, files);
    this.addEmail(
      'Pablo-Diego-José-Francisco',
      ['Pablo-Diego-José-Francisco'],
      '[info:888] ABC EQUIPMENT COMPANY',
      lastYear
    );
  }
  //Creates the emailmodule and sets the variables
  addEmail(
    from: string,
    to: string[],
    subject: string,
    date: Date,
    files?: FileObjectModule[]
  ): void {
    let email = new EmailModule();
    email.senderEmail = from;
    email.destination = to;
    email.subject = subject;
    email.date = new DateModule(date);
    email.files = files;
    this.emails.push(email);
  }
  //Returns the current emails
  getAllEmails(): EmailModule[] {
    return this.emails;
  }
  //Download current mails as json
  downloadAsJson(): void {
    let currentMails = this.emails;
    let ending = '@example.com';
    for (let i = 0; i < currentMails.length; i++) {
      if (i == currentMails.length - 2) {
        break;
      }
      currentMails[i].senderEmail += ending;
      for (let y = 0; y < currentMails[i].destination.length; y++) {
        currentMails[i].destination[y] += ending;
      }
    }
    this.downloadTool.DownloadTextToFileAsJson(currentMails, 'emailsData');
  }
}
