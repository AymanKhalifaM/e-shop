import { AuthGuardService } from './auth/auth-guard.service';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { NewProductComponent } from './new-product/new-product.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", component: ProductsComponent },
  { path: "signup", component: SingupComponent },
  { path: "login", component: LoginComponent },
  {
    path: "my-products/new-product/:id",
    component: NewProductComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "my-products/new-product",
    component: NewProductComponent,
    canActivate: [AuthGuardService],
  },

  {
    path: "my-products",
    component: MyProductsComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
