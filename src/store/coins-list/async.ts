import { createAsyncThunk } from '@reduxjs/toolkit';
let currentRequest: AbortController | null = null;
const Search = createAsyncThunk<coin[], string>('coinsList/search', async (keyword) => {
  const abortController = new AbortController();
  const signal = abortController.signal;

  try {
    // If there is an ongoing request, cancel it
    if (currentRequest) {
      currentRequest.abort();
    }
  } catch (error: any) {
    console.log('request cancelled');
  }
  // Store the current request for future cancellation
  currentRequest = abortController;

  // Perform the search using fetch or any other asynchronous operation
  const searchResult = await fetch(`/api/tokens?searchStr=${keyword}`, { signal });

  // Handle the response as needed
  const fetchedCoins = (await searchResult.json()).coins as coin[];

  // Clear the current request as it has completed
  currentRequest = null;

  return fetchedCoins;
});

const CoinsListAsyncActions = {
  Search
};
export default CoinsListAsyncActions;
