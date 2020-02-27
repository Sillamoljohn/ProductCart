import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { ProductListComponent } from './product-list/product-list.component';
import { CardComponent } from './card/card.component';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoryPipe } from './pipe/search';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [AppComponent,
    ProductListComponent,
    CardComponent,
    CheckoutModalComponent,
    CategoryPipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
