import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

 const routes: Routes = [
   {
     path: '',
     component: RegisterComponent
   },
   {
    path: 'Home',
    component : HomeComponent
   },
  {
    path: 'Product',
    component: ProductViewComponent
  },
  {
    path:'Login',
    component : LoginComponent
  },
  {
   path: 'Contact',
   component : ContactComponent
  },
  {
    path: 'About',
    component : AboutUsComponent
  },
  {
    path: 'Register',
    component : RegisterComponent
  },

   { 
    path: 'product-detail/:productid',
   component: ProductDetailComponent 
  },
   {
     path: 'cart-page', 
   component: CartPageComponent 
  }
  
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
