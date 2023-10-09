import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private keycloak: KeycloakService, private router: Router ) {}
  
    async canActivate(): Promise<boolean> {
      if (await this.keycloak.isLoggedIn() && this.keycloak.isUserInRole('Mustafa')) {
        return true; 
      } else {
        alert("Bu sayfaya giriş yapma yetkiniz yoktur. ")
        this.router.navigate(['/ana-sayfa']); 
        return false; 
      }
    }
  }