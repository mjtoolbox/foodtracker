import React, { useState } from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import AddMeal from './AddMeal';

const AppHeader = (props) => {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>Food Tracker</Title>
      </Body>
      <Right />
      <AddMeal />
    </Header>
  );
};

export default AppHeader;
