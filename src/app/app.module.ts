import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './store/reducers/admin.reducer';
import * as fromChat from './store/reducers/chat.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffectsService } from './store/effects/admin-effects.service';
import { ChatEffectsService } from './store/effects/chat-effects.service';
import { AdminComponent } from './components/admin/admin.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule,

    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:44363/v1'],
        sendAccessToken: true
       }
    }
  ),

  StoreModule.forFeature(fromAdmin.IdentityFeatureKey, fromAdmin.reducer),
  StoreModule.forRoot(fromAdmin.reducer),
  EffectsModule.forRoot([AdminEffectsService]),

  StoreModule.forFeature(fromChat.ChatFeatureKey, fromChat.reducer),
  StoreModule.forRoot(fromChat.reducer),
  EffectsModule.forRoot([ChatEffectsService]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
