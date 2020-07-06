import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: {id: number, name: string}[] = [];
  url

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    if (this.users.length > 0){
      this.url = this.users[0].id + '/' + this.users[0].name;
      this.router.navigate([this.users[0].id, '/', this.users[0].name], {relativeTo: this.route});
    }
  }

}
