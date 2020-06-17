import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileObjectModule } from '../file-object/file-object.module';

export const testingEmail: EmailModule = {
  senderEmail: '123@example.com',
  destination: ['abc@example.com'],
  subject: 'test subject',
  date: '2020/6/17',
  content: 'test tontent',
  files: [{ fileName: 'test file', link: 'www.link.com' }],
};

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
