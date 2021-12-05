import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NavMenuComponent} from './shared/nav-menu/nav-menu.component';
import {HomeComponent} from './pages/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductsModule} from './shared/components/products/products.module';
import {ProductDetailsComponent} from './pages/product-details/product-details.component';
import {ProductDetailsModule} from './pages/product-details/product-details.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'product-details', component: ProductDetailsComponent},

    ], {relativeLinkResolution: 'legacy'}),
    BrowserAnimationsModule,
    ProductsModule,
    ProductDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
