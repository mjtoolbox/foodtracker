import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableNativeFeedback,
} from 'react-native';
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

const formattedDate = (idate) => {
  var d = new Date(idate);
  let dayNum = d.getDay();
  let day = '';

  if (dayNum == '0') {
    day = 'SUN';
  } else if (dayNum == '1') {
    day = 'MON';
  } else if (dayNum == '2') {
    day = 'TUE';
  } else if (dayNum == '3') {
    day = 'WED';
  } else if (dayNum == '4') {
    day = 'THR';
  } else if (dayNum == '5') {
    day = 'FRI';
  } else if (dayNum == '6') {
    day = 'SAT';
  }
  return (
    d.getMonth() + 1 + ' ' + d.getDate() + ', ' + d.getFullYear() + ' ' + day
  );
};

const renderMealList = (itemData) => {
  return (
    <TouchableNativeFeedback>
      <ListItem>
        <Text>{formattedDate(itemData.item.date)}</Text>
      </ListItem>
    </TouchableNativeFeedback>
  );
};

const DailyMealList = (props) => {
  return (
    <FlatList
      data={DAYS}
      renderItem={renderMealList}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DailyMealList;
