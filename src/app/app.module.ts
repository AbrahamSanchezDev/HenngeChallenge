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
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EmailDisplayComponent,
    DateDisplayComponent,
    EmailMetaDataDisplayComponent,
    DestinationDisplayayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
