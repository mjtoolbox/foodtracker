import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import DayEntryDetailScreen from '../screens/DayEntryDetailScreen';
import FoodListScreen from '../screens/FoodListScreen';
import CreateFoodScreen from '../screens/CreateFoodScreen';
import EnterMealScreen from '../screens/EnterMealScreen';
import DayEntryListScreen from '../screens/DayEntryListScreen';

const FoodTrackerNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      headerMode: 'none',
      headerShown: false,
    },
  },
  DayEntryList: {
    screen: DayEntryListScreen,
    navigationOptions: {
      headerTitleAlign: { alignSelf: 'center' },
      title: 'Log Entry List',
    },
  },
  DayEntryDetail: DayEntryDetailScreen,
  FoodList: FoodListScreen,
  CreateFood: CreateFoodScreen,
  EnterMeal: EnterMealScreen,
});

export default createAppContainer(FoodTrackerNavigator);
