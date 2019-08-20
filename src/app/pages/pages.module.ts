import { NgModule } from '@angular/core';
import { NbAlertModule } from '@nebular/theme';
import { ThemeModule} from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { NbCheckboxModule } from '@nebular/theme';
import {NbInputModule} from '@nebular/theme';





@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbAlertModule,
    FormsModule,
    NbInputModule,
   NbCheckboxModule,
   
  ],
  declarations: [
    PagesComponent,
    LoginComponent,
  
  
  ],
})
export class PagesModule {
}
