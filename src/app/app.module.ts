import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './component/nav/nav.component';
import { BeautyCareComponent } from './page/beauty-care/beauty-care.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CarouselModule } from 'ngx-owl-carousel-o';
import {FooterComponent } from './component/footer/footer.component';
import {ViewAllProductComponent } from './page/view-all-product/view-all-product.component';
import {CartPopupComponent } from './component/cart-popup/cart-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FilterPipe } from './filter/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search/search.pipe';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BeautyCareComponent,
    FooterComponent,
    ViewAllProductComponent,
    CartPopupComponent,
    FilterPipe,
    SearchPipe,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSidenavModule,
    CarouselModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
