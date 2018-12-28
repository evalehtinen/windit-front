import { createBottomTabNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native'
import colors from '../../../styles/common'
import HomeScreen from '../../../containers/home_screen'
import DetailsScreen from '../../../containers/details_screen'

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    alignSelf: 'center',
    paddingBottom: 10,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
  },
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
}, {
  defaultNavigationOptions: ({}),
  tabBarOptions: {
    activeTintColor: colors.crayolaRed,
    inactiveTintColor: 'gray',
    labelStyle: styles.text,
    tabStyle: styles.tab,
  },
});

export default TabNavigator;
