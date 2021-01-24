import React, { Component } from 'react';
import { useFonts } from 'expo-font';
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
import DailyMealList from './components/DailyMealList';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import FoodTrackerNavigator from './navigation/FoodTrackerNavigator';

export default function App() {
  const [loaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return <FoodTrackerNavigator />;
}
