import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private usersService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.user = this.usersService.getUser(id);
    this.route.paramMap.subscribe(paramMap => {
      this.user = this.usersService.getUser(+paramMap.get('id'));
    });
  }

}
