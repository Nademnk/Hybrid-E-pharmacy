
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user', 
    loadChildren: () => import('./user-module/user-module.module').then(m => m.UserModuleModule) // Lazy load UserModule
  },
  {
    path: 'admin', 
    loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) // Lazy load AdminModule
  },
  { 
    path: '**', 
    redirectTo: '/user/login',  // Wildcard route for a 404 page or redirect to login page
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
