import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `<button class="btn btn-outline-success" (click)="login()">Login</button>`,
})
export class LoginComponent {
  constructor(private keycloak: KeycloakService, private router: Router) {}

  login() {
    if (this.hasMustafaRole()) {
      const isLoggedIn = this.keycloak.isLoggedIn();
      if (!isLoggedIn) {
        this.keycloak.login().then(() => {
          this.router.navigate(['/home']);
        });
      } else {
        console.log('User is already logged in.');
      }
    } else {
      console.log('You are not authorized to log in.');
      alert('You are not authorized to log in.');
      return;
    }
  }

  hasMustafaRole(): boolean {
    const desiredRole = 'Mustafa'; 
    const userRoles = this.keycloak.getUserRoles();
  
    return userRoles.includes(desiredRole);
  }
}
