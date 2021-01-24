import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container } from 'native-base';

const FoodListScreen = (props) => {
  const addNewFoodHandler = () => {
    props.navigation.navigate('CreateFood');
  };

  const enterEntryHandler = () => {
    props.navigation.navigate('EnterMeal');
  };

  return (
    <View style={styles.container}>
      <Text>Food list - Add button to create new Food</Text>
      <Text onPress={addNewFoodHandler}>+</Text>
      <Text onPress={enterEntryHandler}>pasta</Text>
      <Text onPress={enterEntryHandler}>bread</Text>
      <Text onPress={enterEntryHandler}>milk</Text>
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
