import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Motor } from '../motor/motor.model';
import { MotorService } from 'src/app/motorsPlace/motor.service';

@Component({
  selector: 'app-createmotors',
  templateUrl: './createmotors.component.html',
  styleUrls: ['./createmotors.component.scss']
})
export class CreatemotorsComponent implements OnInit {

  createMotor: any ={
    vin: '',
    make: '',
    type: ''
  }


  constructor(private router: Router, 
    private motorService: MotorService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  createMotors(createMotor: any){
    this.motorService.createMotor(createMotor).subscribe(data => {
      if (data){
        this.router.navigateByUrl("/motors");
      }
      console.log("Motor is Created ", data);
      this.router.navigateByUrl("/motors");
      this.ngOnInit();
    })
  }


}
