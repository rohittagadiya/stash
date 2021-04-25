import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PaymentComponent } from './payment/payment.component';
import { PlatformComponent } from './platform/platform.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "home-page", component: HomePageComponent },
  { path: "platform", component: PlatformComponent },
  { path: "technology", component: TechnologyComponent },
  { path: "payment", component: PaymentComponent },
  { path: "contact-us", component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
