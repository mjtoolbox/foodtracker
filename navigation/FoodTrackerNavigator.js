import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import DayEntryDetailScreen from '../screens/DayEntryDetailScreen';
import FoodListScreen from '../screens/FoodListScreen';
import CreateFoodScreen from '../screens/CreateFoodScreen';
import EnterMealScreen from '../screens/EnterMealScreen';

const FoodTrackerNavigator = createStackNavigator({
  Main: MainScreen,
  DayEntryDetail: DayEntryDetailScreen,
  FoodList: FoodListScreen,
  CreateFood: CreateFoodScreen,
  EnterMeal: EnterMealScreen,
});

export default createAppContainer(FoodTrackerNavigator);
