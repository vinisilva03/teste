import { Injectable } from '@angular/core';

interface User {
  name: string;
  email: string;
  phone: string;
  dob: string;
  userType: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUsers(): User[] {
    return this.users;
  }
}
