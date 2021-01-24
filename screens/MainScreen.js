import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem,
} from 'native-base';
import { DAYS } from '../data/meal-data';
import DailyMealList from '../components/DailyMealList';
import AppHeader from '../components/Header';
import AppFooter from '../components/Footer';

const MainScreen = (props) => {
  return (
    <Container>
      <AppHeader />
      <Content><Text>Welcome to Food tracker</Text></Content>
      <AppFooter />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MainScreen;
