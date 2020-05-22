import React from 'react';
import { Footer, Text, Button, Icon, FooterTab } from 'native-base';

export default () => {
  return (
    <Footer>
      <FooterTab>
        <Button>
          <Icon name="add" />
          <Text>Add</Text>
        </Button>
        <Button>
          <Icon name="bookmarks" />
          <Text>Bookmarks</Text>
        </Button>
        <Button>
          <Icon name="person" />
          <Text>Profile</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};
