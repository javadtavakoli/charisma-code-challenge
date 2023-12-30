import React from 'react';
import { useRouter } from 'next/router';
import TopNav from '@/components/common/top-nav';
import BackIcon from '@assets/back.svg';
import SearchIcon from '@assets/search.svg';
import TextInput from '@/components/common/text-input';
import ManageTokenStyles from './index.styles';
import List from '@/components/common/list';
import TokenIcon from '@/components/common/token-icon';
import Switch from '@/components/common/switch';

const ManageTokens = () => {
  const router = useRouter();

  React.useEffect(() => {
    fetch(`/api/tokens?searchStr=b`)
      .then((response) => response.json())
      .then((res) => {
        console.log('res', res);
      });
    fetch(`/api/tokens?searchStr=btc`)
      .then((response) => response.json())
      .then((res) => {
        console.log('res', res);
      });
  }, []);
  const { Container, Row, Name, SwitchHolder } = ManageTokenStyles;
  return (
    <Container>
      <TopNav
        centerComponent={<p>مدیریت لیست کوین ها</p>}
        leftComponent={<BackIcon onClick={() => router.push('/')} />}
        rightComponent={<SearchIcon />}
      />
      <TextInput placeholder="جستجو..." />
      <List>
        {[
          {
            body: (
              <Row>
                <TokenIcon>BTC</TokenIcon>
                <Name>بیتکوین</Name>
                <SwitchHolder>
                  <Switch name='bitcoin'/>
                </SwitchHolder>
              </Row>
            ),
            id: 'bitcoin'
          },
          {
            body: (
              <Row>
                <TokenIcon>BNB</TokenIcon>
                <Name>بایننس کوین</Name>
                <SwitchHolder>
                  <Switch name='bnb' />
                </SwitchHolder>
              </Row>
            ),
            id: 'binance coin'
          },
          {
            body: (
              <Row>
                <TokenIcon>ETH</TokenIcon>
                <Name>اتریوم</Name>
                <SwitchHolder>
                  <Switch name='eth' />
                </SwitchHolder>
              </Row>
            ),
            id: 'ethereum'
          },
          {
            body: (
              <Row>
                <TokenIcon>SOL</TokenIcon>
                <Name>سولانا</Name>
                <SwitchHolder>
                  <Switch name='sol'/>
                </SwitchHolder>
              </Row>
            ),
            id: 'solana'
          },

          {
            body: (
              <Row>
                <TokenIcon>USDT</TokenIcon>
                <Name>تتر</Name>
                <SwitchHolder>
                  <Switch name='usdt'/>
                </SwitchHolder>
              </Row>
            ),
            id: 'usdt'
          }
        ]}
      </List>
    </Container>
  );
};

export default ManageTokens;
