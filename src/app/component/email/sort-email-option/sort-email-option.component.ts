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

  constructor() {}

  ngOnInit(): void {}

  //Retuns the sorting direction
  getSortDirection() {
    if (!this.option.active) {
      return 'hiden';
    }
    //Check if its
    if (!this.option.increment) {
      return 'inverse';
    }
    return '';
  }
  //Retuns the option text
  getText(): string {
    return this.option.text;
  }
  //Calls the option callback
  onClick(): void {
    this.option.callback();
    event.stopPropagation();
  }
}
