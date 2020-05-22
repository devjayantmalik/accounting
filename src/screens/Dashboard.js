import React from 'react';
import {
  Container,
  Left,
  Right,
  Body,
  Content,
  Footer,
  Text,
} from 'native-base';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <Left></Left>
        <Body></Body>
        <Right></Right>
      </Header>
      <Body>
        <Content>
          <Text>Hello!!!</Text>
        </Content>
      </Body>
      <Footer></Footer>
    </Container>
  );
};

export default Dashboard;
