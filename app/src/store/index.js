import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { profileReducer } from './profile/reducer';
import { chatsReducer } from './chats/reducer';
import { msgsReducer } from './messages/reducer';
import { quizReducer } from './quiz/reducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  msgs: msgsReducer,
  quiz: quizReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'gbMessenger',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);
