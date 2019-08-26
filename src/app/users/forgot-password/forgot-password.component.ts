import { Component } from '@angular/core';
import { NbResetPasswordComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent extends NbResetPasswordComponent { } 
