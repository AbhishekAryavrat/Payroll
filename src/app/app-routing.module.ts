import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [

  {
    path: 'users',
    loadChildren: () => import('../app/users/users.module')
      .then(m => m.UsersModule),
  },
  {
    path: 'pages',
    loadChildren: () => import('../app/pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },

];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule { }