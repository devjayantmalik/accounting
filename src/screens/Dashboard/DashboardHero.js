import React from 'react';
import {
  Card,
  CardItem,
  Left,
  Right,
  Text,
  Thumbnail,
  Body,
} from 'native-base';

import { Image } from 'react-native';

export default () => {
  return (
    <Card>
      <CardItem header bordered>
        <Left>
          <Thumbnail source={require('../../images/avatar.png')} />
          <Body>
            <Text>John Doe</Text>
            <Text note>Rs. 122</Text>
          </Body>
        </Left>
        <Right>
          <Text>Paid</Text>
          <Text note>1,00,00</Text>
        </Right>
      </CardItem>
    </Card>
  );
};
