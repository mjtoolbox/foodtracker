import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container } from 'native-base';

const DayEntryDetailScreen = (props) => {
  const mealEntryHandle = () => {
    props.navigation.navigate('FoodList');
  };

  return (
    <View style={styles.container}>
      <Text>Daily entry detail - add + navigate to FoodListScreen </Text>
      <Text>Breakfast</Text>
      <Text>milk</Text>
      <Text onPress={mealEntryHandle}>+</Text>
      <Text>Lunch</Text>
      <Text>pasta</Text>
      <Text onPress={mealEntryHandle}>+</Text>
      <Text>Dinner</Text>
      <Text>steak</Text>
      <Text onPress={mealEntryHandle}>+</Text>
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
