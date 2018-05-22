import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Angular Bootstrap:
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatGridListModule
  } from '@angular/material';

// App compoents and services
import { AppComponent } from './app.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductReviewDetailsComponent } from './product-review-details/product-review-details.component';
import { ProductUserReviewComponent } from './product-user-review/product-user-review.component';
import { ProductReviewListingComponent } from './product-review-listing/product-review-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    ProductReviewComponent,
    ProductReviewDetailsComponent,
    ProductUserReviewComponent,
    ProductReviewListingComponent,

  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    MatMenuModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
