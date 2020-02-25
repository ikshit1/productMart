import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddProductComponent } from '../app/add-product/add-product.component';
import { ViewProductComponent } from '../app/view-product/view-product.component';

import { FormsModule } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { ProductModel } from './service/data-service';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [AppComponent, AddProductComponent, ViewProductComponent, EditProductComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImagePicker,
    ProductModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
