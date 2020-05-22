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

const PARTY = 'JAYANT MALIK';
const DATE = new Date().toDateString();
const AMOUNT = '123';
const TRANSACTION_TYPE = 'Debit';
const DESCRIPTION =
  'I have written this long piece of text, just to see if i could see my transaction';

export default () => {
  return (
    <Card>
      <CardItem header bordered>
        <Left>
          <Thumbnail source={require('../../images/avatar.png')} />
          <Body>
            <Text style={styles.party}>Jane Doe</Text>
            <Text style={styles.date} note>
              Jan 1, 2020
            </Text>
          </Body>
        </Left>

        <Right>
          <Text style={styles.debit}>Debit</Text>
          <Text note style={styles.debit}>
            Rs. 1,220
          </Text>
        </Right>
      </CardItem>
      <CardItem>
        <Left>
          <Text style={styles.description}>{DESCRIPTION}</Text>
        </Left>
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
    color: '#093145',
  },
  credit: {
    color: '#107896',
  },
  party: {
    color: '#0d3d56',
  },
  date: {
    color: '#3c6478',
  },
  description: {
    color: 'black',
    textAlign: 'center',
  },
};
