import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userCoinsReducer from './user-coins';
import coinsListReducer from './coins-list';
const reducers = combineReducers({
  userCoins: userCoinsReducer,
  coinsList: coinsListReducer
});
const store = configureStore({ reducer: reducers });
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
