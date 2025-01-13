import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a user', () => {
    const user = { name: 'John Doe', email: 'john@example.com', phone: '123456789', dob: '1990-01-01', userType: 'Administrador' };
    service.addUser(user);
    expect(service.getUsers()).toContain(user);
  });

  it('should return users', () => {
    const user = { name: 'John Doe', email: 'john@example.com', phone: '123456789', dob: '1990-01-01', userType: 'Administrador' };
    service.addUser(user);
    const users = service.getUsers();
    expect(users.length).toBe(1);
    expect(users[0]).toEqual(user);
  });
});
