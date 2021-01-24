import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';

const LogMealScreen = (props) => {
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
      <Button primary>
        <Text>LOG & ADD MORE</Text>
      </Button>
      <Button primary>
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
export default LogMealScreen;
