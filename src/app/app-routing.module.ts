import { NewProductComponent } from './new-product/new-product.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",component:ProductsComponent},
  {path:"my-products/new-product",component:NewProductComponent},
  {path:"my-products/new-product/:id",component:NewProductComponent},
  {path:"my-products",component:MyProductsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
