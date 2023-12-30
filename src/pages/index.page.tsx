import List from '@/components/common/list';
import TokenIcon from '@/components/common/token-icon';
import React from 'react';
import DashboardStyles from './index.styles';
import { useAppSelector } from '@/hooks/reduxHooks';

export default function Home() {
  const { Heading, Row, Name, Address, Link } = DashboardStyles;
  const { coins } = useAppSelector((state) => state.userCoins);

  return (
    <>
      <Heading>داشبورد</Heading>
      <List>
        {coins
          .map((coin) => ({
            body: (
              <Row>
                <TokenIcon>{coin.symbol}</TokenIcon>
                <Name>{coin.faName}</Name>
                <Address>{coin.address}</Address>
              </Row>
            ),
            id: coin.name
          }))
          .concat({
            body: <Link href="/manage-tokens">+ مدیریت لیست کوین ها</Link>,
            id: 'manage tokens'
          })}
      </List>
    </>
  );
}
