import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <button (click)="login()">Login</button>
  `,
})
export class LoginComponent {
  constructor(private keycloak: KeycloakService, private router: Router) {}

  login() {
    const desiredRole = 'Mustafa'; 
    const userRoles = this.keycloak.getUserRoles();

    if (userRoles.includes(desiredRole)) { 
      const isLoggedIn = this.keycloak.isLoggedIn();
      if (!isLoggedIn) {
        this.keycloak.login().then(() => {
          this.router.navigate(['/home']);
        });
      } else {
        console.log('Kullanıcı zaten giriş yaptı.');
      }
    } else {
      console.log('Giriş yapmak için yetkiniz bulunmamaktadır.');
      alert('Giriş yapmak için yetkiniz bulunmamaktadır.');
    }
  }
}
