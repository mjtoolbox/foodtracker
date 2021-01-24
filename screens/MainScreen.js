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
      <AppHeader go={() => props.navigation.navigate('FoodList')} />
      <Content>
        <Text>Welcome to Food tracker</Text>
        <Button
          bordered
          small
          onPress={() => props.navigation.navigate('DayEntryList')}
        >
          <Text>View Daily Entry List</Text>
        </Button>
      </Content>
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
