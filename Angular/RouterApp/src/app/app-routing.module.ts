import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutProductsComponent } from './about-products/about-products.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'about', component: AboutComponent, children: [
    { path: 'us', component: AboutUsComponent },
    { path: 'products', component: AboutProductsComponent },
    { path: '', redirectTo: 'us', pathMatch: 'full'},
    { path: '**', redirectTo: 'us' }
  ] },
  { path: 'product/:id', component: ProductComponent, canActivate:[AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
