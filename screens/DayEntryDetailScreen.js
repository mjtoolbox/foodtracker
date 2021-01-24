import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container } from 'native-base';

const DayEntryDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Daily entry detail - add + navigate to FoodListScreen </Text>
      <Text>Breakfast</Text>
      <Text>milk</Text>
      <Text>+</Text>
      <Text>Lunch</Text>
      <Text>pasta</Text>
      <Text>+</Text>
      <Text>Dinner</Text>
      <Text>steak</Text>
      <Text>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DayEntryDetailScreen;
