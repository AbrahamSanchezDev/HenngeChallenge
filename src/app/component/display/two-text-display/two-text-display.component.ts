import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two-text-display',
  templateUrl: './two-text-display.component.html',
  styleUrls: ['./two-text-display.component.css'],
})
export class TwoTextDisplayComponent implements OnInit {
  @Input() first: string;
  @Input() second: string;
  constructor() {}

  ngOnInit(): void {}
}
