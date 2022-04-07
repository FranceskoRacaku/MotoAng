import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from './user.model';
import { PurchaseService } from 'src/app/purchasesPlace/purchase.service';
import { Purchase } from 'src/app/purchasesPlace/purchase/purchase.model';
import { Motor } from 'src/app/motorsPlace/motor/motor.model';
import { MotorService } from 'src/app/motorsPlace/motor.service';
import { Sell } from 'src/app/cefSellProfile/cefSell/cefSell.model';
import { SellService } from 'src/app/cefSellProfile/cef.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  config: any;
  collection = {};
  term: string = '';
  purchases: Purchase[] =[];
  sells: Sell[] = [];

  sell: Sell = {
    id: 0,
    amountSold: 0,
    motorId: 0,
    userId: 0,
  };

  purchase: Purchase = {
    id: 0,
    amount: 0,
    motorId: 0,
    userId: 0,
  };
  user: User = {
    id: 0,
    userName: '',
    userEmail: '',
    userAge: 0,
  };

  users: any={}
  userName: string = '';
  userEmail: string = '';

  constructor(private route:ActivatedRoute, 
    private userService: UserService,
    private purchaseService: PurchaseService,
    private sellService: SellService,
    private motorService: MotorService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.userService.getUser(myid).subscribe(payload=>{
        console.log(payload);
        this.user = payload;
      })

      // this.purchases.id = myid
      // console.log("this is the ID", this.purchase.fundId)
      
      // this.purchaseService.getPurchasesByUser(myid).subscribe(payload=>{
      //   this.purchases = payload;
      //   console.log("purchase", payload)
      // })
      this.purchaseService.getPurchases().subscribe(payload=>{
        this.purchases = payload;
        console.log("purchase", payload)
      })

      this.sellService.getSells().subscribe(payload=>{
        this.sells = payload;
        console.log("sell", payload)
      })
    
    })
  }


    edit():void {
      this.router.navigateByUrl(`/users/${this.user.id}/edit`);
    }

    deletePurchases(id: number){
      if(confirm("Are you sure you want to sell this item?") == true){
      this.purchaseService.deletePurchases(id).subscribe(data =>{
        this.ngOnInit();
      })
    }
    else {
    }
  }
}
