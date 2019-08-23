import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { NbAlertModule, NbCardModule, NbInputModule, NbCheckboxModule, NbWindowModule, NbMenuModule, } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { OneColumnComponent } from './layouts/one-column/one-column.component';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    LoginComponent,
    OneColumnComponent,
    UsersComponent,

  ],
  imports: [
    UsersRoutingModule,
    NbAlertModule,
    NbCardModule,
    NbInputModule,
    NbCheckboxModule,
    ThemeModule,
    NbWindowModule,
    FormsModule,
    NbMenuModule

  ]
})
export class UsersModule { }
