import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user.model';
import { UserService } from 'src/app/usersPlace/user.service';


@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.scss']
})
export class EditUsersComponent implements OnInit {


  user: User = {
    id: 0,
    userName: '',
    userEmail:'',
    userAge: 0,
  };
  
  constructor(private router: Router, 
    private userService: UserService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.userService.getUser(myid).subscribe(payload=>{
        console.log("editing this", payload);
        this.user = payload;
      })
    })
  }

  update():void{
    this.userService.updateUsers(this.user).subscribe(data => {
      console.log("here");
      if (data){
        this.router.navigateByUrl(`/users/${this.user.id}`);
      }
      console.log("User is Updated ", data);
    })
  }
}
