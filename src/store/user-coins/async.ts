import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAddCoinAction, IUserCoin } from './types';
import { generateNewBitcoinAdress } from '@/utils/bitcoin-address';

const Add = createAsyncThunk<IUserCoin, IAddCoinAction>('userCoins/add', async (action) => {
  if (action.coin.symbol === 'BTC') {
    const bitcoinAddress = generateNewBitcoinAdress();

    return { ...action.coin, address: bitcoinAddress };
  }
  return { ...action.coin };
});
const UserCoinsAsyncActions = {
  Add
};
export default UserCoinsAsyncActions;
