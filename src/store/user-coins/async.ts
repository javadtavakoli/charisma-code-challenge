import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAddCoinAction, IUserCoin } from './types';
import { generateBitcoinAddress } from '@/utils/bitcoin-address';

const Add = createAsyncThunk<IUserCoin, IAddCoinAction>('userCoins/add', async (action) => {
  if (action.coin.symbol === 'btc') {
    const bitcoinAddress = await generateBitcoinAddress();
    return { ...action.coin, address: bitcoinAddress };
  }
  return { ...action.coin };
});
const UserCoinsAsyncActions = {
  Add
};
export default UserCoinsAsyncActions;
