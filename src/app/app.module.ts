import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './component/pages/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailDisplayComponent } from './component/email/email-display/email-display.component';
import { DateDisplayComponent } from './component/display/date-display/date-display.component';
import { EmailMetaDataDisplayComponent } from './component/display/email-meta-data-display/email-meta-data-display.component';
import { DestinationDisplayayComponent } from './component/display/destination-displayay/destination-display.component';
import { SearchEmailComponent } from './component/email/search-email/search-email.component';
import { SearchCalendarComponent } from './component/search-calendar/search-calendar.component';
import {
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import {
  MatFormFieldModule,
  MatFormFieldControl,
} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EmailDisplayComponent,
    DateDisplayComponent,
    EmailMetaDataDisplayComponent,
    DestinationDisplayayComponent,
    SearchEmailComponent,
    SearchCalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatInputModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
