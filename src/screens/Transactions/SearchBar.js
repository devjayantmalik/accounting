import React from 'react';
import { View, Item, Button, Icon, Input } from 'native-base';

export default () => {
  return (
    <View>
      <Item>
        <Button transparent>
          <Icon name="arrow-up" />
        </Button>
        <Input placeholder="Search" />
        <Button transparent>
          <Icon name="search" />
        </Button>
      </Item>
    </View>
  );
};
