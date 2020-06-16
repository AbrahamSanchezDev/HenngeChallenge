import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileObjectModule } from '../file-object/file-object.module';
import { DateModule } from '../date/date.module';
import { InjectionToken } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class EmailModule {
  senderEmail: string;
  destination: string[];
  subject: string;
  date: DateModule;
  content: string;
  files?: FileObjectModule[];
}
