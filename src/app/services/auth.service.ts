import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated = new BehaviorSubject<boolean>(false);
  
  constructor(private router: Router) { }

  async checkAuthenticated() {
    const authenticated = this.isAuthenticated.getValue();
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }


  async login(username: string, password: string) {
    if(username != 'mradul@gmail.com' && password != 'Mradul123'){
      return false;
    }

    this.isAuthenticated.next(true);

  }

  async logout(redirect: string) {
    try {
      this.isAuthenticated.next(false);
      this.router.navigate([redirect]);
    } catch (err) {
      console.error(err);
    }
  }
}
