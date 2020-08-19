import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

    // Url of the Identity Provider
    issuer: 'https://localhost:5021',

    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin,

    // The SPA's id. The SPA is registerd with this id at the auth-server
    clientId: 'spa',

    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'read roles',

      // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
      // OAuth2-based access_token
     oidc: true, // ID_Token

     showDebugInformation: true,

     timeoutFactor: 0.5,

     sessionChecksEnabled: true,

  };
