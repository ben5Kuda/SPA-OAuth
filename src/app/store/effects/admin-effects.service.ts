import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getMessages, getMessagesCompleted } from '../actions/chat.actions';
import { mergeMap, map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { getIdentity, getIdentityCompleted } from '../actions/admin.actions';

@Injectable({
  providedIn: 'root'
})
export class AdminEffectsService {

 getIdentity$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getIdentity),
    mergeMap(action =>
      this.apiService.getIdentity().pipe(
        map(identityResponse => {
          return getIdentityCompleted( { currentIdentity: (identityResponse as User)});
        })
      ))
));

constructor(
  private actions$: Actions,
  private apiService: ApiService) { }
}

