// @packages
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// @scripts
import { AuthModule } from './modules/auth/auth.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => AuthModule)
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
