import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: {id: number, name: string};
  userName = '';

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.user = this.usersService.getUser(id);
    this.route.paramMap.subscribe(paramMap => {
      this.user = this.usersService.getUser(+paramMap.get('id'));
      this.bindUserProperties();
    });
    this.bindUserProperties();

  }

  bindUserProperties(){
    this.userName = this.user?.name;
  }

  onUpdateUser() {
    this.usersService.updateUser(this.user.id, {name: this.userName});
  }

}
