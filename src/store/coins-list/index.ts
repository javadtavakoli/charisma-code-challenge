import { createSlice } from '@reduxjs/toolkit';
import { ICoinsListState } from './types';
import CoinsListAsyncActions from './async';

const initialState: ICoinsListState = {
  coins: []
};
export const coinsListSlice = createSlice({
  name: 'coinsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CoinsListAsyncActions.Search.fulfilled, (state, action) => {
      state.coins = action.payload;
    });
  }
});
export default coinsListSlice.reducer;
