import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  constructor(private router: Router, 
    private userService: UserService, 
    private route: ActivatedRoute) { }


  config: any;
  collection = {};
  term: string = '';
  users:User[] = [];
    

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.userService.getUsers().subscribe(payload=>{
        console.log(payload);
        this.users = payload;

    })
  })
}


deleteUsers(id: number){
  if(confirm("Are you sure you want to delete this user?") == true){
    this.userService.deleteUsers(id).subscribe(data =>{
      this.ngOnInit();
      })
    }
    else {
    }
  }
}