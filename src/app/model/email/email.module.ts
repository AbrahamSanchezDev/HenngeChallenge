import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileObjectModule } from '../file-object/file-object.module';
import { DateModule } from '../date/date.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class EmailModule {
  senderEmail: string;
  destination: string[];
  subject: string;
  date: string;
  content: string;
  files?: FileObjectModule[];
}
