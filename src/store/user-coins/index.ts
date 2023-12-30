import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAddCoinAction, IUserCoinsState } from './types';
import UserCoinsAsyncActions from './async';

const initialState: IUserCoinsState = {
  coins: []
};
export const userCoinsSlice = createSlice({
  name: 'userCoins',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<IAddCoinAction>) => {
      const coinIndex = state.coins.findIndex((c) => c.symbol === action.payload.coin.symbol);
      if (coinIndex > -1) state.coins.splice(coinIndex, 1);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(UserCoinsAsyncActions.Add.fulfilled, (state, action) => {
      if (!state.coins.some((coin) => coin.symbol === action.payload.symbol))
        state.coins.push(action.payload);
    });
  }
});
export default userCoinsSlice.reducer;
export const userCoinsActions = userCoinsSlice.actions;
