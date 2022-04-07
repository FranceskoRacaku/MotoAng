import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreatemotorsComponent } from './motorsPlace/createmotors/createmotors.component';
import { EditmotorsComponent } from './motorsPlace/editmotors/editmotors.component';
import { MotorComponent } from './motorsPlace/motor/motor.component';
import { MotorsComponent } from './motorsPlace/motors/motors.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './usersPlace/users/users.component';
import { UserComponent } from './usersPlace/user/user.component';
import { CreateUsersComponent } from './usersPlace/createusers/createusers.component';
import { EditUsersComponent } from './usersPlace/editusers/editusers.component';
import { LoginUsersComponent } from './usersPlace/loginusers/loginusers.component';
import { PurchasesComponent } from './purchasesPlace/purchases/purchases.component';
import { CreatePurchasesComponent } from './purchasesPlace/createpurchases/createpurchases.component';
import { PurchaseComponent } from './purchasesPlace/purchase/purchase.component';
import { CefSellComponent } from './cefSellProfile/cefSell/cefSell.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatemotorsComponent,
    EditmotorsComponent,
    MotorComponent,
    MotorsComponent,
    LoginUsersComponent,
    PurchaseComponent,
    UserComponent,
    CreateUsersComponent,
    EditUsersComponent,
    CreatePurchasesComponent,
    UsersComponent,
    PurchasesComponent,
    CefSellComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
