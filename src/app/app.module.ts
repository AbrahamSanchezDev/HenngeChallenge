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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { SortEmailComponent } from './component/email/sort-email/sort-email.component';
import { SortEmailOptionComponent } from './component/email/sort-email-option/sort-email-option.component';
import { EmailOptionsComponent } from './component/email/email-options/email-options.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CurrentEmailDisplayComponent } from './component/display/current-email-display/current-email-display.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MailArchiverComponent } from './component/email/mail-archiver/mail-archiver.component';
import { EmailContentDisplayComponent } from './component/display/email-content-display/email-content-display.component';
import { TwoTextDisplayComponent } from './component/display/two-text-display/two-text-display.component';

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
    SortEmailComponent,
    SortEmailOptionComponent,
    EmailOptionsComponent,
    CurrentEmailDisplayComponent,
    MailArchiverComponent,
    EmailContentDisplayComponent,
    TwoTextDisplayComponent,
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
    MatSidenavModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
