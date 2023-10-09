import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  token: string | undefined;
  attribute: string = "";
  expandedToken: boolean = false;

  constructor(private keycloakService: KeycloakService) { }

  async ngOnInit(): Promise<void> {
    this.user = this.keycloakService.getKeycloakInstance().idTokenParsed;
    this.token = await this.keycloakService.getToken();
    console.log(this.user);
  }
  expandToken() {
    this.expandedToken = !this.expandedToken;
  }
}
