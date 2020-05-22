import React from 'react';

import { Left, Right, Body, Header, Button, Icon, Title } from 'native-base';

export default () => {
  return (
    <Header hasSegment>
      <Left>
        <Button transparent>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>Party</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="share" />
        </Button>
        <Button transparent>
          <Icon name="more" />
        </Button>
      </Right>
    </Header>
  );
};
