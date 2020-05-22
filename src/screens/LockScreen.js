import React from 'react';
import {
  Container,
  View,
  Content,
  Body,
  Text,
  Icon,
  Title,
  Item,
  Button,
  Card,
  CardItem,
  Left,
  Form,
  Label,
  Right,
  Input,
  Thumbnail,
} from 'native-base';

import InputOutline from '../components/OutlinedInput';

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
