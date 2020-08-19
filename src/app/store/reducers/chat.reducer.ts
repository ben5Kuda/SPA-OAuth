import { Message } from 'src/app/models/message';
import { createReducer, State, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { getMessages, getMessagesCompleted } from '../actions/chat.actions';


export const ChatFeatureKey = 'chatting';

export interface ChatState {
    messages: Message[];
    unreadMessages: number;
    onlineStatus: boolean;
    isLoading: boolean;
}

export const initialState: ChatState = {
    messages: [],
    unreadMessages: 0,
    onlineStatus: false,
    isLoading: false
};

const chatReducer = createReducer(
    initialState,
    on(getMessages, (state) => ({ ...state, isLoading: true})),
    on(getMessagesCompleted, (state, {msgs}) => ({...state, isLoading: false, messages: msgs}))
);

export function reducer(state: ChatState, action: Action) {
    console.log(action.type.toString());
    return chatReducer(state, action);
}

export const selectState = createFeatureSelector<any, ChatState>(ChatFeatureKey);
// (state: any) => state.vehicles;

export const selectMessages = createSelector(
    selectState,
    (state: ChatState) => state.messages
  );


