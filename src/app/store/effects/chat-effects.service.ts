import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getMessages, getMessagesCompleted, postMessages } from '../actions/chat.actions';
import { mergeMap, map } from 'rxjs/operators';
import { Message } from 'src/app/models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatEffectsService {

 getMessages$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getMessages),
    mergeMap(action =>
      this.apiService.getMessages().pipe(
        map(messagesResponse => {
          return getMessagesCompleted( { msgs: (messagesResponse as Message[])});
        })
      ))
));

constructor(
  private actions$: Actions,
  private apiService: ApiService) { }
}

