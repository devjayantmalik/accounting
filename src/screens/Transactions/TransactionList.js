import React from 'react';

import TransactionCard from './TransactionCard';
import { FlatList } from 'react-native';

const TRANSACTIONS = [
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 },
  { key: 5 },
];

const TransactionList = () => {
  return (
    <FlatList
      data={TRANSACTIONS}
      renderItem={(item) => <TransactionCard key={item.key} />}></FlatList>
  );
};

export default TransactionList;
