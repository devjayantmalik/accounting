import React from 'react';

import { Left, Right, Body, Header, Button, Icon, Title } from 'native-base';

export default () => {
  return (
    <Header hasSegment>
      <Left>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Dashboard</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="notifications" />
        </Button>
        <Button transparent>
          <Icon name="share" />
        </Button>
      </Right>
    </Header>
  );
};
