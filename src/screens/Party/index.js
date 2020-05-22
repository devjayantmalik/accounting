import React from 'react';
import { Container, Content } from 'native-base';

import Header from './Header';
import PartyCard from './PartyCard';

const Party = () => {
  return (
    <Container>
      <Header />
      <Content>
        <PartyCard />
      </Content>
    </Container>
  );
};

export default Party;
