import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MotorService } from '../motor.service';
import { Motor } from './motor.model';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss']
})
export class MotorComponent implements OnInit {

  motor:Motor = {
    id: 0,
    vin: '',
    make: '',
    type: ''
  };



  constructor(private route:ActivatedRoute, 
    private motorService: MotorService,
    private router: Router,
    ) { }



    ngOnInit(): void {
      this.route.params.subscribe(params=>{
        const myid = +params['id'];
        this.motorService.getMotor(myid).subscribe(payload=>{
          console.log(payload);
          this.motor = payload;
        })
      })
    }




  edit():void {
    this.router.navigateByUrl(`/motors/${this.motor.id}/edit`);
  }

  purchase():void {
    this.router.navigateByUrl(`/motors/${this.motor.id}/create`);
  }
}
