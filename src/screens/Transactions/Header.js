import React from 'react';

import {
  Left,
  Right,
  Body,
  Header,
  Button,
  Input,
  Icon,
  Title,
  Item,
} from 'native-base';

export default () => {
  return (
    <Header hasSegment>
      <Left>
        <Button transparent>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>Transactions</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="search" />
        </Button>
        <Button transparent>
          <Icon name="more" />
        </Button>
      </Right>
    </Header>
  );
};
