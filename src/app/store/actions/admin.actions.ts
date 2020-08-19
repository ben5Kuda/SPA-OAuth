import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const getIdentity = createAction(
    '[admin] getIdentity'
  );

export const getIdentityCompleted = createAction(
      '[admin] getIdentityComplete',
      props< { currentIdentity: User }>()
  );
