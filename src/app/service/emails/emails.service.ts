import { Injectable } from '@angular/core';
import { EmailModule } from 'src/app/model/email/email.module';
import { HttpClient } from '@angular/common/http';
import { SortingOption } from 'src/app/model/sorting/sorting-option';

@Injectable({
  providedIn: 'root',
})
export class EmailsService {
  emails: EmailModule[] = [];
  allEmails: EmailModule[] = [];
  emailsPath: string = 'assets/json/emailsData.json';
  options: SortingOption;
  increment: boolean;
  optionIndex: number;

  constructor(private http: HttpClient) {
    this.options = new SortingOption();
    this.options.data.push({
      text: 'From',
      callback: () => this.sortByFrom(),
      active: false,
      increment: false,
    });
    this.options.data.push({
      text: 'To',
      callback: () => this.sortByTo(),
      active: false,
      increment: false,
    });
    this.options.data.push({
      text: 'Subject',
      callback: () => this.sortBySubject(),
      active: false,
      increment: false,
    });
    this.options.data.push({
      text: 'Date',
      callback: () => this.sortByDate(),
      active: true,
      increment: true,
    });

    this.getAllDataFromJson();
  }
  //#region Sorting
  //Set the current emails by senderEmail
  sortByFrom(): void {
    this.deactivateOtherOptions(0);
    if (this.increment) {
      this.emails.sort((a, b) => a.senderEmail.localeCompare(b.senderEmail));
    } else {
      this.emails.sort((a, b) => b.senderEmail.localeCompare(a.senderEmail));
    }
  }
  //Set the current emails by destination
  sortByTo(): void {
    this.deactivateOtherOptions(1);
    if (this.increment) {
      this.emails.sort((a, b) =>
        a.destination[0].localeCompare(b.destination[0])
      );
    } else {
      this.emails.sort((a, b) =>
        b.destination[0].localeCompare(a.destination[0])
      );
    }
  }
  //Set the current emails by subject
  sortBySubject(): void {
    this.deactivateOtherOptions(2);
    if (this.increment) {
      this.emails.sort((a, b) => a.subject.localeCompare(b.subject));
    } else {
      this.emails.sort((a, b) => b.subject.localeCompare(a.subject));
    }
  }
  //Set the current emails by date
  sortByDate(): void {
    this.deactivateOtherOptions(3);
    if (this.increment) {
      this.emails.sort((a, b) => a.date.localeCompare(b.date));
    } else {
      this.emails.sort((a, b) => b.date.localeCompare(a.date));
    }
  }
  //Deactivates the options
  deactivateOtherOptions(index: number) {
    //If it gets the same index as before then just toggle the increment
    if (this.optionIndex == index) {
      this.toggleIncrement();
      return;
    }
    //Deactivates all others options
    this.optionIndex = index;
    for (let i = 0; i < this.options.data.length; i++) {
      this.options.data[i].active = i == index;
    }
  }
  //Toggle the increment
  toggleIncrement() {
    this.increment = !this.increment;
    for (let i = 0; i < this.options.data.length; i++) {
      this.options.data[i].increment = this.increment;
    }
  }
  //#endregion

  //Get the  Data from Json files
  getAllEmails(): void {
    this.emails = this.allEmails;
  }
  //Clear the current emails
  clearCurrentEmails(): void {
    this.emails = [];
  }

  //Get the  Data from Json files
  getAllDataFromJson(): EmailModule[] {
    //Check it the files were already loaded if so return them
    if (this.allEmails != null && this.allEmails.length > 0) {
      return this.allEmails;
    }
    // Get the file
    this.http.get<EmailModule[]>(this.emailsPath).subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        for (let i = 0; i < data.length; i++) {
          data[i].theDate = new Date(data[i].date);
        }
        this.allEmails.push(data[i]);
      }
    });
    return this.allEmails;
  }
  //Set the current mails to be the ones that are in the range
  searchInRange(start: Date, end: Date) {
    this.emails = this.allEmails.filter((e) => {
      return e.theDate > start && e.theDate < end;
    });
  }
}
