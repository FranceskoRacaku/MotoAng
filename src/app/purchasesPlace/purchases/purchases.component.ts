import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchase } from '../purchase/purchase.model';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})

export class PurchasesComponent implements OnInit {
  


  constructor(private router: Router, 
    private purchaseService: PurchaseService, 
    private route: ActivatedRoute) {}


  config: any;
  collection = {};
  term: string = '';
  purchases:Purchase[] = [];
    


  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.purchaseService.getPurchases().subscribe(payload=>{
        console.log(payload);
        this.purchases = payload;
         
    })
  })
}


  deletePurchases(id: number){
    if(confirm("Are you sure you want to delete this item?") == true){
    this.purchaseService.deletePurchases(id).subscribe(data =>{
      this.ngOnInit();
    })
  }
  else {
  }
}
}