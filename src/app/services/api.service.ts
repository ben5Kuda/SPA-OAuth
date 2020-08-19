import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { OAuthService } from 'angular-oauth2-oidc';
import { Message } from '../models/message';
import { User } from '../models/user';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private httpClient: HttpClient ) { }

  apiEndPoint = 'some-api-endpoint';
  response: Response;

  getMessages(): Observable<Message[]> {
    return this.httpClient.get(this.apiEndPoint + 'Messages')
    .pipe(
      // tslint:disable-next-line:no-string-literal
      map(data => this.response = data['value']),
      tap( t => console.log('fetched messages '))
    );
  }

  postMessages(chat: Message): Observable<any> {
    return this.httpClient.post(this.apiEndPoint + 'Chats', chat);
    // .pipe(
    //   // tslint:disable-next-line:no-string-literal
    //   map(data => this.response = data),
    //   tap( t => console.log(' created message '))
   // );
  }

  getIdentity(): Observable<User>  {
    return this.httpClient.get(this.apiEndPoint + 'Users/1')
    .pipe(
       // tslint:disable-next-line:no-string-literal
      map(data => this.response = data['value']),
      tap( t => console.log('fetched identity '))
    );
  }
}
