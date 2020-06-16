import { Injectable } from '@angular/core';
import { EmailModule } from 'src/app/model/email/email.module';
import { FileObjectModule } from 'src/app/model/file-object/file-object.module';
import { DownloadToolService } from '../download-tool/download-tool.service';

@Injectable({
  providedIn: 'root',
})
export class EmailsService {
  emails: EmailModule[] = [];
  constructor(private downloadTool: DownloadToolService) {
    this.createTestingEmails();
  }

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
      [new FileObjectModule('FileName', 'TheLink.com')]
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
      [new FileObjectModule('FileName', 'TheLink.com')]
    );
    this.addEmail('iii', ['nnn'], 'I love you', lastYear, [
      new FileObjectModule('FileName', 'TheLink.com'),
    ]);
    this.addEmail(
      'Pablo-Diego-José-Francisco',
      ['Pablo-Diego-José-Francisco'],
      '[info:888] ABC EQUIPMENT COMPANY',
      lastYear
    );
  }
  addEmail(
    from: string,
    to: string[],
    subject: string,
    date: Date,
    files?: FileObjectModule[]
  ): void {
    this.emails.push(
      new EmailModule(
        from,
        to,
        subject,
        date,
        `This is the content text for the mail with the subject of : ${subject}`,
        files
      )
    );
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
      currentMails[i].origen += ending;
      for (let y = 0; y < currentMails[i].destination.length; y++) {
        currentMails[i].destination[y] += ending;
      }
    }
    this.downloadTool.DownloadTextToFileAsJson(currentMails, 'emailsData');
  }
}
