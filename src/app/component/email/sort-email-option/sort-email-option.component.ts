import { Component, OnInit, Input } from '@angular/core';
import { SortingData } from 'src/app/model/sorting/sorting-data';

@Component({
  selector: 'app-sort-email-option',
  templateUrl: './sort-email-option.component.html',
  styleUrls: ['./sort-email-option.component.css'],
})
export class SortEmailOptionComponent implements OnInit {
  @Input() option: SortingData;
  arrow: string = 'assets/sgv/icon_arrow01.svg';
  hidden: string = 'hided';
  inverse: string = 'inverse';

  constructor() {}
  ngOnInit(): void {
    if (this.option == null) {
      console.log("Please pass the 'option' variable to the component");
    }
  }
  //Returns the sorting direction
  getSortDirection(): string {
    if (this.option == null) {
      return '';
    }
    if (!this.option.active) {
      return this.hidden;
    }
    //Check if its
    if (!this.option.increment) {
      return this.inverse;
    }
    return '';
  }
  //Returns the option text
  getText(): string {
    if (this.option == null) {
      return '';
    }
    return this.option.text;
  }
  //Calls the option callback
  onClick(): void {
    event.stopPropagation();
    if (this.option == null) {
      return;
    }
    if (this.option.callback != null) {
      this.option.callback();
    }
  }
}
