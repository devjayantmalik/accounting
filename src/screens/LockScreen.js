import React from 'react';
import {
  Container,
  Content,
  Body,
  Text,
  Icon,
  Button,
  Card,
  CardItem,
  Left,
  Right,
  Thumbnail,
} from 'native-base';

import InputOutline from '../components/common/OutlinedInput';

const LockScreen = () => {
  return (
    <Container>
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Left>
              <Thumbnail source={require('../images/avatar.png')} />
              <Body>
                <Text>John Smith</Text>
                <Text note>PIN Required</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Content>
              <InputOutline
                autoFocus
                secureTextEntry
                placeholder="Secret PIN"
              />
            </Content>
          </CardItem>
          <CardItem footer bordered>
            <Left>
              <Button transparent>
                <Icon name="arrow-forward" />
                <Text>Proceed</Text>
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Icon name="md-unlock" />
                <Text>Reset</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default LockScreen;
