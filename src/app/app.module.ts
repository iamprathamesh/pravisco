import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/landing-page/header/header.component';
import { BodyComponent } from './components/landing-page/body/body.component';
import { TestimonialComponent } from './components/landing-page/testimonial/testimonial.component';
import { FooterComponent } from './components/landing-page/footer/footer.component';
import { CareersComponent } from './components/careers/career.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    TestimonialComponent,
    FooterComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
