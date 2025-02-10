import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginEmailComponent } from './pages/login-email/login-email.component';
import { LoginPhoneComponent } from './pages/login-phone/login-phone.component';
import { HomeComponent } from './pages/home/home.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'login-phone', component: LoginPhoneComponent, },
  { path: 'login-email', component: LoginEmailComponent, },
  { path: 'faqs', component: FaqsComponent, },
  { path: 'contact', component: ContactComponent, },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
