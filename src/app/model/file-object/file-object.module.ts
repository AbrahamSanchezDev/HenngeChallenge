import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class FileObjectModule {
  constructor(public name: string, public link: string) {}
}
