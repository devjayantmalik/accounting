import React from 'react';
import {
  Card,
  CardItem,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Content,
  Item,
} from 'native-base';

export default () => {
  return (
    <Content padder>
      <Card>
        <CardItem bordered>
          <Left>
            <Button primary bordered transparent iconLeft>
              <Icon name="analytics" />
              <Text>Entries</Text>
            </Button>
          </Left>
          <Right>
            <Button primary bordered transparent iconLeft>
              <Icon name="analytics" />
              <Text>Parties</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
      <Card>
        <CardItem bordered>
          <Left>
            <Button danger bordered transparent iconLeft>
              <Icon name="analytics" />
              <Text>Analytics</Text>
            </Button>
          </Left>
          <Right>
            <Button danger bordered transparent iconLeft>
              <Icon name="analytics" />
              <Text>Security</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>

      <Card>
        <CardItem bordered>
          <Left>
            <Button bordered transparent iconLeft>
              <Icon name="analytics" />
              <Text>Recent</Text>
            </Button>
          </Left>
          <Right>
            <Button bordered transparent iconLeft>
              <Icon name="analytics" />
              <Text>Support</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};
