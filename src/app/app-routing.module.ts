import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatemotorsComponent } from './motorsPlace/createmotors/createmotors.component';
import { EditmotorsComponent } from './motorsPlace/editmotors/editmotors.component';
import { MotorComponent } from './motorsPlace/motor/motor.component';
import { MotorsComponent } from './motorsPlace/motors/motors.component';
import { CreatePurchasesComponent } from './purchasesPlace/createpurchases/createpurchases.component';
import { PurchaseComponent } from './purchasesPlace/purchase/purchase.component';
import { PurchasesComponent } from './purchasesPlace/purchases/purchases.component';
import { CreateUsersComponent } from './usersPlace/createusers/createusers.component';
import { EditUsersComponent } from './usersPlace/editusers/editusers.component';
import { LoginUsersComponent } from './usersPlace/loginusers/loginusers.component';
import { UserComponent } from './usersPlace/user/user.component';
import { UsersComponent } from './usersPlace/users/users.component';
import { CefSellComponent } from './cefSellProfile/cefSell/cefSell.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "motors", component: MotorsComponent},
  {path: "motors/create", component: CreatemotorsComponent},
  {path: "motors/:id", component: MotorComponent},
  {path: "motors/:id/edit", component: EditmotorsComponent},
  {path: "motors/:id/create", component: CreatePurchasesComponent},
  {path: 'purchases', component: PurchasesComponent },
  {path: 'purchases/:id', component: PurchaseComponent },
  {path: "users", component: UsersComponent},
  {path: "users/login", component: LoginUsersComponent},
  {path: "users/create", component: CreateUsersComponent},
  {path: "users/:id", component: UserComponent},
  {path: "users/:id/edit", component: EditUsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
