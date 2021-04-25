import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { RequestDemoComponent } from '../components/request-demo/request-demo.component';
import { FooterComponent } from '../components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    RequestDemoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    RequestDemoComponent,
    FooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
