import { createAction, props } from '@ngrx/store';
import { Message } from 'src/app/models/message';

export const getMessages = createAction (
    '[chat] getMessages'
);

export const getMessagesCompleted = createAction (
    '[chat] getMessagesComplete',
    props< {msgs: Message[] }> ()
);

export const postMessages = createAction (
    '[chat] postMessages',
    props< {msgs: Message[] }> ()
);
