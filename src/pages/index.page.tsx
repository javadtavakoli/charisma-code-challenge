import List from '@/components/common/list';
import TokenIcon from '@/components/common/token-icon';
import React from 'react';
import DashboardStyles from './index.styles';

export default function Home() {
  const { Heading, Row, Name, Address, Link } = DashboardStyles;
  return (
    <>
      <Heading>داشبورد</Heading>
      <List>
        {[
          {
            body: (
              <Row>
                <TokenIcon>BTC</TokenIcon>
                <Name>بیتکوین</Name>
                <Address>
                  1A1zP1eP5QGefi2DMPTfT
                  <br />
                  L5SLmv7DivfNa
                </Address>
              </Row>
            ),
            id: 'bitcoin'
          },
          {
            body: (
              <Row>
                <TokenIcon>BNB</TokenIcon>
                <Name>بایننس کوین</Name>
              </Row>
            ),
            id: 'binance coin'
          },
          {
            body: (
              <Row>
                <TokenIcon>ETH</TokenIcon>
                <Name>اتریوم</Name>
              </Row>
            ),
            id: 'ethereum'
          },
          {
            body: (
              <Row>
                <TokenIcon>SOL</TokenIcon>
                <Name>سولانا</Name>
              </Row>
            ),
            id: 'solana'
          },

          {
            body: (
              <Row>
                <TokenIcon>USDT</TokenIcon>
                <Name>تتر</Name>
              </Row>
            ),
            id: 'usdt'
          },
          {
            body: <Link href="/manage-tokens">+ مدیریت لیست کوین ها</Link>,
            id: 'manage tokens'
          }
        ]}
      </List>
    </>
  );
}
