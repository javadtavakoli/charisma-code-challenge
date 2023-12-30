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
import useManageCoins from './index.logic';

const ManageTokens = () => {
  const router = useRouter();
  const { managingCoins, search, changeCoinStatus } = useManageCoins();

  const { Container, Row, Name, SwitchHolder } = ManageTokenStyles;
  return (
    <Container>
      <TopNav
        centerComponent={<p>مدیریت لیست کوین ها</p>}
        leftComponent={<BackIcon onClick={() => router.push('/')} />}
        rightComponent={<SearchIcon />}
      />
      <TextInput onChange={(e) => search(e.target.value)} placeholder="جستجو..." />
      <List>
        {managingCoins.map((coin) => ({
          body: (
            <Row>
              <TokenIcon>{coin.symbol}</TokenIcon>
              <Name>{coin.faName}</Name>
              <SwitchHolder>
                <Switch
                  name={coin.name}
                  checked={coin.selected}
                  onChange={(shouldAdd) => changeCoinStatus(shouldAdd, coin)}
                />
              </SwitchHolder>
            </Row>
          ),
          id: coin.name
        }))}
      </List>
    </Container>
  );
};

export default ManageTokens;
