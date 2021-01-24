import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DailyMealList from '../components/DailyMealList';

const DayEntryListScreen = (props) => {
  const dayClickHandler = () => {
    console.log('dayclickhandler clicked, navigate');
    props.navigation.navigate('DayEntryDetail');
  };

  const addMealHandler = () => {
    console.log('addMealHandler clicked, navigate');
    props.navigation.navigate('FoodList');
  };

  return <DailyMealList />;
};

export default DayEntryListScreen;
