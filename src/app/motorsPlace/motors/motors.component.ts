import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Motor } from '../motor/motor.model';
import { MotorService } from '../motor.service';


@Component({
  selector: 'app-motors',
  templateUrl: './motors.component.html',
  styleUrls: ['./motors.component.scss']
})
export class MotorsComponent implements OnInit {

  constructor(private router: Router, 
    private motorService: MotorService, 
    private route: ActivatedRoute) { }


    collection = {};
    term: string = '';

    
    motors:Motor[] = [];


    motor:Motor = {
      id: 0,
      vin: '',
      make: '',
      type: ''
    };


ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.motorService.getMotors().subscribe(payload=>{
        console.log(payload);
        this.motors = payload;
    })
  })
}


deleteMotors(id: number){
  if(confirm("Are you sure you want to delete this item?") == true){
    this.motorService.deleteMotors(id).subscribe(data =>{
      this.ngOnInit();
      })
    }
    else {
    }
  }
}
