import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppComponent } from './app.component';
import { AnaSayfaComponent } from './ana-sayfa/ana-sayfa.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './router.navigate';
import { UserComponent } from './user/user.component';

const keycloakService = new KeycloakService();

@NgModule({
  declarations: [
    AnaSayfaComponent,
    AppComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    {
      provide: KeycloakService,
      useValue: keycloakService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    keycloakService.init({
      config: {
        url: 'http://localhost:8080',  
        realm: 'logreq',
        clientId: 'logreq',
      },
      initOptions: {
        onLoad: 'login-required',
      },
    });
  }
}
