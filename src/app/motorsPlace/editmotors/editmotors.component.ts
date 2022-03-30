import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Motor } from '../motor/motor.model';
import { MotorService } from 'src/app/motorsPlace/motor.service';

@Component({
  selector: 'app-editmotors',
  templateUrl: './editmotors.component.html',
  styleUrls: ['./editmotors.component.scss']
})
export class EditmotorsComponent implements OnInit {

  constructor(private router: Router, 
    private motorService: MotorService, 
    private route: ActivatedRoute) { }

    motor:Motor = {
      id: 0,
      vin: '',
      make: '',
      type: ''
    };


  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.motorService.getMotor(myid).subscribe(payload=>{
        console.log("editing this", payload);
        this.motor = payload;
      })
    })
  }

  update():void{
    this.motorService.updateMotors(this.motor).subscribe(data => {
      if (data){
        this.router.navigateByUrl(`/motors/${this.motor.id}`);
      }
      console.log("Motor is Updated ", data);
    })
  }
}
