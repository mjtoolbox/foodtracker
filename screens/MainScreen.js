import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container } from 'native-base';

const MainScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Main Screen, should have header/footer/List of days</Text>
      <Text>Add button to navigate to FoodListscreen, select day to DayEntryDetailScreen</Text>
      <Text>Dec 31, 2020</Text>
      <Text>Jan 1, 2021</Text>
      <Text>Jan 2, 2021</Text>
      <Text>Jan 3, 2021</Text>
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
export default MainScreen;
