import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';

import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { BakersignupComponent } from './bakersignup/bakersignup.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { BakerComponent } from './baker/baker.component';
import { AdminformComponent } from './adminform/adminform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    LoginComponent,
    ProductsComponent,
    AddproductsComponent,
    ProductListComponent,
    UpdateProductComponent,
    BakersignupComponent,
    UsersignupComponent,
    BakerComponent,
    AdminformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
