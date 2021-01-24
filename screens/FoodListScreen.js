import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container } from 'native-base';

const FoodListScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Food list - Add button to create new Food</Text>
      <Text>pasta</Text>
      <Text>bread</Text>
      <Text>milk</Text>
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
export default FoodListScreen;
