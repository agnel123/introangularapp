import { Component, OnInit } from '@angular/core';  
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { UserService } from '../user.service';  
import { User } from '../user'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  allUsers: Observable<User[]>;  
  constructor(private formbulider: FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.loadAllUsers();  
    console.log(this.allUsers);
  }

  loadAllUsers() {  
    this.allUsers = this.userService.getAllUser();  
  } 

}
