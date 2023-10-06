// ana-sayfa.component.ts

import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ana-sayfa',
  templateUrl: './ana-sayfa.component.html',
  styleUrls: ['./ana-sayfa.component.css']
})
export class AnaSayfaComponent {

  constructor(private keycloak: KeycloakService, private router: Router) {}

  logout() {
    this.keycloak.logout().then(() => {
      this.router.navigate(['/']);
    });
  }
}
