import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PurchaseService } from 'src/app/purchasesPlace/purchase.service';
import { Purchase } from 'src/app/purchasesPlace/purchase/purchase.model';
import { Motor } from 'src/app/motorsPlace/motor/motor.model';
import { MotorService } from 'src/app/motorsPlace/motor.service';
import { UserService } from 'src/app/usersPlace/user.service';
import { SellService } from '../cef.service';
import { Sell } from './cefSell.model';


@Component({
  selector: 'app-user',
  templateUrl: './cefSell.component.html',
  styleUrls: ['./cefSell.component.scss']
})
export class CefSellComponent implements OnInit {


  config: any;
  collection = {};
  term: string = '';


  purchases: Purchase[] =[];
  sells: Sell[] =[];

  user: any= {}

  purchase: Purchase = {
    id: 0,
    amount: 0,
    userId: 0,
    motorId: 0
  };

  accountObj: any = {};

  name: string = '';
  balance: string = '';


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
      this.sellService.getSells().subscribe(payload=>{
        console.log(payload);
        this.sells = payload;
         
    })
  })
}
}
