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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatemotorsComponent,
    EditmotorsComponent,
    MotorComponent,
    MotorsComponent
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
