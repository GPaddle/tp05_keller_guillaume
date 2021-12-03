import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { CheckPasswordDirective } from './check-password.directive';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component'; // CLI imports router
import { NgxsModule } from '@ngxs/store';
import { AddToCartButtonComponent } from './cart/add-to-cart-button/add-to-cart-button.component';
import { environment } from 'src/environments/environment';
import { FloatingCartButtonComponent } from './cart/floating-cart-button/floating-cart-button.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { CartState } from './cart/states/cart-state';
import { RemoveFromCartButtonComponent } from './cart/remove-from-cart-button/remove-from-cart-button.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { PriceDisplayPipe } from './pipes/price-display.pipe';
import { AddAddressComponent } from './form/add-address/add-address.component';
import { AddressComponent } from './form/address/address.component';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FilterProductPipe,
    PriceDisplayPipe,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    CheckPasswordDirective,
    DetailComponent,
    AddToCartButtonComponent,
    FloatingCartButtonComponent,
    CartDetailComponent,
    RemoveFromCartButtonComponent,
    AddAddressComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([CartState], { developmentMode: !environment.production }),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
