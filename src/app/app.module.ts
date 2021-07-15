import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeLPComponent } from './home-lp/home-lp.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuotesButtonsComponent } from './quotes-buttons/quotes-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeLPComponent,
    QuotesComponent,
    QuotesFormComponent,
    QuotesButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
