import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Button } from 'native-base';

const EnterMealScreen = (props) => {
  const logAndMoreHandler = () => {
    console.log('save and refresh');
  };

  const logSaveHandler = () => {
    props.navigation.navigate('DayEntryDetail');
  };

  return (
    <View style={styles.container}>
      <Text>
        Add meal - add more refresh back to current page, log this navigate to
        DailyEntryDetailScreen
      </Text>
      <Text>Display selected meal name</Text>
      <Text>serving size, calory</Text>
      <Text>
        meal time (breakfas, lunch, dinner, am snack, pm snack, night
        snack,anytime)
      </Text>
      <Button primary onPress={logAndMoreHandler}>
        <Text>LOG & ADD MORE</Text>
      </Button>
      <Button primary onPress={logSaveHandler}>
        <Text>LOG THIS</Text>
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
export default EnterMealScreen;
