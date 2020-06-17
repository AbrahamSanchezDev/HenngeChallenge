import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sort-email-option',
  templateUrl: './sort-email-option.component.html',
  styleUrls: ['./sort-email-option.component.css'],
})
export class SortEmailOptionComponent implements OnInit {
  @Input() text: string;
  constructor() {}

  ngOnInit(): void {}
}
