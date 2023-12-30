import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import CoinsListAsyncActions from '@/store/coins-list/async';
import { userCoinsActions } from '@/store/user-coins';
import UserCoinsAsyncActions from '@/store/user-coins/async';
import debounce from '@/utils/debounce';
import { useCallback, useEffect, useMemo } from 'react';
interface ICoin4Manage extends coin {
  selected: boolean;
}
const useManageCoins = () => {
  const userCoins = useAppSelector((state) => state.userCoins.coins);
  const coinsList = useAppSelector((state) => state.coinsList.coins);
  const dispatch = useAppDispatch();
  const search = useCallback(
    async (keyword: string) => {
      await dispatch(CoinsListAsyncActions.Search(keyword));
    },
    [dispatch]
  );
  useEffect(() => {
    search('');
  }, [search]);
  const addCoin = useCallback(
    async (coin: coin) => {
      await dispatch(UserCoinsAsyncActions.Add({ coin }));
    },
    [dispatch]
  );
  const removeCoin = useCallback(
    async (coin: coin) => {
      await dispatch(userCoinsActions.remove({ coin }));
    },
    [dispatch]
  );
  const changeCoinStatus = useCallback(
    (shouldAdd: boolean, coin: ICoin4Manage) => {
      const { selected, ...restCoin } = coin;

      if (shouldAdd) return addCoin(restCoin);
      removeCoin(restCoin);
    },
    [removeCoin, addCoin]
  );
  const managingCoins = useMemo(() => {
    return coinsList.map<ICoin4Manage>((coin) => {
      if (userCoins.some((_userCoin) => _userCoin.symbol === coin.symbol))
        return { ...coin, selected: true };
      return { ...coin, selected: false };
    });
  }, [userCoins, coinsList]);
  return { managingCoins, search: debounce(search, 100), changeCoinStatus };
};
export default useManageCoins;
