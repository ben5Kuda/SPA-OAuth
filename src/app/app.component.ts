import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Message, MessageAudience } from './models/message';
import { OAuthService, OAuthErrorEvent, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import { authConfig } from './oauth/auth-config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userClaims: any;
  expiryDate: Date;
  OAuthEvent: OAuthSuccessEvent;
  eventTime: Date;

  constructor(public oauthService: OAuthService) {
    this.configureWithNewConfigApi();
  }

  ngOnInit() {
    this.oauthService.events.subscribe(event => {

      if (event instanceof OAuthErrorEvent) {
        console.error(event);
      } else if (event instanceof OAuthSuccessEvent) {
        this.OAuthEvent = event;
        this.eventTime = new Date();
        console.log(event);
      } else {
        console.warn(event);
      }

    });

  }

  refreshToken () {
    this.oauthService.loadDiscoveryDocumentAndLogin();

    if (this.oauthService.hasValidAccessToken()) {
      return;
    }

    console.log(this.oauthService.hasValidAccessToken());

    // this.oauthService.silentRefreshRedirectUri = window.location.origin + "/silent-refresh.html";
    console.log('Manual token refresh');

    this.oauthService.silentRefresh()
    .then(info => console.debug('refresh ok', info))
    .catch(err => console.error('refresh error', err));;
  }

    public login() {
      this.oauthService.initImplicitFlow();
      console.log('implicit flow initiated');
  }

    public logoff() {
      this.oauthService.logOut();
  }

  public getClaims() {

      const claims = this.oauthService.getIdentityClaims();
      this.userClaims = claims;

      if (this.userClaims) {
       const date = this.userClaims.exp * 1000;
       this.expiryDate = new Date(date);
      }

    console.log('gettting claims');

    console.log(claims);
      if (!claims) { return null; }
      return claims;
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    this.oauthService.loadDiscoveryDocumentAndLogin();

    this.oauthService.setupAutomaticSilentRefresh();
    console.log('Attempting automatic token refresh');
  }

}
