import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DateModule {
  //Returns the date based on what
  getTheDate(): string {
    return this.date.getDay().toFixed();
  }
  constructor(public date: Date) {}
}
