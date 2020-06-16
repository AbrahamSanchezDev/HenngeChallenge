import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileObjectModule } from '../file-object/file-object.module';
import { DateModule } from '../date/date.module';
import { Data } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class EmailModule {
  public date: DateModule;
  constructor(
    public origen: string,
    public destination: string[],
    public subject: string,
    date: Date,
    public content: string,
    public files?: FileObjectModule[]
  ) {
    this.date = new DateModule(date);
  }
}
