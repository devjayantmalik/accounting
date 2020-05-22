import React from 'react';
import { Container } from 'native-base';

import Header from './Header';
import SearchBar from './SearchBar';
import PartyList from './PartyList';

const Parties = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <PartyList />
    </Container>
  );
};

export default Parties;
