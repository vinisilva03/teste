import { Component } from '@angular/core';
import { UserService } from '../user.service';

interface User {
  name: string;
  email: string;
  phone: string;
  dob: string;
  userType: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = {
    name: '',
    email: '',
    phone: '',
    dob: '',
    userType: 'Visualizador'
  };

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.userService.addUser(this.user);
    console.log(this.user);
  }
}
