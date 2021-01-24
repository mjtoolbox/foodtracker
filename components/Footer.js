import React, { useState } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';

const AppFooter = (props) => {
  return (
    <Footer>
      <FooterTab>
        <Button full>
          <Text>Home</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default AppFooter;
