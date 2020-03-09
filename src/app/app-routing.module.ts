import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
