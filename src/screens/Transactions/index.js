import React from 'react';
import { Container } from 'native-base';

import Header from './Header';
import SearchBar from './SearchBar';
import TransactionList from './TransactionList';

const Transactions = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <TransactionList />
    </Container>
  );
};

export default Transactions;
