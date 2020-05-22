import React from 'react';
import {
  Card,
  CardItem,
  Left,
  Body,
  Text,
  Right,
  Thumbnail,
  Button,
  Icon,
} from 'native-base';

export default () => {
  return (
    <Card>
      <CardItem header bordered>
        <Left>
          <Thumbnail source={require('../../images/avatar.png')} />
          <Body>
            <Text style={styles.party}>Jane Doe</Text>
            <Text style={styles.entries} note>
              12,000 Entries
            </Text>
          </Body>
        </Left>

        <Right>
          <Text style={styles.debit}>Balance</Text>
          <Text note style={styles.debit}>
            Rs. -1,220
          </Text>
        </Right>
      </CardItem>
      <CardItem footer>
        <Left>
          <Button transparent iconLeft>
            <Icon name="heart" />
            <Text>Update</Text>
          </Button>
        </Left>
        <Right>
          <Button danger transparent iconLeft>
            <Icon name="trash" />
            <Text>Delete</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
};

const styles = {
  debit: {
    color: '#cd594a',
  },
  credit: {
    color: '#107896',
  },
  party: {
    color: '#0d3d56',
  },
  entries: {
    color: '#3c6478',
  },
};
