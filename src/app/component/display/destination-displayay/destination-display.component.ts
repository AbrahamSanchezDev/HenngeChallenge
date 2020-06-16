import { Component, OnInit, Input } from '@angular/core';
import { EmailModule } from 'src/app/model/email/email.module';

@Component({
  selector: 'app-destination-display',
  templateUrl: './destination-display.component.html',
  styleUrls: ['./destination-display.component.css'],
})
export class DestinationDisplayayComponent implements OnInit {
  @Input() email: EmailModule;
  constructor() {}

  ngOnInit(): void {}
  //retuns the destinations of the email
  getDestination(): string {
    if (this.email.destination.length == 1) {
      return this.email.destination[0];
    }
    return `${this.email.destination[0]}, ...`;
  }
  //Checks if the email has more than one destination
  hasMoreThanOneDestination(): boolean {
    return this.email.destination.length > 1;
  }
  //Returns the total amount of destinations minus the first one
  getTotalDestionations(): string {
    return `+${this.email.destination.length - 1}`;
  }
}