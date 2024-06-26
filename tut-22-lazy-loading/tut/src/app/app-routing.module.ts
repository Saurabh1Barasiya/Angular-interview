import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'',component:HomeComponent},

  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },

  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
