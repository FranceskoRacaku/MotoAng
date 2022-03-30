import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MotorComponent } from './motorsPlace/motor/motor.component';
import { MotorsComponent } from './motorsPlace/motors/motors.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "motors", component: MotorsComponent},
  // {path: "motors/create", component: CreateMotorsComponent},
  {path: "motors/:id", component: MotorComponent},
  // {path: "motors/:id/edit", component: EditMotorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
