import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'native-base';

const AddMeal = (props) => {
  const enterMealHandler = () => {
    props.go('FoodList');
    // props.navigation.navigate('FoodList');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name='add' type='MaterialIcons' onPress={enterMealHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'flex-end',
    padding: 5,
  },
});
export default AddMeal;
