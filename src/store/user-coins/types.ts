export interface IUserCoin extends coin {
  address?: string;
}
export interface IUserCoinsState {
  coins: IUserCoin[];
}

export interface IRemoveCoinAction {
  symbol: string;
}
export interface IAddCoinAction {
  coin: coin;
}
