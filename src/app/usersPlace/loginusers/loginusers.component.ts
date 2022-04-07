import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user.model';
import { UserService } from 'src/app/usersPlace/user.service';


@Component({
  selector: 'app-loginusers',
  templateUrl: './loginusers.component.html',
  styleUrls: ['./loginusers.component.scss']
})
export class LoginUsersComponent implements OnInit {
  loginObj: { userName: string; userEmail: string } = {
    userName: '',
    userEmail: '',
  };

  user: User = {
    id: 0,
    userName: '',
    userEmail:'',
    userAge: 0,
  };
  createUser: any ={
    amount: '',
    fundId: '',
    userId: '',

  }
  constructor(private router: Router, 
    private userService: UserService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  login(){
    this.userService.login(this.loginObj).subscribe((data: any)=>{
      if (data.body.status === 'success'){
        // this.user.id = this.createUser.userId;
        this.router.navigateByUrl("/profile");
      }
      console.log("User is Created ", data);
      this.ngOnInit();
    })
  }

}
