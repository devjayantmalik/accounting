import React from 'react';

import PartyCard from './PartyCard';
import { FlatList } from 'react-native';

const PARTIES = [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }];

const PartyList = () => {
  return (
    <FlatList
      data={PARTIES}
      keyExtractor={(item, index) => index.toString()}
      renderItem={(item) => <PartyCard />}
    />
  );
};

export default PartyList;
