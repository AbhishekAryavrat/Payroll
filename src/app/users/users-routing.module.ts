import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
