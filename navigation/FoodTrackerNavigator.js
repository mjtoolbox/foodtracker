import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import DayEntryDetailScreen from '../screens/DayEntryDetailScreen';

const FoodTrackerNavigator = createStackNavigator({
  EntryList: MainScreen,
  DayEntryDetail: DayEntryDetailScreen,
});

export default createAppContainer(FoodTrackerNavigator);
