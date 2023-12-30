import { createAsyncThunk } from '@reduxjs/toolkit';
const controller = new AbortController();
const signal = controller.signal;
const Search = createAsyncThunk<coin[], string>('coinsList/search', async (keyword) => {
  controller.abort();
  const searchResult = await fetch(`/api/tokens?searchStr=${keyword}`, { signal });
  const fetchedCoins = (await searchResult.json()) as coin[];

  return fetchedCoins;
});

const CoinsListAsyncActions = {
  Search
};
export default CoinsListAsyncActions;
