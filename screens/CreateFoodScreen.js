import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Button } from 'native-base';

const CreateFoodScreen = (props) => {
  const saveFoodHandler = () => {
    console.log('saveFood');
    props.navigation.navigate('FoodList');
  };

  return (
    <View style={styles.container}>
      <Text>Create a new food - after save, back to FoodListScreen</Text>
      <Text>Form - food name, brand, serving, meaure, calory</Text>
      <Button primary onPress={saveFoodHandler}>
        <Text>Save Food</Text>
      </Button>
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
export default CreateFoodScreen;
