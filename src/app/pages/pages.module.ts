import { NgModule } from '@angular/core';
import { NbMenuModule, NbAlertComponent } from '@nebular/theme';


import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
   

    
  ],
  declarations: [
    PagesComponent,
    LoginComponent,
    NbAlertComponent
  ],
})
export class PagesModule {
}
