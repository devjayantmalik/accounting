import React from 'react';
import { Container, Content, Text } from 'native-base';

import Header from './Header';
import Footer from './Footer';
import DashboardMenu from './DashboardMenu';
import DashboardHero from './DashboardHero';

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <DashboardHero />
      <DashboardMenu />
      <Footer />
    </Container>
  );
};

export default Dashboard;
