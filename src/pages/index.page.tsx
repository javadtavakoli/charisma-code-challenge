import List from '@/components/common/list';
import TokenIcon from '@/components/common/token-icon';
import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <>
      <h4>داشبورد</h4>
      <List>
        {[
          {
            body: (
              <div>
                <TokenIcon>BTC</TokenIcon>
              </div>
            ),
            id: 'bitcoin'
          },
          {
            body: (
              <div>
                <TokenIcon>BNB</TokenIcon>
              </div>
            ),
            id: 'binance coin'
          },
          {
            body: (
              <div>
                <TokenIcon>ETH</TokenIcon>
              </div>
            ),
            id: 'ethereum'
          },
          {
            body: (
              <div>
                <TokenIcon>SOL</TokenIcon>
              </div>
            ),
            id: 'solana'
          },

          {
            body: (
              <div>
                <TokenIcon>USDT</TokenIcon>
              </div>
            ),
            id: 'usdt'
          },
          {
            body: <div>+ مدیریت لیست کوین ها</div>,
            id: 'manage tokens'
          }
        ]}
      </List>
    </>
  );
}
