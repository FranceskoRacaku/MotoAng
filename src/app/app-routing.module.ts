import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatemotorsComponent } from './motorsPlace/createmotors/createmotors.component';
import { EditmotorsComponent } from './motorsPlace/editmotors/editmotors.component';
import { MotorComponent } from './motorsPlace/motor/motor.component';
import { MotorsComponent } from './motorsPlace/motors/motors.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "motors", component: MotorsComponent},
  {path: "motors/create", component: CreatemotorsComponent},
  {path: "motors/:id", component: MotorComponent},
  {path: "motors/:id/edit", component: EditmotorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
