import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchase } from '../purchase/purchase.model';
import { PurchaseService } from 'src/app/purchasesPlace/purchase.service';
import { Motor } from 'src/app/motorsPlace/motor/motor.model';
import { MotorService } from 'src/app/motorsPlace/motor.service';


@Component({
  selector: 'app-createpurchases',
  templateUrl: './createpurchases.component.html',
  styleUrls: ['./createpurchases.component.scss']
})
export class CreatePurchasesComponent implements OnInit {

  motor: Motor = {
    id: 0,
    vin: '',
    make:'',
    type: ''
  };

  user: any ={}

  createPurchase: any ={
    amount: '',
    motorId: '',
    userId: '',

  }

  name: string = '';
  balance: number = 0;

  constructor(private router: Router,
    private motorService: MotorService, 
    private purchaseService: PurchaseService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {

      this.createPurchase.userId = this.user.uniqueID
      // console.log("userData", payload.body.data)
      // console.log("purchase userId", this.createPurchase.userId)
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.motorService.getMotor(myid).subscribe(payload=>{
        console.log("This Motor", payload);
        this.motor = payload;
      })
      })
    }
    //  else{
    //     alert("Must be logged in!")
    //     this.router.navigateByUrl("/login");
    //   }
//     })
// }


createPurchases(createPurchase: any){
  createPurchase.motorId = this.motor.id;
  if(confirm("Please Accept Purchase") == true){
  this.purchaseService.createPurchase(createPurchase).subscribe(data => {
    if (data){
      this.router.navigateByUrl(`/users/${this.createPurchase.userId}`);
    }
    console.log("Purchase is Created ", data);
    this.router.navigateByUrl(`/users/${this.createPurchase.userId}`);
    this.ngOnInit();
  })
}
else{
    
}
}

}
