import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AlertModule } from 'ngx-alerts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { AuthModule } from './modules/auth/auth.module';
import { CartModule } from './modules/cart/cart.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';
import { TopBarComponent } from './shared/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    TopBarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxSpinnerModule,
    RouterModule,
    AuthModule,
    FormsModule,
    CartModule,
    AlertModule.forRoot(
      { 
        maxMessages: 5, 
        timeout: 5000, 
        positionX: 'right' 
      }
    ),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
