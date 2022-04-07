import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from '../purchase.service';
import { Purchase } from './purchase.model';
import { Motor } from 'src/app/motorsPlace/motor/motor.model';
import { MotorService } from 'src/app/motorsPlace/motor.service';
import { UserService } from 'src/app/usersPlace/user.service';
import { Sell } from 'src/app/cefSellProfile/cefSell/cefSell.model';
import { SellService } from 'src/app/cefSellProfile/cef.service';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})


export class PurchaseComponent implements OnInit {

  motors: Motor[] =[];

  sells: Sell[] =[];

  createSell: any ={
    amountSold: '',
    motorId: '',
    userId: '',

  }

  purchase:Purchase = {
    id: 0,
    amount: 0,
    motorId: 0,
    userId: 0,
  };

  
  name: string = '';
  balance: number = 0;

  constructor(private route:ActivatedRoute, 
    private purchaseService: PurchaseService,
    private sellService: SellService,
    private motorService: MotorService,
    private userService: UserService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      var myid = +params['id'];
      this.purchaseService.getPurchase(myid).subscribe(payload=>{
        this.purchase = payload;
        // this.userService.postAccount().subscribe(payload => {
        //   if (payload.body.message == 'success'){
    
        //     this.balance = payload.body.data.Account_Balance.toFixed(2);
        console.log(payload);
        this.createSell.amountSold = this.purchase.amount
        this.createSell.motorId = this.purchase.motorId
        this.createSell.userId = this.purchase.userId
        
      console.log("this is the amount ", this.createSell.amount)
      console.log("this is the motor id", this.createSell.motorId)
      console.log("this is the user id", this.createSell.userId)
          })
        // })
    })

      this.motorService.getMotors().subscribe(payload=>{
        console.log("This motor", payload);
        this.motors = payload;
        
      })
    }
  


  sellMotor(id: number, createSell: any){
    if(confirm(`Are you sure you want to sell this Motor for Amount of  $${this.purchase.amount}?`) == true){
      console.log("this is the amount ", this.purchase.amount)
      console.log("this is the motor id", this.purchase.motorId)
      console.log("this is the user id", this.purchase.userId)
      this.sellService.createSell(createSell).subscribe(data =>{
        createSell.amountSold = this.purchase.amount
        createSell.motorId = this.purchase.motorId
        createSell.userId = this.purchase.userId
        console.log("this is the user id", createSell.updatedBalance)
        console.log("this sell is getting create", data)
      })
        this.purchaseService.deletePurchases(id).subscribe(data =>{
          if (data){
            this.router.navigateByUrl(`/users/${this.createSell.userId}`);
          }
          console.log("Purchase is Created ", data);
          this.router.navigateByUrl(`/users/${this.createSell.userId}`);
          this.ngOnInit();
        })
      }
      else{
          
      }
      }
      

    edit():void {
      this.router.navigateByUrl(`/purchases/${this.purchase.id}/edit`);
    }
}
