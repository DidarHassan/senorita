import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPopupComponent } from './component/cart-popup/cart-popup.component';
import { BeautyCareComponent } from './page/beauty-care/beauty-care.component';
import { HomeComponent } from './page/home/home.component';
import { ViewAllProductComponent } from './page/view-all-product/view-all-product.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'beautyCare', component: BeautyCareComponent},
  {path: 'viewAllProduct', component: ViewAllProductComponent},
  {path: 'cartPopup', component: CartPopupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
