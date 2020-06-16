import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './component/pages/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailDisplayComponent } from './component/email/email-display/email-display.component';
import { DateDisplayComponent } from './component/display/date-display/date-display.component';
@NgModule({
  declarations: [AppComponent, MainComponent, EmailDisplayComponent, DateDisplayComponent],
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
