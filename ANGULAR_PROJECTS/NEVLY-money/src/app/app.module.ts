import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BannerComponent } from './core/components/banner/banner.component';
import { NevlyGuideComponent } from './core/components/nevly-guide/nevly-guide.component';
import { NevlyServicesComponent } from './core/components/nevly-services/nevly-services.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NevlyPlansComponent } from './core/components/nevly-plans/nevly-plans.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginEmailComponent } from './pages/login-email/login-email.component';
import { LoginPhoneComponent } from './pages/login-phone/login-phone.component';
import { QrPopupComponent } from './core/popups/qr-popup/qr-popup.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { TermsComponent } from './core/popups/terms/terms.component';
import { PrivacyComponent } from './core/popups/privacy/privacy.component';
import { SecurityComponent } from './core/popups/security/security.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    NevlyGuideComponent,
    NevlyServicesComponent,
    NevlyPlansComponent,
    FooterComponent,
    HomeComponent,
    LoginEmailComponent,
    LoginPhoneComponent,
    QrPopupComponent,
    FaqsComponent,
    TermsComponent,
    PrivacyComponent,
    SecurityComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
