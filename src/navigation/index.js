import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../containers/HomeScreen'
import DetailsScreen from '../containers/DetailsScreen'

const AppNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
